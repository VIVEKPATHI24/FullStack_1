// import vimage from "../assets/vivek.png";
// import nimage from "../assets/neha.jpeg";
import nimage from "./neha.jpeg";
import vimage from "./vivek.png";
import mimage from "./manu.jpg";
import styles from "./CardFlip.module.css";

export const CardFlip = () => {
  return (
    <div className={styles['card-container']}>
      <div className={styles.card}>
        <div className={`${styles['card-face']} ${styles['card-front']}`}> 
          <img  src={vimage} alt="picture" style={{ width: "300px", height: "250px" }} ></img>
          {/* <h3 className="cardtitle">Hi Vivek</h3> */}
        </div>
        <div className={`${styles['card-face']} ${styles['card-back']}`}> 
          <img src={mimage} alt="picture" style={{ width: "200px", height: "250px" }} ></img>
          {/* <h3 className="cardtitle">Hi Neha</h3> */}
        </div>

      </div>
    </div>
  );
};
