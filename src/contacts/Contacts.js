import React from 'react';
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";


const Projects = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'сontacts'}/>
                <form className={style.contactForm}>
                    <input type="text" className={style.formArea} placeholder="Name"/>
                    <input type="text" className={style.formArea} placeholder="E-mail"/>
                    <textarea className={style.messageArea} placeholder="Message"/>
                    <button type="submit" >Send message</button>
                </form>
            </div>
        </div>
    );
}

export default Projects;