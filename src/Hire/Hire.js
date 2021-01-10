import React from 'react';
import style from './Hire.module.css';
import styleContainer from '../Common/Styles/Container.module.css'


const Hire=()=> {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <a className={style.button}>Нанять меня</a>
            </div>
        </div>
    );
}

export default Hire;