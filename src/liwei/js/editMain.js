/**
 * Created by lmy on 17-8-15.
 */
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import  'bootstrap/dist/css/bootstrap.min.css';
import SubmitBar from './Submit';
import Edit from './Edit';

class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <SubmitBar/>
                <Edit/>
            </div>
        )
    }
}
ReactDOM.render(
    <Main />,
    document.getElementById('app')
);

