import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

const Skills=()=> {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
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