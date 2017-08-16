/**
 * Created by lmy on 17-8-15.
 */
import React from 'react';
import marked from 'marked';
import '../css/edit.css';
class Edit extends React.Component {
    constructor() {
        super();
        this.state = {renderedContent: ''}
    }

    handelContentChange(e) {
        this.setState({
            renderedContent: marked(e.target.value)
        })
    }

    handelTitleChange(e) {
        this.setState({
            ren: marked(e.target.value)
        })
    }

    render() {
        return (
            <div>
                <div className="editArea">
                    <textarea className="editTitle" onChange={this.handelTitleChange.bind(this)}/>

                    <textarea className="edit" onChange={this.handelContentChange.bind(this)}/>

                </div>

                <div className="show">
                    <div className="showTitle">
                        <div className='markdown-rendered-contect'
                             dangerouslySetInnerHTML={{__html: this.state.ren}}/>
                    </div>

                    <div className="showText">
                        <div className='markdown-rendered-contect'
                             dangerouslySetInnerHTML={{__html: this.state.renderedContent}}/>
                    </div>

                </div>

            </div>
        )
    }
}
export default Edit;

