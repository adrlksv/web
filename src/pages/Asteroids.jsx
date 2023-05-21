import {AsteroidCard} from "../components/card/Card";
import styles from "./Asteroids.module.css"
import {Header} from "../components/header/Header";
import {Link} from "react-router-dom";
import {useState} from "react";
export const Asteroids = () => {

    const [asteroids] = useState(generateAsteroids())

    const [onlyDangerous,setonlyDangerous] = useState(false)
    const [onlyhdistanceMode, setonlyhdistanceMode] = useState(true)
    return (<div>
        <div>
            <Header/>
        </div>
        <div>
            <div>
                <div>
                    <input type="checkbox" value={onlyDangerous} onChange={()=>setonlyDangerous(!onlyDangerous)}>
                    </input>
                    <label>Показать только опасные</label>
                </div>

                <div className={styles.distances}>
                    <label >Расстояние</label>
                    <Link onClick={()=>setonlyhdistanceMode(true)}>в километрах</Link>
                    <Link onClick={()=>setonlyhdistanceMode(false)}>в дистанциях до луны</Link>
                </div>
            </div>
            {
                onlyDangerous ? asteroids.filter((item)=>item.isDangerous).map((item)=><AsteroidCard {...item} distanceMode={onlyhdistanceMode}/>) :
                    asteroids.map((item)=><AsteroidCard {...item} distanceMode={onlyhdistanceMode}/>)
            }
        </div>
    </div>)
}

const generateAsteroids = ()=> {
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
        `декабря`,];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result = [];
    for (let i = 0; i < (Math.random() * 20 + 2).toFixed(0); i++) {
        let namee = "";
        for (let j = 0; j < (Math.random() * 10 + 2).toFixed(0); j++) {
            namee += characters[(Math.random() * 25).toFixed(0)];
        }
        const name = namee;
        const date = `${(Math.random() * 27 + 1).toFixed(0)} ${months[(Math.random() * 12).toFixed(0)]} 2023`;
        const size = (Math.random() * 100 + 10).toFixed(0);
        const distance = (Math.random() * 90000000).toFixed(0);
        const isDangerous = Math.random() >=0.5;
        result.push({name, date, size, distance, isDangerous})
    }
    return result;
}