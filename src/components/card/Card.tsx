import { AsteroidContent } from "./AsteroidContent/AsteroidContent";
import { AsteroidAction } from "./AsteroidAction/AsteroidAction";
import { AsteroidImage } from "./AsteroidImage/AsteroidImage";
import styles from "./Card.module.css";

type AsteroidCardProps = {
    name: string;
    date: string;
    distance: {
        kilometers: number;
        lunar: number;
    };
    size: number;
    isDangerous: boolean;
    distanceMode: boolean;
};

export const AsteroidCard = (props: AsteroidCardProps) => {
    const { name, date, distance, size, isDangerous, distanceMode } = props;

    return (
        <div className={styles.card}>
            <div className={isDangerous ? styles.cardRed : styles.normCard}>
                <AsteroidImage />
                <AsteroidContent
                    name={name}
                    date={date}
                    distance={distance}
                    size={size}
                    distanceMode={distanceMode}
                />
                <AsteroidAction isDangerous={isDangerous} />
            </div>
        </div>
    );
};