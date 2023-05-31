import {Link} from "react-router-dom";
import styles from "./Header.module.css"
import {getUserKey} from "../../utils/getUserKey";
import {useState} from "react";
export const Header = () => {
    const [inputOpened, setInputOpened] = useState(false)

    return <div className={styles.container}>
        <div>
            <div className={styles.titleHeader}>ARMAGEDON V</div>
            <div className={styles.descHeader}>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
        </div>
        <div className={styles.routeContainer}>
            <Link to={'/asteroids'}>Астероиды</Link>
            <Link to={'/destroyment'}>Уничтожение</Link>
        </div>
        <div>
            {getUserKey() === "DEMO_KEY" ? <button onClick={()=>setInputOpened(!inputOpened)}>Unauthorized</button> : <div>Api key provided</div>}
        </div>
        {inputOpened ? <input onChange={(ev)=>{
            if (ev.target.value.length == 40) {
                localStorage.setItem("API_KEY", ev.target.value);
                setInputOpened(false);
            }
        }}/> : null}
    </div>
}