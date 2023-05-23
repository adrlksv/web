import styles from "./AsteroidContent.module.css"
type AsteroidContentProps = {
    name: string;
    date: string;
    distance: {
        kilometers: number;
        lunar: number
    };
    size: number;
    distanceMode: boolean;
}

export const AsteroidContent = (props: AsteroidContentProps) => {
    const { name, date, distance, size, distanceMode } = props;

    return (
        <div>
            <div className={styles.contentName}>{name}</div>
            <div className={styles.contentWrapper}>
                <div className={styles.contentDate}>{`Дата: ${date}`}</div>
                <div className={styles.contentDistance}>
                    {distanceMode
                        ? `Расстояние: ${distance.kilometers} км`
                        : `Расстояние: ${distance.lunar} Лун`}
                </div>
                <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
            </div>
        </div>
    );
};