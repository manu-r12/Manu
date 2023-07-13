import styles from './card.module.css'
import Header from './header/header';
import Links from './links/links';
import WavingHandIcon from '@mui/icons-material/WavingHand';
const Card = () => {
    return ( 
        <div className={styles.container}>
            <Header/>
            <div  className={styles.about}>
                <p className={styles.subHead}>
                Hey<span><WavingHandIcon style={{marginLeft: '10px'}} fontSize='small'/></span> , My name is Manu,
                </p>
                <p style={{marginTop:"10px"}}> React Fronted and iOS Developer </p>
                <p className={styles.p}>Let's Connect 🌱</p>
            </div>
            <Links/>
        </div>
     );
}
 
export default Card;