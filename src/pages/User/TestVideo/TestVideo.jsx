// import React, { useContext, useEffect } from 'react'
// import VideoContext from '../../../callStore/video-call-context'
// import { useSelector } from 'react-redux';
// import { Video } from '../../../components/common';
// const TestVideo = () =>
// {
//     const { call,
//         callUser,
//         answerCall,
//         myVideo,
//         anotherVideo,
//         establishStream,
//         stream,
//         callEnded,
//         callAccepted,
//         leaveCall,
//     } = useContext(VideoContext);
//     const myPartnerId = useSelector(state => state.auth.userData.partnerId._id);
//     useEffect(() =>
//     {
//         establishStream();
//     }, [establishStream])

//     return (
//         <div>
//             <button
//                 onClick={() => { callUser(myPartnerId) }}
//             >
//                 Call
//             </button>

//             <button
//                 onClick={answerCall}
//             >
//                 Answer
//             </button>
//             <button
//                 onClick={leaveCall}
//             >
//                 leaveCall
//             </button>
//             {/* <p>
//                 {call}
//             </p> */}
//             <p>My video</p>
//             <Video
//                 videoRef={myVideo}
//                 muted={true}
//             />


//             <br />
//             <p>Another video</p>
//             { }
//             <Video
//                 videoRef={anotherVideo}
//             />

//             <br />

//         </div>
//     )
// }

// export default TestVideo