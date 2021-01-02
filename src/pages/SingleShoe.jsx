import React, { Component } from 'react';
import Loader from '../components/Loader';
import ErrorDisplay from "../components/ErrorDisplay";
import axios from 'axios';
import StyledButtonTwo from '../styledComponents/StyledButtonTwo';

class SingleShoe extends Component {
    state = {
        shoe_info: {}, 
        isLoading: true,
    }

    fetchShoeById = () => {
        axios.get(`https://be-scheuster.herokuapp.com/api/shoes/${this.props.shoe_id}`)
        .then(({data}) => {
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
                <img className="avatar" src={shoe_info.avatar_url} alt="missing shoe image..."></img>
                <h3>£{shoe_info.price}</h3>
                <StyledButtonTwo>Add to Basket</StyledButtonTwo>
                <br/>
                <h4>Description: {shoe_info.description}</h4>
                <h4>Sizing Info: {shoe_info.sizing_info}</h4>
                <h4>Number in stock: {shoe_info.stock_number}</h4>
                <br/>
            </main>
        )
    }

}

export default SingleShoe;