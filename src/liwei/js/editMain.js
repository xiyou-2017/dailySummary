/**
 * Created by lmy on 17-8-15.
 */
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import  'bootstrap/dist/css/bootstrap.min.css';
import Head from './Head';
import Edit from './Edit';
import Artilelist from './Articlelist';

const Items = [1, 2, 3];


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return (
            <div>
                <div className="main">
                    <Head/>
                    <Artilelist Items={Items}/>
                    <Edit/>

                </div>


            </div>
        )
    }
}
ReactDOM.render(
    <Main />,
    document.getElementById('app')
);
