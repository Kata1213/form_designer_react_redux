import {Component} from "react";
import  React from "react";
import ReactDOM from 'react-dom';

export default class HelloWorld extends Component{
    constructor(props){
        super(props)
    }


    render(){
        const style={fontSize:32,color:'#8ca5e3'};
        return(
            <div style={style}>Hello World, Hello React</div>
        )
    }
}
// ReactDOM.render(<HelloWorld/>, document.root);