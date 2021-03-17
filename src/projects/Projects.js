import React from 'react';
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from '../assets/images/todolist.jpg'
import socialImage from '../assets/images/socialNet.jpg'
import Fade from "react-reveal/Fade";

const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={style.container}>
                <Title text={'Projects'}/>
                <Fade>
                    <div className={style.projects}>
                        <Project style={socialNetwork} title={'Social Network'} description={'short description'}/>
                        <Project style={todolist} title={'Todolist'}
                                 description={'short description short description ' +
                                 'short description short description short description '}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects;