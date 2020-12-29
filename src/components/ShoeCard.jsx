import React from 'react';
import { Link } from '@reach/router';

const ShoeCard = (props) => {
    return (
        <section className='shoeCard'>
            {/* <img className="avatar" src={props.avatar_url} alt="missing shoe image..."></img> */}
            <Link to={`/shoe/${props.shoe_id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                <h3>{props.name}</h3>
            </Link>
            <p>£{props.price}</p>
        </section>
    )
}

export default ShoeCard;