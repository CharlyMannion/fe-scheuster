import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import ErrorDisplay from '../components/ErrorDisplay';
import ShoeCard from '../components/ShoeCard';
// import {fetchShoes} from '../../src/utils/api';

class ShoeList extends Component {
    state = {
        shoes: [],
        isLoading: true,
    }

    fetchShoes = () => {
        axios.get(`https://be-scheuster.herokuapp.com/api/shoes/`)
        .then(({data: {shoes}}) => {
            this.setState({shoes, isLoading: false, error: null})
        })
        .catch(({response}) => {
            this.setState({
                error: {
                    status: response.status,
                    message: response.data.msg,
                }
            })
        })
    }

    componentDidMount() {
        this.fetchShoes();
    }

    render() {
        const {shoes, isLoading, error} = this.state
        if (error) return (
            <ErrorDisplay {...error}/>
        )
        if (isLoading) return <Loader/>

        return (
            <main>
                {shoes.map(shoe => {
                    return <ShoeCard {... shoe} key={shoe.shoe_id}/>
                })}
            </main>
        )
    }
}

export default ShoeList; 