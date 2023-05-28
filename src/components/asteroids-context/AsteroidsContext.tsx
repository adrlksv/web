import { createContext, FC, ReactNode, useState } from 'react'

export const AsteroidsContext = createContext(null)

type AsteroidsContextProviderProps = {
    children?: ReactNode
}

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({
    children,
}) => {
    const [asteroids, setAsteroids] = useState([])
    const [onlyDangerous, setOnlyDangerous] = useState(false)
    const [distanceMode, setDistanceMode] = useState(true)
    const [destroyment, setDestroyment] = useState([]);

    console.log(destroyment)
    const addAsteroid = (asteroid)=>{
        setDestroyment([...destroyment.filter(item=>item.id !== asteroid.id), asteroid])
    }

    const deleteAsteroid = (asteroid) => {
        setDestroyment([...destroyment.filter(item=>item.id !== asteroid.id)])
    }

    return (
        <AsteroidsContext.Provider
            value={{
                asteroids,
                setAsteroids,
                onlyDangerous,
                setOnlyDangerous,
                distanceMode,
                setDistanceMode,
                addAsteroid,
                destroyment
            }}
        >
            {children}
        </AsteroidsContext.Provider>
    )
}