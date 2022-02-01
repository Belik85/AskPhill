import React from 'react' ;
import styles from "./Sports.module.css";

export function Sports() {

    const sports = [
        {id: 1, title: "Sport Socks", amount: 10},
        {id: 2, title: "Running Socks", amount: 40},
        {id: 3, title: "Hockey Socks", amount: 22},
        {id: 4, title: "Ski Socks", amount: 15},
        {id: 5, title: "Flight Socks", amount: 20},
        {id: 6, title: "Hiking Socks", amount: 35},
    ]

    return <div>

        {sports.map(s => <div className={styles.list} key={s.id}>
            <div> {s.title} </div>
            <div>{s.amount} <span className={styles.products}>Products</span></div>
        </div>)}

    </div>


}


export default Sports;
