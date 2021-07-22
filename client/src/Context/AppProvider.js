
import {useSlide} from '../Hook/useSlide'

import React, { useState ,useRef} from 'react'

import {usePage} from '../Hook/usePage'
export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    //   const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
    //   const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
   // const [Post,setPost]=useState();
   const myref=useRef(null)
   const [inputValue, setInputValue] = useState('');
     const [selectedcmtID, setSelectedCmtID] = useState('');
     const [lim,setLim] = useState(10);
     
 
    // const {
    //     user: { uid },
    // } = React.useContext(AuthContext);

    
    // const conditionPost=["0"];


    // const postCondition = React.useMemo(() => {
    //     return {
    //         fieldName: 'createdAt',
    //         operator: 'not-in',
    //         compareValue:conditionPost
    //     }
    // },[])
    // const Post=useFirestore("Post",postCondition)
    // console.log({postttt:Post})
    const Post=usePage("Post",lim)
      console.log({postttt:Post})
    const  conditionSlide=["","1"];
    const slideshowCondition = React.useMemo(() => {
        return {
            fieldName: 'photo',
            operator: 'not-in',
            compareValue:conditionSlide
        }
    },[])
    const Slideshow=useSlide("Post",slideshowCondition)



    // React.useEffect(()=>{
    //     const collectionRef=db.collection("Post").orderBy("createAt")
    //     .onSnapshot(snapshot=>{
    //         const documents = snapshot.docs.map((doc) => ({
    //             ...doc.data(),
    //             id: doc.id,
    //           }));
    //           setPost(documents)
    //     })
    //     return collectionRef;
    // },[Post])
   

   
    const selectedcmt = React.useMemo(
        () => 
        Post.find((po) => po.id === selectedcmtID) || {},
        [Post, selectedcmtID]
      );
    //(preProps, nextProps) => {return preProps.name ===nextProps.name }
    
   
    
//   const Cmt = (member) => {
//     const condition = member
//     const commentCondition = React.useMemo(() => {
//       return {
//         fieldName: 'userID',
//         operator: 'in',
//         compareValue: condition
//       }
//     }, [])
//     const cmt=useFirestore("comment",commentCondition)
//     return cmt
//   }



    
















    // const selectedRoom = React.useMemo(
    //     () => rooms.find((room) => room.id === selectedRoomId) || {},
    //     [rooms, selectedRoomId]
    // );

    // const usersCondition = React.useMemo(() => {
    //     return {
    //         fieldName: 'uid',
    //         operator: 'in',
    //         compareValue: selectedRoom.members,
    //     };
    // }, [selectedRoom.members]);

    // const members = useFirestore('users', usersCondition);

    // const clearState = () => {
    //     setSelectedRoomId('');
    //     setIsAddRoomVisible(false);
    //     setIsInviteMemberVisible(false);
    // };

    return (
        <AppContext.Provider
            value={{
              Post,
                selectedcmt,selectedcmtID,setSelectedCmtID,Slideshow
               ,inputValue, setInputValue,lim,setLim,myref
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
