import React, { Component } from 'react';
import Loader from '../components/Loader';
import ErrorDisplay from "../components/ErrorDisplay";
import axios from 'axios';

class SingleShoe extends Component {
    state = {
        shoe_info: {}, 
        isLoading: true,
    }

    fetchShoeById = () => {
        // console.log(this.props, "PROPS")
        axios.get(`https://be-scheuster.herokuapp.com/api/shoes/${this.props.shoe_id}`)
        .then(({data}) => {
            // console.log(data.shoes[0], "DATA")
            this.setState({shoe_info: data.shoes[0], isLoading: false, error: null});
        })
        .catch(({ response }) => {
            this.setState({
              error: {
                status: response.status,
                message: response.data.msg,
              },
            });
          });
    }

    componentDidMount() {
        this.fetchShoeById();
    }

    render() {
        const {shoe_info, isLoading, error} = this.state
        if (error) return <ErrorDisplay {...error} />;
        if (isLoading) return <Loader/>

        return (
            <main className='single_page_shoe'>
                <h2>{shoe_info.name}</h2>
                <h3>£{shoe_info.price}</h3>
                <p>{shoe_info.description}</p>
            </main>
        )
    }

}

export default SingleShoe;