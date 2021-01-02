// import React, { Component } from "react";
// import Loader from "../components/Loader";
// import ErrorDisplay from "../components/ErrorDisplay";

// class Info extends Component {
//     state = {
//         type: '',
//     }

//     componentDidMount() {
//         this.setState({type: (this.props.path).substring(1).toUpperCase(), isLoading: false, error: null});
//       }

//   render() {
//     const { type, isLoading, error} = this.state;

//     if (error) return <ErrorDisplay {...error} />;
//     if (isLoading) return <Loader />;

//       return <main>
//           <h1>{type}</h1>
//           <p>{type === "FAQ" && FAQS[0].question}</p>
//           <p>{type === "RETURNS" && deliveryInfo}</p>
//           <p>{type === "DELIVERY" && returnsInfo}</p>
//           </main>
//   }
// }

// export default Info;
