/**
 * Created by lmy on 17-8-16.
 */
import React from 'react';
import SubmitBar from './Submit';
import '../../css/edit.css';
class Head extends React.Component {
    render() {
        return (
            <div className="head">
                <img src="../public/hoo.jpg" width={60} height={50}/>
                用户名
                <SubmitBar/>
            </div>
        )
    }

}
export default Head;