/**
 * Created by lmy on 17-8-15.
 */
import React from 'react';
import marked from 'marked';
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

    render() {
        return (
            <div>
                <textarea onChange={this.handelContentChange.bind(this)}/>
                <div className='markdown-rendered-contect'
                     dangerouslySetInnerHTML={{__html: this.state.renderedContent}}/>
            </div>
        )
    }
}
export default Edit;

