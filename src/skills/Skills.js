import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIcon from "./../assets/images/react-icon.svg";
import jsIcon from "./../assets/images/js-icon.svg";
import htmlIcon from "./../assets/images/html-icon.svg";

const Skills=()=> {
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'}
                           icon={js}
                           description={'Подробное описание навыков '}/>
                    <Skill title={'CSS'}
                           icon={html}
                           description={'Подробное описание навыков'}/>
                    <Skill title={'React'}
                           icon={react}
                           description={'Подробное описание навыков'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;