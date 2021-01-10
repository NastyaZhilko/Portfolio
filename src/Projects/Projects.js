import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../Common/Styles/Container.module.css'
import Project from "./Project/Project";


const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <h2>Projects</h2>
                </div>
                <div className={style.projects}>
                    <Project title={'Название проекта'} description={'Краткое описание'}/>
                    <Project title={'Название проекта'} description={'Краткое описание'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;