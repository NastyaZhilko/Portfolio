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
                        <Project style={socialNetwork}
                                 title={'Social Network'}
                                 hrefDemo={'https://nastyazhilko.github.io/SocialNetwork/'}
                                 hrefCode={'https://github.com/NastyaZhilko/simple-react-homeworks-master'}
                                 description={'A social networking service. An online platform for people to build ' +
                                 'social networks or social relationships with other people.'}/>
                        <Project style={todolist}
                                 title={'Todolist'}
                                 hrefDemo={'https://nastyazhilko.github.io/Todolist/'}
                                 hrefCode={'https://github.com/NastyaZhilko/Todolist'}
                                 description={'An app for Task Management, Project Management, Productivity. '}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects;