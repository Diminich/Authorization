import React, { useState } from 'react';
import styles from './authorization.module.scss'

const Authorization = () => {
    const [nameEmail, setNameEmail] = useState('');
    const [namePassword, setnamePassword] = useState('');
    const [errorNameEmailPassword, setErrorNameEmailPassword] = useState(false)
    const [emptyNameEmailPassword, SetEmptyNameEmailPassword] = useState(false)

    const addLogIn = () => {
        if (nameEmail === 'example@example.com' && namePassword === 'password2021') {
            setErrorNameEmailPassword(false)
            alert('Вы вошли!')
        } else {
            setErrorNameEmailPassword(true)
        }
        
        if (nameEmail === '' && namePassword === '') {
            SetEmptyNameEmailPassword(true)
            setErrorNameEmailPassword(false)
        } else {
            SetEmptyNameEmailPassword(false)
        }
    }

    const styleErrorNameEmailPassword = {
        color: 'red', 
        marginBottom: 15
    }

    return (
        <nav className={styles.authorizationWrapper}>
            <div className={styles.authorizationMainContent}>
                <span style={{fontWeight: 650, fontSize: '220%'}}>Войти</span>
                <span style={{color: 'gray', margin: '15px 0px'}}>Добро пожаловать, рады вас видеть!</span>
                <div className={styles.authorizationButtonFacebookGoogle}>
                    <button className={styles.authorizationButtonFacebook}>Войти через Facebook</button>
                    <button className={styles.authorizationButtonGoogle}>Войти через Google</button>
                </div>
                <span style={{color: 'gray', marginBottom: 15, width: 13}}>или</span>
                <input className={errorNameEmailPassword || emptyNameEmailPassword ? styles.errorInput : styles.authorizationInputEmail} onChange={(e) => setNameEmail(e.currentTarget.value)} placeholder='Email'/>
                <input type={'password'} className={errorNameEmailPassword || emptyNameEmailPassword ? styles.errorInput : styles.authorizationInputPassword} onChange={(e) => setnamePassword(e.currentTarget.value)} placeholder='Пароль'/>
                {errorNameEmailPassword && <span style={styleErrorNameEmailPassword}>Неверный email или пароль</span>}
                {emptyNameEmailPassword && <span style={styleErrorNameEmailPassword}>Введите email, введите пароль</span>}
                <button className={styles.authorizationButtonLogIn} onClick={addLogIn}>Войти в аккаунт</button>
                <span style={{fontWeight: 'bold', color: '#5b43d6', cursor: 'pointer'}}>Забыли пароль?</span>
                <span style={{fontWeight: 'lighter', marginTop: 15}}>Email: example@example.com Пароль: password2021</span>
            </div>
        </nav>
    )
}

export default Authorization;