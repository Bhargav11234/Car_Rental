import React,{useState,useCallback} from 'react';
import { useNavigate } from 'react-router-dom';

import "./index.css"

const HomePage=()=>{

    const [value,setValue]=useState();
    const navigate=useNavigate();

    const handleJoinRoom= useCallback(()=>{
       navigate(`/room/${value}`)
    },[navigate,value])
    return(
        <>
        
        <div class="home">
            <h2>Enter the meet code here</h2>
            
            <input className='ashwin' value={value} onChange={(e)=> setValue(e.target.value)} type="text" placeholder='   Enter room code' ></input>
            
            <button className='manu' onClick={handleJoinRoom}>JOIN</button>
            {/* <script src="//code.tidio.co/djq8ocmg9gcwijajwpnbhb5zr61lvmj8.js" async></script> */}
        </div>
        </>
    );
}
export default HomePage;