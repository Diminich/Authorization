import { type } from 'os';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './registration.module.scss'

interface TypeRegistrationProps {
    registrationName: string,
    setRegistrationName: (active: string) => void
}

const Registration = ({ registrationName, setRegistrationName }: TypeRegistrationProps) => {
    const [registrationEmail, setRegistrationEmail] = useState('');
    const [registrationPassword, setRegistrationPassword] = useState('');
    const [registrationNamePromoCode, setRegistrationNamePromoCode] = useState('');
    const [registrationPromoCode, isregistrationPromoCode] = useState(false);
    const [emptyNameEmailPasswordPromoCode, isEmptyNameEmailPasswordPromoCode] = useState(false);
    const [errorRegistrationEmailTitle, isErrorRegistrationEmailTitle] = useState(false);
    const [checkPassed, isCheckPassed] = useState(false)

    const createAccount = () => {
        let checkEmptyNameEmailPasswordPromoCode = false;
        let checkErrorEmail = false;
        if (registrationName === '' || registrationEmail === '' || registrationPassword === '') {
            checkEmptyNameEmailPasswordPromoCode = true
        }

        let str = (/^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/);
        let isEmailTitleError = str.test(registrationEmail)
        if (isEmailTitleError === false) {
            checkErrorEmail = true
        }
        if (!checkEmptyNameEmailPasswordPromoCode && !checkErrorEmail) {
            isCheckPassed(true)
        } else {
            isEmptyNameEmailPasswordPromoCode(checkEmptyNameEmailPasswordPromoCode)
            isErrorRegistrationEmailTitle(checkErrorEmail)
        }
    }

    const styleErrorNameEmailPassword = {
        color: 'red', marginBottom: 15
    }

    if (checkPassed) {
        return <Redirect exact from='/Registration' to='/ConfirmEmail' />
    } else {
        return (
            <nav className={styles.registrationWrapper}>
                <div className={styles.registrationMainContent}>
                    <span style={{ fontWeight: 650, fontSize: '220%' }}>Регистрация</span>
                    <span style={{ color: 'gray', margin: '15px 0px', textAlign: 'center' }}>Зарегистрируйся и получи доступ к аналитике аккаунтов.</span>
                    <div className={styles.registrationButtonFacebookGoogle}>
                        <button className={styles.registrationButtonFacebook}>Войти через Facebook</button>
                        <button className={styles.registrationButtonGoogle}>Войти через Google</button>
                    </div>
                    <span style={{ color: 'gray', marginBottom: 15, width: 13 }}>или</span>
                    <input className={emptyNameEmailPasswordPromoCode ? styles.errorInput : styles.registrationInputName} onChange={(e) => setRegistrationName(e.currentTarget.value)} placeholder='Имя' />
                    <input className={errorRegistrationEmailTitle || emptyNameEmailPasswordPromoCode ? styles.errorInput : styles.registrationInputEmail} onChange={(e) => setRegistrationEmail(e.currentTarget.value)} placeholder='Email' />
                    {errorRegistrationEmailTitle && <span style={styleErrorNameEmailPassword}>Возможно вы ошиблись в указании почтового сервиса</span>}
                    <input type={'password'} className={emptyNameEmailPasswordPromoCode ? styles.errorInput : styles.registrationInputPassword} onChange={(e) => setRegistrationPassword(e.currentTarget.value)} placeholder='Пароль' />
                    {registrationPromoCode === true ? <input className={styles.registrationInputPromoCode} onChange={(e) => setRegistrationNamePromoCode(e.currentTarget.value)} placeholder='Промокод' />
                        : <span style={{ fontWeight: 'bold', color: '#5b43d6', cursor: 'pointer', margin: '5px 0px 20px' }} onClick={() => isregistrationPromoCode(true)}>У меня есть промокод</span>}
                    {emptyNameEmailPasswordPromoCode && <span style={styleErrorNameEmailPassword}>Введите имя, введите email, введите пароль</span>}
                    <button className={styles.registrationButtonCreateAccont} onClick={createAccount}>Создать аккаунт</button>
                    <span style={{ fontWeight: 'bold', textAlign: 'center' }}>Создавая аккаунт я соглашаюсь с <span style={{ fontWeight: 'bold', color: '#5b43d6', cursor: 'pointer' }}>условиями оферты</span></span>
                </div>
            </nav>
        )
    }
}

export default Registration;