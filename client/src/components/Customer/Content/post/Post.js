import "./post.css";

import { useState } from "react";

import { Form} from 'antd';
import { AppContext } from "../../../../Context/AppProvider";
import React from 'react'
import { AuthContext } from '../../../../Context/AuthProvider';
// import styled from 'styled-components';
import { addDocument } from "../../../../Firebase/services";

import Pos from './Pos'

// const FormStyled = styled(Form)`
//   display: flex;
//   width:85%;
//   justify-content: space-between;
//   align-items: center;
//   padding: 2px 2px 2px 0;
 
//   border-radius: 10px;
//   -webkit-box-shadow: -2px -3px 18px -2px #391FFF; 
//   box-shadow: -2px -3px 18px -2px #391FFF;
//   padding: 20px 20px;
//   margin-left:20px;
  
//   .ant-form-item {
//     flex: 1;
//     margin-bottom: 0;
//     width:100%;
    
//   }
// `;


export default function Post({ post }) {
  // const ran = Math.floor(Math.random() * 40) + 10
  // const [like, setLike] = useState(ran)
  // const [isLiked, setIsLiked] = useState(false)
  // const [isComment, setIsComment] = useState(false)
  // const { selectedcmt, selectedcmtID, setSelectedCmtID } = React.useContext(AppContext);
  //  const { history } = React.useContext(AuthContext)
  const { Post } = React.useContext(AppContext)

  const [inputvalue, setInputValue] = useState("")
  const [form] = Form.useForm();
  const { isLogin, setIsLogin, history } = React.useContext(AuthContext);
  let idpo = 1
  // const [count, setCount] = useState(0)

  const {myref,lim,setLim}=React.useContext(AppContext)


  const { user: { displayName, uid, photoURL } } = React.useContext(AuthContext)
  /**
   *  const roomRef = db.collection('rooms').doc(selectedRoomId);

    roomRef.update({
      members: [...selectedRoom.members, ...value.map((val) => val.value)],
    });

   */

  // const sendDataToParent = (index) => { // the callback. Use a better name
  //   console.log(index);
  //   setCount(index);
  // };








  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // }


  const handleOnSubmit = (d) => {
    //  console.log(d)
    if (!isLogin) {
      history.push('/login')
    }

    else {
      // e.preventDefault();
      addDocument("comment", {
        uid, photoURL, text: inputvalue,
        postID: d, displayName: displayName
      })

      //     console.log(d)
      form.resetFields(['message']);
    }





  }
        // const increase = () => {
        //   idpo++
        //   console.log("tang")
        //   return (
        //     <div></div>
        //   )
        // }

        // const likeHandler = () => {
        //   setLike(isLiked ? like - 1 : like + 1)
        //   setIsLiked(!isLiked)
        // }

          // const changeIdpost = (a) => {
          //   console.log("ok click", a)
          //   setSelectedCmtID(a)
          //   //   console.log("ok click", selectedcmtID)
          //   //   console.log("ok click", selectedcmt)
          // }

            // function formatDate(seconds) {
            //   let formattedDate = '';

            //   if (seconds) {
            //     formattedDate = formatRelative(new Date(seconds * 1000), new Date());

            //     formattedDate =
            //       formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
            //   }

            //   return formattedDate;
            // }
console.log("lim",lim)


  return (
    <div>
      {Post.map(po => {
        //  setIdpo(idpo+1)
        return (


          <div key={po.id}>
            {idpo === lim - 10 ?
              <div>
                <Pos
                  po={po}
                  idpo={idpo++}
                ></Pos>
                <div ref={myref} className="Scrolll"></div>
              </div>


              : <Pos
                po={po}
                idpo={idpo++}
              ></Pos>


            }

          </div>



          // <div className="post" key={po.id} id={po.id}  data-aos="fade-up" data-aos-delay={100} >
          //   {

          //   }
          //   {/* data-aos="fade-up" */}





          //  {/* { setLike(po.like)} */}




          //   <div className="postWrapper">
          //     <div className="postTop">
          //       <div className="postTopLeft">
          //         <img
          //           className="postProfileImg"
          //           src={po.photoURL ? po.photoURL : "assets/ys.jpg"}
          //           alt=""
          //         />
          //         <span className="postUsername">
          //           {po.displayName ? po.displayName : "???"}
          //         </span>
          //         <span className="postDate">{formatDate(po.createdAt?.seconds)}</span>
          //       </div>
          //       <div className="postTopRight">
          //         <MoreVert />
          //       </div>
          //     </div>
          //     <div className="postCenter" data-aos="fade-up" data-aos-delay={300}>
          //       <span className="postText">{po?.decr}</span>
          //       <img className="postImg" src={po?.photo} alt="" />
          //     </div>
          //     <div className="postBottom">
          //       <div className="postBottomLeft">
          //         <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
          //         <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
          //         <span className="postLikeCounter">{like} people like it</span>
          //       </div>
          //       <div className="postBottomRight" >
          //         {/* <span className="postCommentText"  >{po.comment} comments</span> */}
          //         <Button style={{ color: 'black', marginTop: 10 }} onClick={() => changeIdpost(po.id)}> Comments</Button>
          //       </div>
          //     </div>
          //     <div className="postComment">
          //       <div className="cmt">
          //         {/* {comment.map(cmt => {
          //           return (
          //             <Comment
          //               key={cmt.id}
          //               text={cmt.text}


          //               createdAt={cmt.createdAt}

          //             />
          //           )
          //         })} */}
          //         <Comment postID={po.id}
          //           sendDataToParent={sendDataToParent}



          //         />

          //         {/* <Comment
          //           text="niceeee ❤❤❤"


          //           createdAt="Today"
          //         />
          //         <Comment

          //           text="Lốc mà không bay vào thì là kẻ hèn _da su"


          //           createdAt="To day"
          //         /> */}


          //       </div>



          //       <div className="cmt-bot">
          //         {/* <form src href="/cc">
          //           <label>

          //           </label>
          //           <input className="cmt-in" type="text" placeholder="Nói gì đó đi pro .." />
          //           <img src="template/images/fun.png" alt="hihih" className="postProfileImg" onClick={clickComment}></img>

          //         </form> */}
          //         <div className="postTopLeft">
          //           <img
          //             className="postProfileImg"
          //             src={photoURL ? photoURL : "assets/ys.jpg"}
          //             alt=""
          //           />
          //           {/* <span className="postUsername">
          //             {po.displayName ? po.displayName : "???"}
          //           </span>
          //           <span className="postDate"></span> */}
          //         </div>
          //         <FormStyled form={form}>
          //           <Form.Item name='message'>
          //             <Input
          //              ref={inputRef}
          //               onChange={(e)=>handleInputChange(e)}
          //               onPressEnter={()=>handleOnSubmit(po.id)}

          //               bordered={false}

          //               placeholder='Nhập bình luận 😜😜😂     ...             icon : ( windown + . ) '
          //             />
          //           </Form.Item>
          //           <Button type='primary' onClick={()=>handleOnSubmit(po.id)}>
          //             Gửi
          //           </Button>
          //         </FormStyled>

          //       </div>
          //       {/* <div id="mess">
          //           <Button style={{ color: 'black', marginTop: 150 }} onClick={() => {
          //               auth.signOut();

          //               history.push('/login')
          //               console.log("ok")

          //           }}>dang xuat</Button>
          //       </div> */}


          //     </div>
          //   </div>

          // </div>






        )
      })}


      {/* <div className="post" data-aos="fade-up">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                alt=""
              />
              <span className="postUsername">
                {Users.filter((u) => u.id === post?.userId)[0].username}
              </span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={post.photo} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
              <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight" >
              <span className="postCommentText"  >{post.comment} comments</span>
            </div>
          </div>
          <div className="postComment">
            <div className="cmt">
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />

            </div>



            <div className="cmt-bot">
              <form src href="/cc">
                <label>

                </label>
                <input className="cmt-in" type="text" placeholder="Nói gì đó đi pro .." />
                <img src="template/images/fun.png" alt="hihih" className="postProfileImg" onClick={clickComment}></img>

              </form>

            </div>

          </div>
        </div>

      </div>
      <Button style={{ color: 'black', marginTop: 150 }} onClick={() => auth.signOut()}>dang xuat</Button> */}
    </div >
  );

}


