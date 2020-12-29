import React, { Component } from 'react';
import {Link} from '@reach/router';

class NavBar extends Component {
    state = {
        categories: ['Men', 'Women', 'Children']
    }

    render() {
        const {categories} = this.state
        return (
            <nav>
                {categories.map(category => {
                    return <Link to ={`/shoes/?category=${category}`} key={category}><button>{category}</button></Link>
                })}
            </nav>
        );
    }
}

export default NavBar;