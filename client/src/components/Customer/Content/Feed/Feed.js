
import React from 'react'

import "./feed.css";

import Post from  "../post/Post"
import {AppContext} from '../../../../Context/AppProvider'
export default function Feed (){
  const {myref}=React.useContext(AppContext)
    let {lim,setLim}=React.useContext(AppContext)
    const limm=()=>{
      setLim(lim+10)
      // window.scrollTo(0,document.getElementById("3").scrollHeight);
      console.log(lim)
      // let view=3
      // console.log(view)
      try{
        // var elmnt = document.getElementById(lim);
       // console.log("scroll")
      
       // elmnt.scrollIntoView();
       setTimeout(function(){ 
         try{
          myref.current.scrollIntoView({ behavior: 'smooth' }) 
          console.log("scroll")
         }
         catch(e){
          console.log("loi",e)
         }
       
        }, 2500);
      
      }
      catch(e){
        console.log("loi",e)
      }
     
    }
    return (
      <div className="feed">
        <div className="feedWrapper">
         
          {/* {Posts.map((p) => (
            <Post key={p.id} post={p} />
          ))} */}
          <Post/>
          <div className="more" onClick={limm}>Xem thêm ...</div>
        </div>
      </div>
    );
 

}
