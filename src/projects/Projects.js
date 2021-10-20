import React from 'react';
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from '../assets/images/todolist.jpg'
import socialImage from '../assets/images/socialNet.jpg'
import weatherImage from '../assets/images/weather.jpg'
import Fade from "react-reveal/Fade";

const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const weather = {
        backgroundImage: `url(${weatherImage})`,
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
                                 description={'App for Task Management, Project Management, Productivity. '}/>
                        <Project style={weather}
                                 title={'Weather'}
                                 hrefDemo={'https://nastyazhilko.github.io/Weather-SPA/#/main'}
                                 hrefCode={'https://github.com/NastyaZhilko/Weather-SPA'}
                                 description={'App for getting information about the current weather,' +
                                 'forecast for 3 and 10 days, as well as hourly weather forecast.'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects;