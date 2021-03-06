import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";
import ShoeCard from "../components/ShoeCard";

class ShoeList extends Component {
  state = {
    shoes: [],
    isLoading: true,
  };

  fetchShoes = () => {
    axios
      .get(`https://be-scheuster.herokuapp.com/api/shoes/`, {
        params: { category: this.props.slug },
      })
      .then(({ data: { shoes } }) => {
        this.setState({ shoes, isLoading: false, error: null });
      })
      .catch(({ response }) => {
        this.setState({
          error: {
            status: response.status,
            message: response.data.msg,
          },
        });
      });
  };

  componentDidMount() {
    this.fetchShoes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.slug !== this.props.slug) {
      axios
        .get(`https://be-scheuster.herokuapp.com/api/shoes/`, {
          params: { category: this.props.slug },
        })
        .then(({ data: { shoes } }) => {
          this.setState({ shoes, isLoading: false });
        });
    }
  }

  render() {
    const { shoes, isLoading, error } = this.state;
    if (error) return <ErrorDisplay {...error} />;
    if (isLoading) return <Loader />;

    return (
      <Fade>
        <main className="shoeList">
          {shoes.map((shoe) => {
            return <ShoeCard {...shoe} key={shoe.shoe_id} />;
          })}
        </main>
      </Fade>
    );
  }
}

export default ShoeList;
