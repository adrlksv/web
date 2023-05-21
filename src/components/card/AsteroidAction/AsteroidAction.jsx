import styles from "./AsteroidAction.module.css";


export const AsteroidAction = () =>{
    return (
        <div>
            <div className={styles.actionGrade}>
                Оценка: опасен
            </div>
            <button className={styles.action}>
                <div className={styles.actionText}>
                    На уничтожение
                </div>
            </button>
        </div>
    )
}