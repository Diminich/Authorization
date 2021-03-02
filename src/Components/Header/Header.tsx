import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.scss'

const Header = () => {
    const { pathname } = useLocation();

    let confirmEmail = true;

    const isAuthorizationRegistration = () => {
        if (pathname === '/Authorization') {
            return '/Registration'
        } else {
            return '/Authorization'
        }
    }

    if (pathname === '/ConfirmEmail' || pathname === '/EmailNotCome') {
        confirmEmail = false
    } else {
        confirmEmail = true
    }

    return (
        <nav className={styles.headerWrapper}>
            <div className={styles.headerSpanWrapperLivedune}>
                <span>LIVEDUNE</span>
            </div>
            <div className={styles.headerWrapperButtonSpan}>
                {confirmEmail ? <span className={styles.headerSpanAccont}>{pathname === '/Authorization' ? 'У вас нет аккаунта?' : 'Уже есть аккаунт?'}</span>
                    : <NavLink to={'/Authorization'} style={{textDecoration: 'none', color: 'gray', cursor: 'pointer'}}><span>Выйти</span></NavLink>
                }
                {confirmEmail && <NavLink to={isAuthorizationRegistration}>
                    <button className={styles.headerButtonCheckIn}>{pathname === '/Authorization' ? 'Регистрация' : 'Войти'}</button>
                </NavLink>}
            </div>
        </nav>
    )
}

export default Header;