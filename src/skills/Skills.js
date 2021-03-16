import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIcon from "./../assets/images/react-icon.svg";
import jsIcon from "./../assets/images/js-icon.svg";
import htmlIcon from "./../assets/images/html-icon.svg";
import Fade from "react-reveal/Fade";

const Skills=()=> {
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;
    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={style.container}>
                <Title text={'Skills'}/>
                <Fade>
                <div className={style.skills}>
                    <Skill title={'JS'}
                           icon={js}
                           description={'detailed description of skills'}/>
                    <Skill title={'CSS'}
                           icon={html}
                           description={'detailed description of skills'}/>
                    <Skill title={'React'}
                           icon={react}
                           description={'detailed description of skills'}/>
                </div>
                    </Fade>
            </div>
        </div>
    );
}

export default Skills;