import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Header } from './Header'
import { BrowserRouter } from 'react-router-dom'
import { AsteroidsContextProvider } from '../asteroids-context/AsteroidsContext'

describe('[components] Header', () => {
    const mockFunction = jest.fn()
    beforeEach(() => {
        render(
            <AsteroidsContextProvider>
                <BrowserRouter>
                    <Header someFunc={mockFunction}/>
                </BrowserRouter>
            </AsteroidsContextProvider>
        )
    })
    it('should contains common header html element', () => {
        const header = screen.getByRole('heading')
        expect(header).toBeInTheDocument()
        expect(header).toHaveTextContent('ARMAGGEDON V')
    })
    it('should contains links to asteroids and destroyment pages', () => {
        const links = screen.getAllByRole('links')
        expect(links[0]).toHaveAttribute('href', '/asteroids')
        expect(links[1]).toHaveAttribute('href', '/destroyment')
    })
    it('should contains button, after click on it should hide button and display input', () => {
        const button = screen.getByText('Unauthorized')
        expect(button).toBeInTheDocument()
        expect(screen.queryByTestId('api_key_input')).not.toBeInTheDocument()
        fireEvent.click(button)
        expect(mockFunction).toHaveBeenCalled()
        expect(mockFunction).toHaveBeenCalledTimes(1)
        expect(mockFunction).toHaveBeenCalledWith("123")
        waitFor(() => {
            expect(button).not.toBeInTheDocument()
            expect(screen.getByTestId('api_key_input')).toBeInTheDocument()
        })
    })
})
