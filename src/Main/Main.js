import React from 'react';
import style from './Main.module.css';
import styleContainer from '../../Common/Styles/Container.module.css'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.text}>
                <span>Hi There</span>
                <h1>I am Nastya Zhilko</h1>
                <p>Fronted developer</p>
            </div>
            <div className={style.photo}>
            </div>
            </div>
        </div>
    );
}

export default Main;