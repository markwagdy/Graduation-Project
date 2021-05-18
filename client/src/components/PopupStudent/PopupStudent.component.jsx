
import React from 'react'

import Alert from 'react-popup-alert'
import './PopupStudent.style.scss'

const App = () => {
  const [alert, setAlert] = React.useState({
    show: false
  })

  function onCloseAlert() {
    setAlert({
    type: '',
      text: '',
      show: false
     
    })
  }

  return (
    <div>
      <Alert 
        header={'Add New Course'}
        btnText={'Enter'}
        pressCloseOnOutsideClick={true}
        text={'Enter Course PIN'}
        type={alert.type}
        show={true}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom
        alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      />
    </div>
  )
}

export default App

















// --------------------------------------------------------------------------------------------
// class PopupStudent extends Component{


//     render(){
//         return(

//             <div>
//                 <Popup><h1>Hello</h1></Popup>
//             </div>
//         );
        
//     }




// }
// export default PopupStudent;
