import React from 'react';
import style from './Footer.module.scss';
import Title from "../common/components/title/Title";
import telegramIcon from "../assets/images/telegram.svg"
import facebookIcon from "./../assets/images/facebook.svg"
import likedinIcon from "./../assets/images/linkedin.svg"
import vkIcon from "./../assets/images/vk.svg"

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.container}>
                <Title text={'Anastasia Zhilko'}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={telegramIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={facebookIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={likedinIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={vkIcon} alt=""/>
                        </a>
                    </div>
                </div>
                <span className={style.copyright}>2021 All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;