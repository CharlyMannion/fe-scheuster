import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = {
    categories: ["Style", "Material", "Colour Group", "Heel Height", "Size"],
  };

  render() {
    const { categories } = this.state;
    return (
      <nav>
        {/* {categories.map(category => {
                    return <Link to ={`/shoes/${category}`} key={category}><button>{category}</button></Link>
                })} */}
      </nav>
    );
  }
}

export default NavBar;
