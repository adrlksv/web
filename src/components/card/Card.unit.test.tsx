import { render, screen } from '@testing-library/react'
import { AsteroidCard } from './Card'
import { AsteroidsContext } from '../asteroids-context/AsteroidsContext'

describe('[components] AsteroidCard', () => {
    const mockAddAsteroid = jest.fn()

    beforeEach(() => {
        render(
            <AsteroidsContext.Provider value={{ addAsteroid: mockAddAsteroid }}>
                <AsteroidCard
                    name="Test Asteroid"
                    date="2023-06-01"
                    distance={{ kilometers: 1000, lunar: 10 }}
                    size={10}
                    distanceMode={true}
                    isDangerous={true}
                />
            </AsteroidsContext.Provider>
        )
    })

    it('should render asteroid card with correct name and date', () => {
        const nameElement = screen.getByText('Test Asteroid')
        const dateElement = screen.getByText('2023-06-01')

        expect(nameElement).toBeInTheDocument()
        expect(dateElement).toBeInTheDocument()
    })

    it('should render asteroid card with correct distance and size', () => {
        const distanceElement = screen.getByText('Distance: 1000 kilometers / 10 lunar')
        const sizeElement = screen.getByText('Size: 10')

        expect(distanceElement).toBeInTheDocument()
        expect(sizeElement).toBeInTheDocument()
    })

    it('should call addAsteroid function on click', () => {
        const addButton = screen.getByText('Add Asteroid')
        addButton.click()

        expect(mockAddAsteroid).toHaveBeenCalled()
        expect(mockAddAsteroid).toHaveBeenCalledTimes(1)
        expect(mockAddAsteroid).toHaveBeenCalledWith({
            name: 'Test Asteroid',
            date: '2023-06-01',
            distance: { kilometers: 1000, lunar: 10 },
            size: 10,
            distanceMode: true,
            isDangerous: true
        })
    })
})