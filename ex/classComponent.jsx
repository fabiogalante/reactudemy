import React, { Component } from 'react'

//Baseado emclasse
export default class  ClassComponent extends Component{

    render(){
        return(
        //Retorna o jsx
        <h1>{this.props.value}</h1>
        )
    }
}