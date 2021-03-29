import React from 'react';
import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIcon from "./../assets/images/react-icon.svg";
import jsIcon from "./../assets/images/js-icon.svg";
import htmlIcon from "./../assets/images/html-icon.svg";
import tsIcon from "./../assets/images/ts-icon.svg";
import Fade from "react-reveal/Fade";

const Skills=()=> {
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;
    let ts = tsIcon;

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={style.container}>
                <Title text={'Skills'}/>
                <Fade>
                <div className={style.skills}>
                    <Skill title={'JS'}
                           icon={js}
                           description={'Data Types, Functions, Loops, Currying, Closure, This, Array Methods, ' +
                           'Recursion, EventLoop, Promise, Async-Await...'}/>
                    <Skill title={'CSS'}
                           icon={html}
                           description={'Flexbox, SASS, CSS3, CSS-Modules, Styled Components...'}/>
                    <Skill title={'React'}
                           icon={react}
                           description={'SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination...'}/>
                    <Skill title={'TypeScript'}
                           icon={ts}
                           description={'Migrate projects from JS to TS, Generics, typeof, ReturnType, Enum...'}/>
                </div>
                    </Fade>
            </div>
        </div>
    );
}

export default Skills;