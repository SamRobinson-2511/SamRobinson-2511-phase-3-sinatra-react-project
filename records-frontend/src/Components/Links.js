import React from "react";
import { NavLink } from "react-router-dom";

function Links({user, setUser}) {

    const handleLogOut = () => {
        if (user.length > 0) {
            setUser([])
        }
    }

    return ( 
        <ul className="links">
            <li>   
                <NavLink to="/"
                    style={({ isActive }) =>
                        isActive ?
                            {color: '#F8F8FF'}
                                : 
                                {color: '#F8F8FF',
                                textDecoration: 'none'}
                    }
                >
                    Record List
                </NavLink>
            </li>
            <li>
                <NavLink to ="/record-form"
                    style={({ isActive }) =>
                        isActive ?
                            {color: '#F8F8FF'}
                                : 
                                {color: '#F8F8FF',
                                textDecoration: 'none'}
                    }
                >
                    Add Record
                </NavLink>
            </li>
            { user.length > 0 ?
                <li>
                    <NavLink to="/account"
                        style={({ isActive }) =>
                        isActive ?
                            {color: '#F8F8FF'}
                                : 
                                {color: '#F8F8FF',
                                textDecoration: 'none'}
                        }
                    >
                        Account
                    </NavLink> 
                </li> 
                : null
            }
            <li>
                <NavLink to="/collection"
                    style={({ isActive }) =>
                    isActive ?
                        {color: '#F8F8FF'}
                            : 
                            {color: '#F8F8FF',
                            textDecoration: 'none'}
                    }
                >
                    My collection
                </NavLink>
            </li>
                { user.length > 0 ? 
                    null :
                        <li>
                            <NavLink to="/signup"
                                style={({ isActive }) =>
                                isActive ?
                                    {color: '#F8F8FF'}
                                        : 
                                        {color: '#F8F8FF',
                                        textDecoration: 'none'}
                                }
                            >
                                Sign Up
                            </NavLink>
                        </li>
                }
            <li>
                <NavLink to="/login"
                    style={({ isActive }) =>
                    isActive ?
                        {color: '#F8F8FF'}
                            : 
                            {color: '#F8F8FF',
                            textDecoration: 'none'}
                    }
                    onClick={handleLogOut}
                >
                    { user.length > 0 ? "Log Out" : "Log In" }
                </NavLink>
            </li>
        </ul>
    )
}

export default Links;