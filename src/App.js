// import logo from './logo.svg';
// import './App.css';

import React,{useEffect}from 'react';
// import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom'; 
import Login from './pages/Login';
import LogoutComponent from './pages/LogoutComponent';
import PrivateRoute from './utils/PrivateRoute';
import {useTranslation} from "react-i18next";
import Config from './utils/Config';
import Error_404 from './components/404'
import HomeComponent from './pages/HomeComponent';
import InscriptionComponent from './pages/InscriptionComponent';
import InscriptionStudentsComponent from './pages/InscriptionStudentsComponent';
import TutorsComponent from './pages/TutorsComponent';
import StudentsComponent from './pages/StudentsComponent';
import ProjectsComponent from './pages/ProjectsComponent';
import ConfigComponent from './pages/ConfigComponent';
import ProjectComponent from './pages/ProjectComponent';
import ReportComponent from './pages/ReportComponent';

function App() {
  // const [t, i18n] = useTranslation('common');
  // useEffect(()=>{
  //   console.log(t)
  //   i18n.changeLanguage('es')
  // },[])
  return (
  <Router> 
    {/* <button onClick={() => i18n.changeLanguage('es')}>es</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>  */}
    <Switch>
        <Route exact path="/" component={Login}/>
        <PrivateRoute 
          exact           
          path={Config.aHomeUrl} 
          activepage="0"
          page={HomeComponent} />

          <PrivateRoute 
          exact           
          path={Config.aInscriptionUrl} 
          activepage="1"
          page={InscriptionComponent} />

          <PrivateRoute 
          exact           
          path={Config.aInscriptionStudentsUrl} 
          activepage="1"
          page={InscriptionStudentsComponent} />

          <PrivateRoute 
          exact           
          path={Config.aTutorUrl} 
          activepage="2"
          page={TutorsComponent} />

          <PrivateRoute 
          exact           
          path={Config.aStudentsUrl} 
          activepage="3"
          page={StudentsComponent} />

          <PrivateRoute 
          exact           
          path={Config.aProjectsUrl} 
          activepage="4"
          page={ProjectsComponent} />

          <PrivateRoute 
          exact           
          path={Config.aProjectsUrl+"/:id"} 
          activepage="4"
          page={ProjectComponent} />

          <PrivateRoute 
          exact           
          path={Config.aConfigUrl} 
          activepage="5"
          page={ConfigComponent} />

          <PrivateRoute 
          exact           
          path={Config.aReportsUrl} 
          activepage="6"
          page={ReportComponent} />

        <Route exact path={Config.logoutPageUrl} component={LogoutComponent}/>
        <Route component={Error_404} />
    </Switch>
  </Router>    
  );
}

export default App;
