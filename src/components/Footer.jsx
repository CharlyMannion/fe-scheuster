import React, { Component } from "react";
import { Link } from "@reach/router";
import StyledButton from "../styledComponents/StyledButton";

class Footer extends Component {
  state = {
    categories: ["FAQ", "returns", "delivery"],
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="footer">
        <nav>
          {categories.map((category) => {
            return (
              <Link
                to={`/${category.toLowerCase()}`}
                key={category}
                value={category}
              >
                <StyledButton>{category}</StyledButton>
              </Link>
            );
          })}
          <Link to="/contact" key="contact">
            <StyledButton>contact us</StyledButton>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Footer;
