import React from 'react'
import GoogleFontLoader from 'react-google-font-loader';
import 'adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css'
import 'adminbsb-materialdesign/plugins/node-waves/waves.css'
import 'adminbsb-materialdesign/plugins/animate-css/animate.css'
import 'adminbsb-materialdesign/css/style.css'
// import AuthHandler from '../utils/AuthHandler';
// import { reactLocalStorage} from 'reactjs-localstorage';
// import { Redirect } from 'react-router-dom';
import Config from '../utils/Config';



import {withTranslation} from "react-i18next";
import { Link } from 'react-router-dom';


class LoginComponent extends React.Component{

    state={
        username:"",
        password:"",
        btnDisabled:true,
        loginStatus:0,
        lan:"en"
    };

    // saveInputs=(event)=>{
    //     var key = event.target.name;
    //     this.setState({[key]:event.target.value});
    //     if(this.state.username!="" && this.state.password!=""){
    //         this.setState({btnDisabled:false});
    //     }else{
    //         this.setState({btnDisabled:true});
    //     }
    // }

    // formSubmit=(event)=>{
    //     event.preventDefault();
    //     console.log(this.state);
    //     this.setState({loginStatus:1})
    //     AuthHandler.login(
    //         this.state.username,
    //         this.state.password,
    //         this.handleAjaxResponse
    //         );
    // };
   
    // handleAjaxResponse = (data) => {
    //     console.log(data);
    //     if(data.error){
    //         this.setState({loginStatus:4});
    //     }else{
    //         this.setState({loginStatus:3})
    //         window.location = Config.homeUrl
    //     }
    // }

    // getMessages=()=>{
    //     if(this.state.loginStatus===0){
    //         return  "";
    //     }
    //     else if(this.state.loginStatus===1){
    //         return (
    //             <div className="alert alert-warning">
    //                 <strong>loggin in!</strong> Please wait
    //             </div>
    //         );
    //     }
    //     else if(this.state.loginStatus===3){
    //         return (
    //             <div className="alert alert-success">
    //                 <strong>Login successfull</strong> 
    //             </div>
    //         );
    //     }
    //     else if(this.state.loginStatus===4){
    //         return (
    //             <div className="alert alert-danger">
    //                 <strong>Invalid Login !</strong> 
    //             </div>
    //         );
    //     }
    // }

    
  

    render(){

        const { t ,i18n} = this.props;

        // if (AuthHandler.loggedIn()){
        //     return <Redirect to={Config.homeUrl} />
        // }
        document.body.className="login-page"
        return(
            <React.Fragment>
                   <GoogleFontLoader
                        fonts={[
                            {
                            font: 'Roboto',
                            weights: [400, 700],
                            },
                        ]}
                        subsets={['latin','cyrillic-ext']}
                    />
                    <GoogleFontLoader
                        fonts={[
                            {
                            font: 'Material+Icons', 
                            },
                        ]}
                    />
                <div className="login-box">
                <div className="logo">
                    <a href="#">{t('login.main_title')}</a>
                    <small>{t('login.title', {framework:'React'})}</small>
                </div>
                <div className="card">
                    <div className="body">
                        <form id="sign_in" method="POST" onSubmit={this.formSubmit}>
                            <div className="msg">{t('login.sign_in_to_start')}</div>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="material-icons">person</i>
                                </span>
                                <div className="form-line">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="username" 
                                        placeholder={t('login.username')} 
                                        required 
                                        // autofocus="true"
                                        onChange={this.saveInputs}
                                        />
                                </div>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="material-icons">lock</i>
                                </span>
                                <div className="form-line">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password" 
                                        placeholder={t('login.password')} 
                                        required
                                        onChange={this.saveInputs}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-8 p-t-5">
                                    <input type="checkbox" name="rememberme" id="rememberme" className="filled-in chk-col-pink"/>
                                    <label htmlFor="rememberme">{t('login.remember_me')}</label>
                                </div>
                                <div className="col-xs-4">
                                    {/* <button className="btn btn-block bg-pink waves-effect" type="submit">{t('login.sign_in')}</button> */}
                                    <a href={Config.aHomeUrl} className="btn btn-block bg-pink waves-effect" type="submit">{t('login.sign_in')}</a>
                                </div>
                            </div>
                            <div className="row m-t-15 m-b--20">
                                <div className="col-xs-6">
                                    <a href="forgot-password.html">{t('login.forgot_password')}</a>
                                </div>
                            </div>
                            {/* {this.getMessages()} */}
                        </form>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

const Login = withTranslation('common')(LoginComponent)

export default Login;