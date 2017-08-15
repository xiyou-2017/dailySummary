/**
 * Created by weiqiujuan on 17-8-15.
 */
import React from 'react';


function Itemlist(props){

    return <li><a href="#">{props.value}</a></li>
}

function Artilelist(props) {
    const Items =props.Items;
    return(
        <ul >我的文章
            {Items.map((val)=>
                <Itemlist key={val.toString()}
                          value={val}/>
            )}
        </ul>
    );
}

export default Artilelist;