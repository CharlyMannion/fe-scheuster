import React, { Component } from "react";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";

class Info extends Component {
    state = {
        type: '',
        deliveryInfo: {},
        returnsInfo: {},
        FAQS: [{question: 'Can I return in store?', answer: 'Yes'}, ],
    }

    componentDidMount() {
        this.setState({type: (this.props.path).substring(1).toUpperCase(), isLoading: false, error: null});
      }

  render() {
    const { type, isLoading, error } = this.state;

    if (error) return <ErrorDisplay {...error} />;
    if (isLoading) return <Loader />;

      return <main>
          <h1>{type}</h1>
          {/* <p>{this.state.FAQS[0].question}</p> */}
          </main>
  }
}

export default Info;
