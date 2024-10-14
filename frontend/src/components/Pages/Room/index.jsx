import React from 'react';
import {useParams} from 'react-router-dom';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'



const RoomPage=()=>{
    const {roomId}=useParams();
    const myMeeting=async(element)=>{
        const appID =1780430816 ;
        const serverSecret = "62945ea9c5b244814b8a0404dd004dab";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,Date.now().toString(),"Nishit Rokad");
         const zc=ZegoUIKitPrebuilt.create(kitToken);
         zc.joinRoom({
            container:element,
            sharedLinks:[
                {
                    name:'Copy Link',
                    url:`http://localhost:3000/room/${roomId}`
                }
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall, //Group call
            },
            showScreenSharingButton: true,
         })
    }

    return (
    <>
    
    <div>
     <div ref={myMeeting}/>
    </div>
    </>
    );
    
}

export default RoomPage;