import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loadClothing } from '../store';


class Form extends Component {
    constructor() {
        super();
        this.state = {
            clothingName: '',
            seededClothing: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { loadClothing } = this.props;
        loadClothing()
        /* return axios.get('/api/clothing')
            .then(res => res.data)
            .then(seededClothing => this.setState({ seededClothing })) */
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        const { seededClothing, clothingName } = this.state;
        const { handleChange, handleSubmit } = this;
        console.log(clothingName)
        return(
            <Fragment>
                <ul>
                {
                    seededClothing.map(clothing => (
                        <li key={ clothing.id }>{ clothing.name }</li>
                    ))
                }
                </ul>
                <form onSubmit={ handleSubmit }>
                    <input onChange={ handleChange } id='clothingName' value={ clothingName }/>
                    <button>Create</button>
                </form>
            </Fragment>
        )
    }
}

const mapDispatchToProps = ({ loadClothing });


export default connect(null, mapDispatchToProps)(Form);