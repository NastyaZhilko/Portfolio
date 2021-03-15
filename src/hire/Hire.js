import React from 'react';
import style from './Hire.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";


const Hire=()=> {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <Title text={'I am available for freelance'}/>
                <a className={style.button}>hire me</a>
            </div>
        </div>
    );
}

export default Hire;