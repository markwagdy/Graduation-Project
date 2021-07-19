
 import React from 'react';
 import { Redirect, Route } from 'react-router-dom';
 
 // Utils
 
 const PrivateRoute = ({ component: Component, ...rest }) => {  
    
   var session_token=localStorage.getItem('user')
 
   return (
     <Route {...rest} render={props => (
      session_token !== null ? (
       < Component  {...props} />
       ) : (
             <Redirect to={{
               pathname: '/',
               state: { from: props.location }
               }}
             />
           )
       )} 
     />
   )
 };
 
 
 export default PrivateRoute;