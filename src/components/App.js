import React, { Component, Fragment } from 'react';
import Form from './Form';


class App extends Component {
    render() {
        return(
            <Fragment>
                <h1 style={{ marginTop: '100px' }}>Brian Tam's Clothing App</h1>
                <Form/>
            </Fragment>
        )
    }
}


export default App;