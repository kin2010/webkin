import React from 'react'

import Feed from  './Feed/Feed.js'

import { AuthContext } from '../../../Context/AuthProvider';
import Share from './share/Share'
export default function Content () {
    const Login=()=>{
       return(
           <div>
              <Share/>
           </div>
       )
    }
    const{ isLogin,setIsLogin} =React.useContext(AuthContext)
   
        return (

            <div>
            
                <section className="content section-padding">
                    <div className="container" id="content">
                    {isLogin?Login():Login()}
                      <Feed/>
                    </div>
                </section>
            </div>
        );
    
}