// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import {Route ,Switch,Redirect} from 'react-router-dom';
const api=require('./api/index')
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      students:[{}],
      isLoading:false
    }
  };
  componentDidMount =async()=>{
    this.setState({isLoading:true})
    await api.getStudents().then((students) => {
      this.setState({
        students:students.data.data,
       
      }).then(students=>console.log(students))
    }).catch((err) => {
      console.log(err);
    });
  }

  render(){
    const {students,isLoading}=this.state
  return (
      students.map(students=>(<div><p>{students.username}</p>
        <p>{students.acadId}</p>
        <p>{students.email}</p>
      </div>))
    );
  }
}

export default App;
