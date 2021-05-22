import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CallPage from '../CallPage/CallPage.Component';
import Options from '../CallPage/Options';
import Notifications from '../CallPage/Notification';
// import { ContextProvider } from '../../SocketContext';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const Meeting = () => {
  const classes = useStyles();

  return (
   <div className={classes.wrapper}>
     {/* <ContextProvider> */}
     <AppBar className={classes.appBar} position="static" color="inherit">
     <Typography variant="h2" align="center">Video Chat</Typography>
   </AppBar>
   <CallPage />
   <Options>
     <Notifications />
   </Options>
   {/* </ContextProvider> */}
  
   </div>
    // <div className="main">

    //   <button>hello</button>
      
    // </div>
  );
};

export default Meeting;