import React from 'react';
import Axios from 'axios';
export default class templateList extends React.Component{
    
     //this.const list =[]
    constructor(){
        super();
       // this.list = ['abacate','banana'];
       console.log('tempalte email');
        this.state = {list:['teste','teste']};
    }

        
    componentWillMount(){
        let that = this;
        console.log('ComponentWillMoun')
        Axios.get('http://localhost:2999/template/')
        .then(function (response) {
            console.log('response.data',response.data);
            // let newList = [];
            // newList.push(response.data);

            // console.log('newList',newList);

            that.setState({list:response.data})                
        })
        .catch(function (error) {
            alert(error);
        });
    }


    render(){
        console.log(this.state.list);
        return( 
            <ul> {
                this.state.list.map(function(itenList,index){
                    return <li key={index}>{itenList.corpo}</li>;                                
                })
            }
            </ul>            
        )
    }

}