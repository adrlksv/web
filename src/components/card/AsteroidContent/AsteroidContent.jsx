import styles from "./AsteroidContent.module.css"
export const AsteroidContent = () =>{
    return (
        <div>
            <div className={styles.contentName}>
                2021 FQ
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.contentDate}>
                    Дата: 12 сентября 2021 года
                </div>
                <div className={styles.contentDistance}>
                    Расстояние: 7 235 024 км
                </div>
                <div className={styles.contentSize}>
                    Размер: 85 м
                </div>
            </div>
        </div>
    )
}