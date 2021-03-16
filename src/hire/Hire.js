import React from 'react';
import style from './Hire.module.scss';
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";


const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={style.container}>
                <Title text={'I am available for freelance'}/>
                <Button text={"Hire me"}/>
            </div>
        </div>
    );
}

export default Hire;