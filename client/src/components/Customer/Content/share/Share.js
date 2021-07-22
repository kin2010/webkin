import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"
import { AuthContext } from "../../../../Context/AuthProvider";
import React, {useState}from 'react'
import styled from 'styled-components';
import { Form, Input } from 'antd';
import { addDocument } from '../../../../Firebase/services';
import { storage } from '../../../../Firebase/Config'
import { AppContext } from "../../../../Context/AppProvider";

const FormStyled = styled(Form)`
  display: flex;
  width:100%;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
 

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
    width:100%;
    
  }
`;
export default function Share() {



  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
    console.log(file)
  }

  // function handleUpload(e) {
  //   // e.preventDefault();
  //   const ref = storage.ref(`/images/${file.name}`);
  //   const uploadTask = ref.put(file);
  //   uploadTask.on("state_changed", console.log, console.error, () => {
  //     ref
  //       .getDownloadURL()
  //       .then((url) => {
  //         setFile(null);
  //         setURL(url);
  //         console.log(url)
  //       });
  //   });
  // }











  /** */
  const {inputValue, setInputValue} = React.useContext(AppContext)
  const [form] = Form.useForm();
  const {
    user: { displayName, uid, photoURL }
  } = React.useContext(AuthContext);
  
  const { user } = React.useContext(AuthContext);
  const { isLogin, setIsLogin, history } = React.useContext(AuthContext);
  console.log({ login: isLogin })
 
 
  const tagClick=()=>{
    // history.push('/video')
  }
  const handleOnSubmit = (e) => {

    if (!isLogin) {
      history.push('/login')
    }
    else {
      // e.preventDefault();

      if (file != null) {
        const ref = storage.ref(`/images/${file.name}`);
        const uploadTask = ref.put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
          ref
            .getDownloadURL()
            .then((url) => {
              setFile(null);
              setURL(url);
              console.log(url)



              // 
              addDocument('Post', {
                decr: inputValue,
                like: 10,
                photo: url,
                comment: 15,
                member: [],
                uid, photoURL,
                displayName,
              });







            });
        })

      //  setTimeout(()=>console.log("waiting"),2000)
      }
      else{
        console.log("No_image")
        addDocument('Post', {
          decr: inputValue,
          like: 10,
          photo: "",
          comment: 15,
          member: [],
          uid, photoURL,
          displayName,
        });
      }
      


     
     

      form.resetFields(['message']);
    }
      setURL("")
  }




  
 
  // const [value, setValue] = useState('')
  return (
    <div>
            
    <section className="content section-padding">
        <div className="container" id="content">
        
        
  
    <div className="share">


       

      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={user.photoURL?user.photoURL:"assets/ys.jpg"} alt="" />
          <FormStyled form={form}  >
            <Form.Item name='message' >
              <Input

                onChange={(e) => setInputValue(e.target.value)}
                onPressEnter={handleOnSubmit}
                placeholder='Ngày hôm nay thế nào 😂😂😂             icon : ( windown + .  )'
                bordered={false}
                autoComplete='off'

              />
            </Form.Item>
            {/* <Button type='primary' onClick={handleOnSubmit}>
           Gửi
         </Button> */}
          </FormStyled >
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">
                <form >
                  {/* <form onSubmit={handleUpload}> */}

                  <label htmlFor="file-up-load">Photo </label>
                  <input id="file-up-load" type="file" onChange={handleChange} />

                  {/* <button disabled={!file}>upload to firebase</button> */}
                </form>
              </span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <div onClick={tagClick}><span  className="shareOptionText">Tag</span></div>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" onClick={() => handleOnSubmit()}>Share</button>


        </div>
      </div>
    </div>








    </div>

    </section>
  </div>





    // <div className="share">


    //   {/* <Form form={form}>
    //     <Form.Item name='message' >
    //       <Input

    //         onChange={handleInputChange}
    //         onPressEnter={handleOnSubmit}
    //         placeholder='Nhập tin nhắn...'
    //         bordered={false}
    //         autoComplete='off'
    //       />
    //     </Form.Item>
    //     <Button type='primary' onClick={handleOnSubmit}>
    //       Gửi
    //     </Button>
    //   </Form> */}














    //   <div className="shareWrapper">
    //     <div className="shareTop">
    //       <img className="shareProfileImg" src={user?.photoURL} alt="" />
    //       <input
    //         placeholder="Ngày hôm nay thế nào 😂😂😂❤"
    //         className="shareInput"
    //         value={value}
    //         onChange={(e) => setValue(e)}


    //       />

    //     </div>

    //     <hr className="shareHr" />
    //     <div className="shareBottom">
    //       <div className="shareOptions">
    //         <div className="shareOption">
    //           <PermMedia htmlColor="tomato" className="shareIcon" />
    //           <span className="shareOptionText">Photo or Video</span>
    //         </div>
    //         <div className="shareOption">
    //           <Label htmlColor="blue" className="shareIcon" />
    //           <span className="shareOptionText">Tag</span>
    //         </div>
    //         <div className="shareOption">
    //           <Room htmlColor="green" className="shareIcon" />
    //           <span className="shareOptionText">Location</span>
    //         </div>
    //         <div className="shareOption">
    //           <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
    //           <span className="shareOptionText">Feelings</span>
    //         </div>
    //       </div>
    //       <button className="shareButton" onClick={() => clickShare()}>Share</button>









    //     </div>
    //   </div>


    // </div>

  );
}
