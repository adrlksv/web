import {Link} from "react-router-dom";
import styles from "./Header.module.css"

export const Header = ()=>{
    return <div className={styles.container}>
        <div>
            <div className={styles.titleHeader}>ARMAGEDON V</div>
            <div className={styles.descHeader}>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
        </div>
        <div className={styles.routeContainer}>
            <Link to={'/asteroids'}>Астероиды</Link>
            <Link to={'/destroyment'}>Уничтожение</Link>
        </div>
    </div>
}