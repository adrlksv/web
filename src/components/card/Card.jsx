import styles from "./Card.module.css"
import {AsteroidContent} from "./AsteroidContent/AsteroidContent";
import {AsteroidAction} from "./AsteroidAction/AsteroidAction";
import {AsteroidImage} from "./AsteroidImage/AsteroidImage";
export const AsteroidCard = (props) => {

    const {name, date, distance, size, isDangerous, distanceMode} = props;

    return (<div className={styles.card}>
        <div className={isDangerous ? styles.cardRed : styles.normCard}>
            <AsteroidImage/>
            <AsteroidContent name={name} date={date} distance={distance} size={size} distanceMode={distanceMode}/>
            <AsteroidAction isDangerous={isDangerous}/>
        </div>

    </div>)
}