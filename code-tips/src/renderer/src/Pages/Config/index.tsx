import styles from './style.module.scss'

function Config(): React.JSX.Element {
    return (
        <main className={styles.container}>
            <div></div>
            <div></div>
            <div className={ styles.category }></div>
            <div className={ styles.content }></div>
            <div className={ styles.nav }></div>
        </main>
    )
}
export default Config
