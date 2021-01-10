import React from 'react';
import style from './Project.module.css';


const Project=(props)=> {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <a className={style.button}>Смотреть</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Project;