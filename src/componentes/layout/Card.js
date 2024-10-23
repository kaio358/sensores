import styles from "./Card.module.css"
function Card(props) {
    return(
        <div className={styles.div_card}>
            <div>
                <h2>{props.nome ? props.nome : "Objeto não identificado"}</h2>
            </div>
            <div>
                <p>Temperatura: </p>
                <p>Úmidade:   </p>
            </div>
        </div>
    )
}
export default Card;