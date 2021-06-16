import '../meetingPage/meetingPage.style.scss';
import {HiChevronLeft} from 'react-icons/hi';
import {BsListNested} from 'react-icons/bs';
import {BiCommentDots} from 'react-icons/bi';
import { useLocation } from 'react-router-dom';



const MeetingPage=(props)=>{
    const dummy=['+20','MJ','KO','ZM','AK','KA','MW','AG','MM','SN'];
    const dummyList=dummy.map((e)=>
    <div className='placeholderDummy'>{e}</div>);
   
    let meetingCreator=false;
    const {state}=props.location;
    meetingCreator=state;
    
    return(
        
        <div className="mMS">
            { meetingCreator?
             <button className="join-room" >
                Join Room 
            </button>
            :""
            }  
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
            <div className="videoPlayer" >
               <video  className="MiS" autoPlay playsInline muted /> 

            </div>
            <div className="usersPlaceholder" >
                {/* {dummyList} */}

            </div>
            
            <button className="cNB">
                <BiCommentDots style={{fontSize:'40px',color:'white'}}/>


            </button>
            
            
        </div>
    
        
    )
}
export default MeetingPage;