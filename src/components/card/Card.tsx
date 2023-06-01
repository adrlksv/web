import { AsteroidContent } from './AsteroidContent/AsteroidContent'
import { AsteroidAction } from './AsteroidAction/AsteroidAction'
import { AsteroidImage } from './AsteroidImage/AsteroidImage'
import styles from './Card.module.css'
import React from "react";
import {useContext} from "react"
import {AsteroidsContext} from "../asteroids-context/AsteroidsContext";
import {CardContainer} from "./AsteroidContent/CardContentContainer";


type AsteroidCardProps = {
    name: string
    date: string
    distance: {
        kilometers: number
        lunar: number
    }
    size: number
    distanceMode: boolean
    isDangerous: boolean
}

export const AsteroidCard = (props: AsteroidCardProps) => {
    const {isDangerous, name, date, distance, size, distanceMode } = props

    const {addAsteroid} = useContext(AsteroidsContext)

    console.log('>>>>>>>>>, contextValue')

    return (
        <div className={styles.card}>
            <div className={isDangerous ? styles.cardRed : styles.regularCard}>
                <AsteroidImage />
                <CardContainer
                    name={name}
                    date={date}
                    distance={distance}
                    size={size}
                />
                <AsteroidAction isDangerous={isDangerous} onClick={()=>addAsteroid(props)}/>
            </div>
        </div>
    )
}
