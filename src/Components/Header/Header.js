import styles from "./Header.module.css";
import React from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const Header = ({toggleHambourger, isHambourgerOpen}) => {
    return <>
        <div  className={styles.containerMain}>
            <div className={styles.itemBox}>
                <div className={styles.button} onClick={() => toggleHambourger(!isHambourgerOpen)}>
                    {isHambourgerOpen ? <ClearIcon/> : <DehazeIcon/>}
                </div>
                <div className={styles.itemBox}>
                    <span className={styles.header}>STOX</span>
                    <span className={styles.itemOne}>|</span>
                    <span className={styles.itemTwo}>Energy socks</span>
                </div>
            </div>
            <div  className={styles.itemBox}>
                <span className={styles.icon}><SearchIcon/></span>
                <span><ShoppingBagIcon/></span>
            </div>
        </div>
    </>
}

