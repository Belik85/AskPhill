import styles from "./MainMode.module.css";
import img5 from "../../assets/Screenshot_5.jpg";
import img6 from "../../assets/Screenshot_6.jpg";
import img7 from "../../assets/Screenshot_7.jpg";
import React from "react";

export const MainMode = () => {
    return <div>
        <h1 className={styles.text}>Ambassadors</h1>
        <div className={styles.text}>Our professional athletes and Olympians wear STOX</div>
        <div className={styles.text}>Energy Socks</div>
        <div className={styles.imgContainer}>
            <img className={styles.mainImage} alt="" src={img5}/>
            <img className={styles.mainImage} alt="" src={img6}/>
            <img className={styles.mainImage} alt="" src={img7}/>
        </div>
    </div>

}
