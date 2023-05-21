import styles from "./Card.module.css"
import {AsteroidContent} from "./AsteroidContent/AsteroidContent";
import {AsteroidAction} from "./AsteroidAction/AsteroidAction";
import {AsteroidImage} from "./AsteroidImage/AsteroidImage";
export const AsteroidCard = () => {
    return (<div className={styles.card}>
        <div className={styles.normCard}>
            <AsteroidImage/>
            <AsteroidContent/>
            <AsteroidAction/>
        </div>

    </div>)
}
export const DangerAsteroidCard = () => {
    return (<div className={styles.card}>
        <div className={styles.cardRed}>
            <AsteroidImage/>
            <AsteroidContent/>
            <AsteroidAction/>
        </div>

    </div>)
}