import React, { Component } from 'react';
import {Link} from '@reach/router';

class NavBar extends Component {
    state = {
        categories: ['men', 'women', 'children']
    }

    render() {
        const {categories} = this.state
        return (
            <div className="nav">
            <nav>
                {categories.map(category => {
                    return <Link to ={`/shoes/${category}`} key={category}><button>{category}</button></Link>
                })}
            </nav>
            </div>
        );
    }
}

export default NavBar;