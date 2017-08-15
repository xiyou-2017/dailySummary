import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './public/style.css';
import  'bootstrap/dist/css/bootstrap.min.css';
class HelloMessage extends Component {

    render() {
        return (<div>World</div>);
    }
}
ReactDOM.render(
    <HelloMessage />,
    document.getElementById('app')
)

