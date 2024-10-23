import styles from "./Home.module.css"
import Card from "../layout/Card"
function Home(){
    return(
        <div className={styles.div_home}>
            <Card/>
            <Card/>
            <Card/>
            
        </div>
    )
}
export default Home;