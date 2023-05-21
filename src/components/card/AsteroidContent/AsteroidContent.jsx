import styles from "./AsteroidContent.module.css"
export const AsteroidContent = (props) =>{
    const {name, date, distance, size,distanceMode} = props;
    return (
        <div>
            <div className={styles.contentName}>
                {name}
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.contentDate}>
                    {`Дата: ${date}`}
                </div>
                <div className={styles.contentDistance}>
                    {`Расстояние: ${distanceModes(distanceMode, distance)}`}
                    {distanceMode ? `Расстояние: ${distance.kilometers} км` : `Расстояние: ${distance.lunar} Лун`}
                </div>
                <div className={styles.contentSize}>
                    {`Размер: ${size} м`}
                </div>
            </div>
        </div>
    )
}
const distanceModes = (distanceMode, distance) => {
    if (distanceMode)
        return `${distance} км`
    else
        return `${(distance/363104)} Лун`
}