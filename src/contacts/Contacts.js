import React from 'react';
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import Fade from "react-reveal/Fade";


const Projects = () => {
    return (

        <div id='contacts' className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'сontacts'}/>
                <Fade>
                <form className={style.contactForm}>
                    <input type="text" className={style.formArea} placeholder="Name"/>
                    <input type="text" className={style.formArea} placeholder="E-mail"/>
                    <textarea className={style.messageArea} placeholder="Message"/>
                    <button type="submit" >Send message</button>
                </form>
            </Fade>
            </div>
        </div>
    );
}

export default Projects;