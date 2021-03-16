import React from 'react';
import style from './Nav.module.scss';

const Nav = () => {
    return (

        <div className={style.nav}>

            <a href="" className={style.inactive} activeClassName={style.active}>About me</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>


        </div>
    );
}

export default Nav;