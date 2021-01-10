import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills=()=> {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Скилы</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Подробное описание навыков '}/>
                    <Skill title={'CSS'} description={'Подробное описание навыков'}/>
                    <Skill title={'React'} description={'Подробное описание навыков'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;