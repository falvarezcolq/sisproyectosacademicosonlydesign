import React from 'react';
import { Route  } from 'react-router-dom';
import MainComponent from '../components/MainComponent';



export var PrivateRoute = ({page,activepage,...rest}) =>{
    
    return (
        <Route
            {...rest}
            render = {(props)=> (
                <MainComponent page={page} activepage={activepage} {...props}/> 
            )}
        />
    );
}

export default PrivateRoute