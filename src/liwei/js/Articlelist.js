/**
 * Created by weiqiujuan on 17-8-15.
 */
import React from 'react';
import '../css/edit.css';

function Itemlist(props) {

    return <li><a href="#">{props.value}</a></li>
}

function Artilelist(props) {
    const Items = props.Items;
    return (
        <div className="articlelist">
            <p>我的文章</p>
            <ul>
                {Items.map((val)=>
                    <Itemlist key={val.toString()}
                              value={val}/>
                )}
            </ul>
        </div>

    );
}

export default Artilelist;