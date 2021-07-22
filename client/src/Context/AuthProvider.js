import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../Firebase/Config'
import { Spin } from 'antd'

import { db } from '../Firebase/Config'
export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {//nhan vao thamso
    //usefet lang nge su kien
    /**
     * co 1 fun don dep or rerender 
     * or unmoud
     */
    const checkLoginFromGoogle = (uid, email) => {
        var u = db.collection("users");
        let displayName, photoURL = ""
        var query = u.where("uid", "==", uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    console.log(doc.data().displayName, doc.data().photoURL)
                    displayName = doc.data().displayName;
                    photoURL = doc.data().photoURL;
                    setUser({ displayName, email, uid, photoURL })

                    return displayName, photoURL
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
        return displayName, photoURL
    }
    const [user, setUser] = useState({})
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true)
    const [isLogin, setIsLogin] = useState(false)
    React.useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged(async (user) => {
            //   console.log(user)
            console.log("hiii")
            if (user) {
                let { displayName, email, uid, photoURL } = user//lay vai field
                setIsLogin(true)
                if (displayName == null) {
                    setTimeout(function () {
                        const { a, b } =  checkLoginFromGoogle(uid, email)
                        console.log(a, b, "???????????")
                        displayName = a;
                        photoURL = b;
                    }, 4000)


                }

                setUser({ displayName, email, uid, photoURL })
                setIsLoading(false)
                history.push('/')
                return
            }
            setUser({});
            setIsLoading(false)
            setIsLogin(false)
            history.push('/')//sai dnhap
        });
        //clean function
        return () => {
            console.log('checking')
            unsubcribed()//de clean
        }
    }, [history])//dua history vao aray dependencies
    //sdu context api trong react
    console.log({ user: user })
    return (
        <AuthContext.Provider value={{
            user,
            isLogin, setIsLogin, history
        }}>
            {isLoading ? <Spin /> : children}

        </AuthContext.Provider>


    )
}