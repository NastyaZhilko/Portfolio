import React from 'react';
import style from './Footer.module.scss';
import Title from "../common/components/title/Title";
import telegramIcon from "../assets/images/telegram.svg"
import facebookIcon from "./../assets/images/facebook.svg"
import likedinIcon from "./../assets/images/linkedin.svg"
import vkIcon from "./../assets/images/vk.svg"
import gitHubIcon from "../assets/images/gitHubIcon.png"
import codewarsI from "../assets/images/codewars.svg"

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.container}>
                <Title text={'Anastasia Zhilko'}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a target={'blank'}
                           href="https://t.me/NastyaZhilko">
                            <img src={telegramIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a target={'blank'}
                           href="https://vk.com/idzxcvbnmas?_smt=feed%3A2">
                            <img src={vkIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a target={'blank'}
                           href="https://www.linkedin.com/in/anastasiya-zhilko-47380771/">
                            <img src={likedinIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a target={'blank'}
                           href="https://github.com/NastyaZhilko">
                            <img src={gitHubIcon} alt=""/>
                        </a>
                    </div>
                </div>
                <span className={style.copyright}>2021 All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;