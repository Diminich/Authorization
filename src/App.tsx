import React, {useState} from 'react';
import styles from './app.module.scss';
import Header from './Components/Header/Header';
import Authorization from './Components/Authorization/Authorization';
import Registration from './Components/Registration/Registration';
import ConfirmEmail from './Components/ConfirmEmail/ConfirmEmail';
import EmailNotCome from './Components/EmailNotCome/EmailNotCome';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  const [registrationName, setRegistrationName] = useState('');
  return (
    <div className={styles.wrapperApp}>
      <Header />
      <Switch>
        <Redirect exact from='/' to='/Authorization' />
        <Route exact path='/Authorization' render={() => <Authorization />} />
        <Route exact path='/Registration' render={() => <Registration registrationName={registrationName} setRegistrationName={setRegistrationName}  />} />
        <Route exact path='/ConfirmEmail' render={() => <ConfirmEmail registrationName={registrationName} />} />
        <Route exact path='/EmailNotCome' render={() => <EmailNotCome />} />
        <Route render={() => <div className={styles.notFound}>404 NOT FOUND</div>} />
      </Switch>
    </div>
  );
}

export default App;