import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'

const Main=()=> {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.text}>
                <span>Hi There</span>
                <span>I am Nastya<span>Zhilko</span></span>
                <h1>Frontend developer</h1>
            </div>
            <div className={style.photo}>
            </div>
            </div>
        </div>
    );
}

export default Main;