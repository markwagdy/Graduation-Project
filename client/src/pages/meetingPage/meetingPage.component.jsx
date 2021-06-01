import React,{useContext} from 'react';
import '../meetingPage/meetingPage.style.scss';
import {HiChevronLeft} from 'react-icons/hi';
import {BsListNested} from 'react-icons/bs';
import {BiCommentDots} from 'react-icons/bi';
import {useParamas, useParams} from 'react-router-dom';
import {ContextProvider, SocketContext} from '../../SocketContext';

// import axios from 'axios';

const MeetingPage=()=>{
    const dummy=['+20','MJ','KO','ZM','AK','KA','MW','AG','MM','SN'];
       
    const dummyList=dummy.map((e)=>
    <div className='placeholderDummy'>{e}</div>);
    return(
        
        <div className="mMS">
            <div className="bBW">
                <button type='button' className="backButton"> <HiChevronLeft style={{color:"#0F5298",fontSize:"25px"}}/> </button>
                <div className="sWrap">
                <span className="firstWord">CSE100, Course Name</span>
                <br/>
                <span className="secondWord">Section 8 Meeting </span>
                </div>
            </div>
            <button className="statNav">
                <BsListNested style={{color:'white',fontSize:"30px",position:"relative",top:'0px',padding:"1px"}}/>
            </button>
            <div className="videoPlayer">
               <span className="MiS"> Meeting is Starting ........</span>

            </div>
            <div className="usersPlaceholder">
                {dummyList}
            </div>
            
            <button className="cNB">
                <BiCommentDots style={{fontSize:'40px',color:'white'}}/>


            </button>
            
        </div>
    
        
    )
}
export default MeetingPage;