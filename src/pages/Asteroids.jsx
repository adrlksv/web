import {AsteroidCard} from "../components/card/Card";
import styles from "./Asteroids.module.css"
import {Header} from "../components/header/Header";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

export const Asteroids = () => {
    const [asteroids, setAsteroids] = useState([]);
    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [onlyhdistanceMode, setOnlyhdistanceMode] = useState(true);

    useEffect(() => {
        try {
            fetch("https://api.nasa.gov/neo/rest/v1/feed?api_key=IBHHw7GM4HWxZRxUQpSQZIylGjEwuUbIWy6IeXwX")
                .then((res) => res.json())
                .then((response) => {
                    let rawAsteroids = [];
                    for (const data in response.near_earth_objects) {
                        rawAsteroids = rawAsteroids.concat(response.near_earth_objects[data]);
                    }
                    const asteroids = rawAsteroids.map(item => {
                        const size = Math.trunc((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min) / 2);
                        const close = item.close_approach_data[0];
                        return {
                            name: item.name,
                            date: close.close_approach_date,
                            size,
                            distance: {
                                kilometers: close.miss_distance.kilometers,
                                lunar: close.miss_distance.lunar
                            },
                            isDangerous: item.is_potentially_hazardous_asteroid,
                            id: item.id
                        };
                    });
                    setAsteroids(asteroids);
                });
        } catch (err) {
            console.log(err);
            setAsteroids(generateAsteroids());
        }
    }, []);

    return (
        <div>
            <div>
                <Header/>
            </div>
            {
                onlyDangerous
                    ? asteroids.filter((item) => item.isDangerous).map((item) =>
                        <AsteroidCard key={item.id} {...item} distanceMode={onlyhdistanceMode}/>
                    )
                    : asteroids.map((item) =>
                        <AsteroidCard key={item.id} {...item} distanceMode={onlyhdistanceMode}/>
                    )
            }
        </div>
    );
}

const generateAsteroids = () => {
    const result = [];
    for (let i = 0; i < 10; i++) {
        const name = `Asteroid ${i + 1}`;
        const date = new Date().toLocaleDateString();
        const size = (Math.random() * 100 + 10).toFixed(0);
        const distance = (Math.random() * 90000000).toFixed(0);
        const isDangerous = Math.random() >= 0.5;
        result.push({name, date, size, distance, isDangerous, id: name});
    }
    return result;
}