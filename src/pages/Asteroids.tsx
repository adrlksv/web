import { AsteroidCard } from '../components/card/Card'
import styles from './Asteroids.module.css'
import { Header } from '../components/header/Header'
import { Link } from 'react-router-dom'
import {useContext, useEffect, useState} from 'react'
import {AsteroidsContext} from "../components/asteroids-context/AsteroidsContext";
import {getUserKey} from "../utils/getUserKey";

export const Asteroids = () => {


    useEffect(() => {
        try {
            fetch(
                `https://api.nasa.gov/neo/rest/v1/feed?api_key=${getUserKey()}`
            )
                .then((res) => res.json())
                .then((response) => {
                    let rawAsteroids = []
                    for (const data in response.near_earth_objects) {
                        rawAsteroids = rawAsteroids.concat(
                            response.near_earth_objects[data]
                        )
                    }
                    const asteroids = rawAsteroids.map((item) => {
                        const size = Math.trunc(
                            (item.estimated_diameter.meters
                                .estimated_diameter_max +
                                item.estimated_diameter.meters
                                    .estimated_diameter_min) /
                                2
                        )
                        const close = item.close_approach_data[0]
                        return {
                            name: item.name,
                            date: close.close_approach_date,
                            size,
                            distance: {
                                kilometers: close.miss_distance.kilometers,
                                lunar: close.miss_distance.lunar,
                            },
                            isDangerous: item.is_potentially_hazardous_asteroid,
                            id: item.id,
                        }
                    })
                    setAsteroids(asteroids)
                })
        } catch (err) {
            console.log(err)
            setAsteroids(generateAsteroids())
        }
    }, [])

    const {onlyDangerous, setOnlyDangerous, setDistanceMode} = useContext(AsteroidsContext)

    const handleOnlyDangerousChange = () => {
        setOnlyDangerous(!onlyDangerous)
    }

    const handleDistanceModeChange = (mode) => {
        setDistanceMode(mode)
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <div>
                    <div>
                        <input
                            type="checkbox"
                            checked={onlyDangerous}
                            onChange={handleOnlyDangerousChange}
                        />
                        <label htmlFor="onlyDangerous">Показать только опасные</label>
                    </div>
                    <div className={styles.distances}>
                        <label htmlFor="distance">Расстояние</label>
                        <Link to="/" onClick={() => setDistanceMode(true)}>
                            в километрах
                        </Link>
                        <Link to="/" onClick={() => setDistanceMode(false)}>
                            в дистанциях до луны
                        </Link>
                    </div>
                </div>
                <div>
                    {onlyDangerous
                        ? asteroids.filter((it) => it.isDangerous)
                              .map((item) => (
                                  <AsteroidCard
                                      key={item.id}
                                      {...item}
                                      distanceMode={distanceMode}
                                  />
                              ))
                        : asteroids.map((item) => (
                              <AsteroidCard
                                  key={item.id}
                                  {...item}
                                  distanceMode={distanceMode}
                              />
                          ))}
                </div>
            </div>
        </div>
    )
}

const generateAsteroids = () => {
    const months = [
        `января`,
        `февраля`,
        `марта`,
        `апреля`,
        `мая`,
        `июня`,
        `июля`,
        `августа`,
        `сентября`,
        `октября`,
        `ноября`,
        `декабря`,
    ]
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const result = []
    for (let i = 0; i < parseInt((Math.random() * 20 + 2).toFixed(0)); i++) {
        let namee = ''
        for (
            let j = 0;
            j < parseInt((Math.random() * 10 + 2).toFixed(0));
            j++
        ) {
            namee = ''
            for (let j = 0; j < 4; j++) {
                namee += characters[(Math.random() * 25).toFixed(0)]
            }
            const name = namee
            const date = `${(Math.random() * 27 + 1).toFixed(0)} ${
                months[(Math.random() * 12).toFixed(0)]
            } 2023`
            const size = (Math.random() * 100 + 10).toFixed(0)
            const distance = (Math.random() * 90000000).toFixed(0)
            const isDangerous = Math.random() >= 0.5
            result.push({ name, date, size, distance, isDangerous, id: name })
        }
    }
    return result
}
