import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './confirmEmail.module.scss';

interface TypeConfirmEmailProps {
    registrationName: string;
}

export const styleSpanEmailNotCome = {
    fontWeight: 700,
    color: '#5b43d6',
    cursor: 'pointer',
    textDecoration: 'none',
}

const ConfirmEmail = ({ registrationName }: TypeConfirmEmailProps) => {
    return (
        <div className={styles.wrapperConfirmEmail}>
            <span style={{ fontWeight: 650, fontSize: '220%', marginBottom: 15, textAlign: 'center', width: '80%' }}>Подтвердите ваш e-mail</span>

            <span className={styles.spanTextConfirmEmail}>
                {registrationName}, на ваш E-mail отправлено письмо со ссылкой для
            подтверждения. Перейдите по ней, чтобы активировать вашу учетную
            запись и получить 7 дней бесплатного доступа.
            </span>
            {/* <span style={styleText}>{registrationName}, на ваш E-mail отправлено письмо со ссылкой для</span>
            <span style={styleText}>подтверждения. Перейдите по ней, чтобы активировать вашу учетную</span>
            <span style={styleText}>запись и получить 7 дней бесплатного доступа.</span> */}
            <button className={styles.confirmEmailButton}>Перейти к почте</button>
            <NavLink to={'/EmailNotCome'} style={styleSpanEmailNotCome}>
                Мне не пришло письмо
            </NavLink>
        </div>
    )
}

export default ConfirmEmail;