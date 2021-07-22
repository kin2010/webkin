import React, { Component } from 'react'
export default class Customer extends Component {
    constructor(props) {
        super(props)
        this.state={
            mang:[]
        }
    }
    componentDidMount  (){
        fetch("/api")
        .then(res=>res.json())
        .then(resJson=>{
           console.log("Data :",resJson);
            this.setState({mang:resJson})
         
        })
        .catch(err=>{
          console.log(err)
        })
      }
    render() {
      //  const {cus}=this.state.mang;
        return (
           
            <div className="root">
                    {this.state.mang.map(e=>{
                      return(
                        <div key={e.id}>
                        <div>{e.id}</div>
                        <div>{e.name}</div>
                        <div>{e.age}</div>
                </div>  
                      )
                    })}
                    <div>hiii</div>
            </div>
        );
    }
}