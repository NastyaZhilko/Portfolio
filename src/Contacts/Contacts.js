import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../Common/Styles/Container.module.css'



const Projects = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contactForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                    <button type="submit" className={style.button}>Отправить</button>
                </form>

            </div>
        </div>
    );
}

export default Projects;