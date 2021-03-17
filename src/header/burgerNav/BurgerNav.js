import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (

        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <Link
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Main</Link>
                {/*   <a href='#skills'>Skills</a>*/}
                <Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Skills</Link>
                {/*<a href='#projects'>Projects</a>*/}
                <Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Projects</Link>
                {/*<a href='#contacts'>Contacts</a>*/}
                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Contacts</Link>
            </div>
            <label onClick={onBurgerBtnClick} className={style.burgerBtn}>
                <span></span>
            </label>
        </div>
    );
}

export default BurgerNav;