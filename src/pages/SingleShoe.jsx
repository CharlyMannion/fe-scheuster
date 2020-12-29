import React, { Component } from 'react';
import Loader from '../components/Loader';
// import axios from 'axios';

class SingleShoe extends Component {
    state = {
        shoe_info: {},
        isLoading: true,
    }

    render() {
        // const {isLoading} = this.state
        // if (isLoading) return <Loader/>
        return (
            <p>Single Shoe!</p>
        )
    }

}

export default SingleShoe;