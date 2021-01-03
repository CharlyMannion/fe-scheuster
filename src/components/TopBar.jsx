import React, { Component } from "react";
import { Link } from "@reach/router";
import StyledButton from "../styledComponents/StyledButton";

class NavBar extends Component {
  state = {
    categories: ["Basket", "Sign In", "Create an account"],
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="topbar">
        <nav>
          {categories.map((category) => {
            return (
              <Link to={`/`} key={category}>
                <StyledButton>{category}</StyledButton>
              </Link>
            );
          })}
        </nav>
      </div>
    );
  }
}

export default NavBar;
