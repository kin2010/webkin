import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState, useRef } from "react";
import Comment from "../Comment/Comment"
import { Button, Form, Input } from 'antd';
import { AppContext } from "../../../../Context/AppProvider";
import React from 'react'
import { AuthContext } from '../../../../Context/AuthProvider';

import styled from 'styled-components';
import { addDocument } from "../../../../Firebase/services";
import { formatRelative } from 'date-fns/esm';
const FormStyled = styled(Form)`
  display: flex;
  width:85%;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
 
  border-radius: 10px;
  -webkit-box-shadow: -2px -3px 18px -2px #391FFF; 
  box-shadow: -2px -3px 18px -2px #391FFF;
  padding: 20px 20px;
  margin-left:20px;
  
  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
    width:100%;
    
  }
`;
export default function Pos({ po ,idpo}) {

  const ran = Math.floor(Math.random() * 40) + 10
  const [like, setLike] = useState(ran)
  const [isLiked, setIsLiked] = useState(false)
  const [isComment, setIsComment] = useState(false)
  const { selectedcmt, selectedcmtID, setSelectedCmtID } = React.useContext(AppContext);
  //  const { history } = React.useContext(AuthContext)
  // const { Post } = React.useContext(AppContext)
  const inputRef = useRef(null);
  const [inputvalue, setInputValue] = useState("")
  const [form] = Form.useForm();
  const { isLogin, setIsLogin, history } = React.useContext(AuthContext);

  const [count, setCount] = useState(0)


  const isVideo = (e) => {
    if (e !== undefined) {
      console.log(e)
      return (
        <div className="vid">

          <iframe title="This is a unique title" className="video" height={345} src={e} >
            {/* <iframe width={420} height={345} src="https://www.youtube.com/embed/tgbNymZ7vqY"> */}
          </iframe>

        </div>
      )
    }

  }

  const { user: { displayName,  uid, photoURL } } = React.useContext(AuthContext)
  const sendDataToParent = (index) => { // the callback. Use a better name
    //console.log(index);
    setCount(index);
  };








  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
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

  const checkDe = (e) => {
   // console.log("checking")
    let id=""
    if (e !== "") {
     // console.log(e)
      if (e.indexOf('{') !== -1 && e.indexOf('}') !== -1) {
        let url = e.substring(e.indexOf('{') + 1, e.indexOf('}'))
        if(url.indexOf('&')!==-1){
          //https://www.youtube.com/watch?v=me0a3KSvEnI&list=RDJirhxY1LR_U&index=3
           id = url.substring(url.indexOf('=', 1) + 1, url.indexOf('&'))
        }
        else if(url.indexOf('=')!==-1){
          //https://www.youtube.com/watch?v=JirhxY1LR_U
           id = url.substring(url.indexOf('=', 1) + 1, url.length)

        }else{
          // https://www.youtube.com/JirhxY1LR_U
          id=url.substring(url.indexOf('/',url.indexOf('/')+2)+1,url.length)
        }
        //
        let decr = e.replace('{' + url + '}', '')
        console.log(decr, id)
        let url_youtube = "https://www.youtube.com/embed/" + id
        // +"?autoplay=1&mute=1"
        return (
          <div>
            <span className="postText">{decr}</span>
            <div className="vid">

              <iframe className="video" height={345} src={url_youtube}  >
              </iframe>

            </div>
          </div>
        )
      }else{
        return(
          <div>
           <span className="postText">{e}</span>

          </div>
        )
      }

    }

  }
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  const changeIdpost = (a) => {
    console.log("ok click", a)
    setSelectedCmtID(a)
    //   console.log("ok click", selectedcmtID)
    //   console.log("ok click", selectedcmt)
  }

  function formatDate(seconds) {
    let formattedDate = '';

    if (seconds) {
      formattedDate = formatRelative(new Date(seconds * 1000), new Date());

      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    return formattedDate;
  }
  return (

    <div id={idpo}>
      <div className="post" key={po.id}  data-aos="fade-up" data-aos-delay={100} >
        {
            
        }





        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src={po.photoURL ? po.photoURL : "assets/ys.jpg"}
                alt=""
              />
              <span className="postUsername">
                {po.displayName ? po.displayName : "???"}
              </span>
              <span className="postDate">{formatDate(po.createdAt?.seconds)}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>

          <div className="postCenter" data-aos="fade-up" data-aos-delay={300}>
            {checkDe(po.decr)}
            {/* <span className="postText">{po?.decr}</span>*/}
            <img className="postImg" src={po?.photo} alt="" /> 
            {po.video ? isVideo(po.video) : isVideo()}
          </div>



          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
              <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight" >
              {/* <span className="postCommentText"  >{po.comment} comments</span> */}
              <Button style={{ color: 'black', marginTop: 10 }} onClick={() => changeIdpost(po.id)}> {count} Comments</Button>
            </div>
          </div>
          <div className="postComment">
            <div className="cmt">

              <Comment postID={po.id}
                sendDataToParent={sendDataToParent}



              />



            </div>



            <div className="cmt-bot">

              <div className="postTopLeft">
                <img
                  className="postProfileImg"
                  src={photoURL ? photoURL : "assets/ys.jpg"}
                  alt=""
                />

              </div>
              <FormStyled form={form} className="fo">
                <Form.Item name='message'>
                  <Input
                    ref={inputRef}
                    onChange={(e) => handleInputChange(e)}
                    onPressEnter={() => handleOnSubmit(po.id)}

                    bordered={false}

                    placeholder='Nhập bình luận 😜😜😂     ...             icon : ( windown + . ) '
                  />
                </Form.Item>
                <Button type='primary' onClick={() => handleOnSubmit(po.id)}>
                  Gửi
                </Button>
              </FormStyled>

            </div>



          </div>
        </div>

      </div>
    </div>



  )
}