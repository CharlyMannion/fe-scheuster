import React from 'react';
import {Link} from '@reach/router';

const Header = () => {
    return (
    <header className="App-header">
        <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}><h1>Golden Shoe</h1></Link>
    </header>
    )
}

export default Header;