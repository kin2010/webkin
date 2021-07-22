import React, { useState} from 'react'
import { formatRelative } from 'date-fns/esm';
import { useFirestore } from '../../../../Hook/useFirestore'
export default function Comment({ postID ,sendDataToParent}) {

  let [count, setCount] = useState(0);
  const condition = [postID, ""]
  //console.log(condition)

  const commentCondition = React.useMemo(() => {
    return {
      fieldName: 'postID',
      operator: 'in',
      compareValue: condition
    }
  }, condition)
  const comment = useFirestore('comment', commentCondition)
 // console(comment.size())
 React.useEffect(_=>{
  setCount(comment.length)
}, [comment]);
  
  //const count=comment.length

  // const count=()=>{
  //   const c=comment.length
  //   this.props.count(c);    
  // }
  
  React.useEffect(_=>{
    sendDataToParent(count)
  }, [count]);
  // React.useMemo(()=>{
  //   sendDataToParent(comment.length)
  // },[comment])

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
    <div>
      {comment.map(cmt => {
        return (
          <div className="Comment" key ={cmt.id}>
            <div className="cmt_left">
              <img src={cmt.photoURL ? cmt.photoURL : "assets/ys.jpg"}  alt="hihih" className="postProfileImg"/>

            </div>
            <div className="cmt_right">
              <div className="cmt_r"> 
              <div className="cmt_name">{cmt.displayName}</div><div className="postDate"> {formatDate(cmt.createdAt?.seconds)} </div>

              </div>
              <div className="text-cmt">{cmt.text}</div>
            </div>

          </div>
        )

      })}

    </div>
  );

}