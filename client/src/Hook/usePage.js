import React, { useState } from 'react';
import { db } from '../Firebase/Config';
export const usePage = (collection,lim) => {
  const [documents, setDocuments] = useState([]);
  const [first,setFirst]=useState()
  React.useEffect(() => {
    setDocuments([]);
    let first = db.collection(collection)
      .orderBy("createdAt", "desc").limit(lim)
      setFirst(first)
    const unsubscribe = first.onSnapshot((snapshot)=>{
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    //  console.log({ data, snapshot, docs: snapshot.docs })
      setDocuments(data);
    })

    return unsubscribe


  },[collection,lim])

  //  console.log("a") 
  return documents

}

export const useNext = (first) => {
  React.useEffect(() => {
    first.get().then((documentSnapshots) => {
      // Get the last visible document
      var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
      console.log("last", lastVisible);

      // Construct a new query starting at this document,
      // get the next 25 cities.
      var next = db.collection("Post")
        .orderBy("createdAt", "desc")
        .startAfter(lastVisible)
        .limit(10);
      return next;
    });
  })
}
  /**
 * var first = db.collection("cities")
      .orderBy("population")
      .limit(25);

return first.get().then((documentSnapshots) => {
// Get the last visible document
var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
console.log("last", lastVisible);

// Construct a new query starting at this document,
// get the next 25 cities.
var next = db.collection("cities")
        .orderBy("population")
        .startAfter(lastVisible)
        .limit(25);
});

 */