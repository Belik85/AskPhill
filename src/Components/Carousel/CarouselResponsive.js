import React from "react";
import styles from "./Carousel.module.css";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/Screenshot_1.jpg"
import img2 from "../../assets/Screenshot_2.jpg"
import img3 from "../../assets/Screenshot_3.jpg"
import img4 from "../../assets/Screenshot_4.jpg"


export const Responsive = () => {

    return (
        <div className={styles.carouselBox}>
            <Carousel
                showThumbs={false}
                showIndicators={false}
                showArrows={false}
                showStatus={false}
                emulateTouch
                onClickItem={false}

                centerMode
                centerSlidePercentage={23}
                swipeable
            >
                <div>
                    <img alt="" className={styles.carImage} src={img1}/>
                </div>
                <div>
                    <img alt="" className={styles.carImage} src={img2}/>
                </div>
                <div>
                    <img alt="" className={styles.carImage} src={img3}/>
                </div>
                <div>
                    <img alt="" className={styles.carImage} src={img4}/>
                </div>
            </Carousel>
        </div>
    );
}

