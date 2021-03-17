import React from 'react';
import style from './Main.module.scss';
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const particlesObj = {
    'particles': {
        'number': {
            'value': 150,
            'density': {
                'enable': true,
                'value_area': 800,
            }
        },
    },
}
const Main = () => {
    return (
        <div id='main' className={style.mainBlock}>
            <Particles
                className={style.particles}
                params={particlesObj}
            />
            <Fade top>
                <div className={style.container}>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <span>I am Anastasia<span>Zhilko</span></span>
                        <ReactTypingEffect
                            text={"Frontend developer."}
                        />
                    </div>
                    <Tilt className="Tilt" options={{max: 25}}>
                            <div className={style.photo}>
                                <div className={style.image}></div>
                            </div>
                    </Tilt>

                </div>
            </Fade>
        </div>
    );
}

export default Main;