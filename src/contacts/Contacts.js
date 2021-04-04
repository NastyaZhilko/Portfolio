import React, {useState} from 'react';
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import Fade from "react-reveal/Fade";
import axios from "axios";

const Projects = ({setModal}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sendMessage, setSendMessage] = useState('')
    const [disabled, setDisabled] = useState(false)
    const ChangeInputName = (e) => {
        setName(e.currentTarget.value)
    }
    const ChangeInputEmail = (e) => {
        setEmail(e.currentTarget.value)
    }
    const ChangeInputMessage = (e) => {
        setMessage(e.currentTarget.value)
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault()
        setDisabled(true)
        if (name.trim()) {
            const res = await axios.post("https://smtp-server-nodejs-g.herokuapp.com/sendMessage",
                {name, email, message})
            try {
                if (res.status === 200) {
                    setSendMessage('Success!')

                    setTimeout(() => {
                        setSendMessage('')
                        setName('')
                        setEmail('')
                        setMessage('')
                        setModal && setModal(true)
                    }, 1000)

                }
                setDisabled(false)
            } catch (e) {
                return setSendMessage(e.message)

            }
        } else {
            setDisabled(false)
            setSendMessage('Incorrect data')
        }
    }
    return (

        <div id='contacts' className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'сontacts'}/>
                <Fade>
                    <form className={style.contactForm}>
                        <input className={style.formArea}
                               type="text"
                               placeholder="Name"
                               value={name}
                               onChange={(e) => ChangeInputName(e)}
                        />
                        <input className={style.formArea}
                               type="text"
                               placeholder="E-mail"
                               value={email}
                               onChange={(e) => ChangeInputEmail(e)}
                        />
                        <textarea className={style.messageArea}
                                  placeholder="Message"
                                  value={message}
                                  onChange={(e) => ChangeInputMessage(e)}
                        />
                        <button type="submit" onClick={onSubmitHandler}>Send message</button>
                        {
                            disabled ? <span className={style.sendFont}>Loading...</span> : sendMessage.length > 0
                                ? <span className={style.sendFont}>{sendMessage}</span> : null
                        }
                    </form>
                </Fade>
            </div>
        </div>

    );
}

export default Projects;