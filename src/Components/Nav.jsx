import React from 'react';
import {Link} from 'react-router-dom'

const Nav = ({route,name}) => {
    return (
        <div className="nav">
            <div className="navlinks">
                {/* to needs to a string,otherwise it gets a warning */}
                <Link to={''+route}>
                    {name}
                </Link>
            </div>
        </div>
    )
}

export default Nav

