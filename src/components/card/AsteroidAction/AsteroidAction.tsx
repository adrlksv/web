import styles from './AsteroidAction.module.css'

// eslint-disable-next-line react/prop-types
export const AsteroidAction = (props: {isDangerous: boolean, onClick: (asteroid: any)}) => {

    const {isDangerous, onClick} = props;

    return (
        <div>
            <div className={styles.actionGrade}>
                {`Оценка:      ${isDangerous ? `опасен` : `не опасен`}`}
            </div>
            <button className={styles.action} onClick={onCLick}>
                <div className={styles.actionText}>На уничтожение</div>
            </button>
        </div>
    )
}