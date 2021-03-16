import React from 'react';
import style from './Main.module.scss';

const Main=()=> {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
            <div className={style.greeting}>
                <span>Hi There</span>
                <span>I am Anastasia<span>Zhilko</span></span>
                <h1>Frontend developer.</h1>
            </div>
            <div className={style.photo}>
                <div className={style.image}>

                </div>
            </div>
            </div>
        </div>
    );
}

export default Main;