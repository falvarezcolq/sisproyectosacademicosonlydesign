import React from 'react';
import usericon from 'adminbsb-materialdesign/images/user.png';
import Config from '../utils/Config';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    state={
        defaultClass:"btn-group user-helper-dropdown",
        defaultClassItemDropdown:""
    }

    constructor(props){
        super(props)
        this.divref = React.createRef();
        this.divref2 = React.createRef();
    }

    componentWillMount(){
        document.addEventListener("mousedown",this.handleMouseClick,false)
    }
    componentWillUnmount(){
        document.removeEventListener("mousedown",this.handleMouseClick,false)
    }

    handleMouseClick = (event) =>{
        if(
            !(event.target === this.divref.current || 
            event.target === this.divref2.current) &&
            this.defaultClass !="btn-group user-helper-dropdown"
        ){
            this.setState({ defaultClass:"btn-group user-helper-dropdown" })
        } 
    }

    showLogoutMenu = () =>{
        if(this.state.defaultClass=="btn-group user-helper-dropdown"){
            this.setState({defaultClass:"btn-group user-helper-dropdown open"})
        }else{
            this.setState({defaultClass:"btn-group user-helper-dropdown"})
        }
    }

    onClickItemDropdown = () =>{
        if(this.state.defaultClass=="btn-group user-helper-dropdown"){
            this.setState({defaultClass:"btn-group user-helper-dropdown open"})
        }else{
            this.setState({defaultClass:"btn-group user-helper-dropdown"})
        }
    }
    render(){
        return (
            <section> 
                <aside id="leftsidebar" className="sidebar">
                    <div className="user-info">
                        <div className="image">
                            <img src={usericon} alt="User" width="48" height="48"/>
                        </div>
                        <div className="info-container">
                            <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fernando Alvarez</div>
                            <div className="email">Administrador</div>
                            <div className={this.state.defaultClass}>
                                <i 
                                    className="material-icons" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="true"
                                    onClick={this.showLogoutMenu}
                                    ref={this.divref}
                                >
                                    keyboard_arrow_down
                                </i>
                                <ul className="dropdown-menu pull-right">
                                    
                                    <li>
                                        <a
                                            href={Config.logoutPageUrl} 
                                            className=" waves-effect waves-block"
                                            ref={this.divref2}
                                            >
                                            <i className="material-icons">input</i>Cerrar sesión
                            
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div className="menu">
                        <div className="slimScrollDiv"
                            style={{
                                position: "relative", 
                                overflow: "hidden", 
                                width: "auto", 
                                // height: "253px"
                                }}>
                            <ul 
                                className="list" 
                                style={{
                                    overflow: "hidden", 
                                    width: "auto", 
                                    // height: "253px"
                                    }}>

                                <li className="header">Navegación principal</li>

                                {Config.sidebarItem.map(
                                    (item) =>(
                                            <li 
                                                key={item.index}
                                                className={
                                                    item.index === this.props.activepage? "active":""
                                                }
                                                >
                                                <Link to={item.url} className="toggled waves-effect waves-block">
                                                    <i className="material-icons">{item.icon}</i>
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li> 
                                            
                                            )
                                )}

                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle waves-effect waves-block">
                                        <i className="material-icons">widgets</i>
                                        <span>Widgets</span>
                                    </a>
                                    <ul className="ml-menu" style={{display: "none"}}>
                                        <li>
                                            <a href="javascript:void(0);" className="menu-toggle waves-effect waves-block">
                                                <span>Cards</span>
                                            </a>
                                            <ul className="ml-menu">
                                                <li>
                                                    <a href="../../pages/widgets/cards/basic.html" className=" waves-effect waves-block">Basic</a>
                                                </li>
                                                <li>
                                                    <a href="../../pages/widgets/cards/colored.html" className=" waves-effect waves-block">Colored</a>
                                                </li>
                                                <li>
                                                    <a href="../../pages/widgets/cards/no-header.html" className=" waves-effect waves-block">No Header</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" className="menu-toggle waves-effect waves-block">
                                                <span>Infobox</span>
                                            </a>
                                            <ul className="ml-menu">
                                                <li>
                                                    <a href="../../pages/widgets/infobox/infobox-1.html" className=" waves-effect waves-block">Infobox-1</a>
                                                </li>
                                                <li>
                                                    <a href="../../pages/widgets/infobox/infobox-2.html" className=" waves-effect waves-block">Infobox-2</a>
                                                </li>
                                                <li>
                                                    <a href="../../pages/widgets/infobox/infobox-3.html" className=" waves-effect waves-block">Infobox-3</a>
                                                </li>
                                                <li>
                                                    <a href="../../pages/widgets/infobox/infobox-4.html" className=" waves-effect waves-block">Infobox-4</a>
                                                </li>
                                                <li>
                                                    <a href="../../pages/widgets/infobox/infobox-5.html" className=" waves-effect waves-block">Infobox-5</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                
                            </ul>
                            
                            <div 
                                className="slimScrollBar" 
                                style={{background: "rgba(0, 0, 0, 0.5) none repeat scroll 0% 0%", width: "4px", position: "absolute", top: "0px", opacity: "0.4", display: "none", borderRadius: "0px", zIndex: "99", right: "1px",height: "68.753px" }}></div>
                            <div 
                                className="slimScrollRail" 
                                style={{width: "4px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "0px", background: "rgb(51, 51, 51) none repeat scroll 0% 0%", opacity: "0.2", zIndex: "90", right: "1px"}}></div>
                        </div>
                    </div>
                           
                    
                    
                    <div className="legal">
                        <div className="copyright">
                            © 2021 <a href="#">SSCPAT. ADMINISTRACIÓN DE EMPRESAS</a>.
                        </div>
                        <div className="version">
                            <b>Version: </b> 1.0.0
                        </div>
                    </div>
                    
                </aside>
                
                
                
                
            </section>
        );
    }
}


export default Sidebar;