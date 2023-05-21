import {Header} from "../components/header/Header";
import {AsteroidCard, DangerAsteroidCard} from "../components/card/Card";
import styles from "./Asteroids.module.css"
import {Link} from "react-router-dom";
export const Asteroids = () => {
    const asteroids = [{name: "I", isDangerous: true},{name: "II", isDangerous: false}];

    return (<div>
        <div>
            <Header/>
        </div>
        <div>
            <div>
                <div >
                    <input type="checkbox" value={asteroids.showMode}>
                    </input>
                    <label>Показать только опасные</label>
                </div>

                <div className={styles.distances}>
                    <label >Расстояние</label>
                    <Link>в километрах</Link>
                    <Link>в дистанциях до луны</Link>
                </div>
            </div>
            <DangerAsteroidCard/>
            <AsteroidCard/>
        </div>
    </div>)
}