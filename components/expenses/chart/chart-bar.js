import React, {useState} from 'react';
import styles from './chart-bar.module.css';
import {Fragment} from "react";

const ChartBar = (props) => {

    const {label, maxValue, value} = props;
    let barFillHeight = '0%';
    if (maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + '%';
    }

    return (
        <Fragment>
            <div className={styles['chart-bar']}>
                <div className={styles['chart-bar__inner']}>
                    <div style={{height: barFillHeight}} className={styles['chart-bar__fill']}>

                    </div>
                </div>
                <div className={styles['chart-bar__label']}>
                    {label}
                </div>
            </div>
        </Fragment>
    )
};

export default ChartBar;