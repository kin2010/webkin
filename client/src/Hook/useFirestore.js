import React, { useState } from 'react';
import { db } from '../Firebase/Config';

export const useFirestore = (collection, condition) => {
  const [documents, setDocuments] = useState([]);

  React.useEffect(() => {
    //componetdidmout :thuuc hien 1 lan duy nhat. /khi rerender k chay lai: !
    let collectionRef = db.collection(collection).orderBy("createdAt", "desc");
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        // reset documents data
        setDocuments([]);
        return;
      }

      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }
    setDocuments([]);
    const unsubscribe = collectionRef.limit(50).onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
     // console.log({ data, snapshot, docs: snapshot.docs })
      setDocuments(data);
    });
    //retrun : componentWillunMount : don dep, 
    return unsubscribe;
  }, [collection, condition]);
  //  console.log("a")
  return documents;
};




/**
 * useEffect(()=>{
 *    componentdidmout
 *      aa
 *    return{
 *        b
 *    }
 *
 * },[prop])
 *
 *
 *   prop=100.: aa xong b
 *  prop=200:  b roi a
 */
