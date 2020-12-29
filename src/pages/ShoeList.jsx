import React, { Component } from 'react';
import Loader from '../components/Loader';
import axios from 'axios';

class ShoeList extends Component {
    state = {
        shoes: [],
        isLoading: true,
    }

    componentDidMount() {
        axios.get(`https://be-scheuster.herokuapp.com/api/shoes/`)
        .then(({data: {shoes}}) => {
            this.setState({shoes, isLoading: false})
        })
    }

    render() {
        const {shoes, isLoading} = this.state
        if (isLoading) return <Loader/>
        return (
            <main>
                {shoes.map(shoe => {
                    return <section key={shoe.shoe_id}>{shoe.name}</section>
                })}
            </main>
        )
    }
}

export default ShoeList; 