import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './emailNotCome.module.scss';

const EmailNotCome = () => {
    const [inputName, isInputName] = useState('')
    const [inputEmailError, isInputEmailError] = useState(false)

    const addEmail = () => {
        if (!inputEmailError) {
            alert('Отправлено на почту')
        }
    }

    const checkEmailError = () => {
        let str = (/^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/);
        let isEmailTitleError = str.test(inputName)
        if (isEmailTitleError === false || inputName === '') {
            isInputEmailError(true)
        } else {
            isInputEmailError(false)
        }
    }

    const styleText = {
        color: 'gray',
        marginBottom: 5,
    }
    return (
        <div className={styles.wrapperEmailNotCome}>
            <span style={{ fontWeight: 650, fontSize: '220%', marginBottom: 15 }}>Мне не пришло письмо</span>
            <span style={styleText}>Письмо может придсти с задержкой в 5-10 минут.</span>
            <span style={styleText}>Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку</span>
            <span style={styleText}>"Спам". Если письмо все же не пришло, повторите попытк или напишите об этом в</span>
            <span style={styleText}>тех.поддержку <span style={{ fontWeight: 700, color: '#5b43d6', cursor: 'pointer' }}>support@livedune.ru</span> и мы активируем ваш аккаунт.</span>
            <input className={inputEmailError ? styles.errorInputEmail : styles.inputEmailNotCome} onBlur={checkEmailError} onChange={(e) => isInputName(e.currentTarget.value)} placeholder='Email' />
            {inputEmailError && <span style={{color: 'red', marginBottom: 15}}>Возможно вы ошиблись в указании почтового сервиса</span>}
            <button className={styles.emailNotComeButton} onClick={addEmail}>Отправить заново</button>
            <NavLink to={'/ConfirmEmail'} style={{ color: 'gray', textDecoration: 'none', fontWeight: 500 }}>
                Отмена
            </NavLink>
        </div>
    )
}

export default EmailNotCome;