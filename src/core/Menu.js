import React from "react";
import { Link, withRouter } from "react-router-dom";

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#2ecc72' }
    } else {
        return { color: '#FFFFFF' }
    }
};

const Menu = (history) => {
    return (
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link className="nav-link"
                          style={currentTab(history, '/')}
                          to='/'>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"
                          style={currentTab(history, '/cart')}
                          to='/cart'>
                        Cart
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"
                          style={currentTab(history, '/user/dashboard')}
                          to='/user/dashboard'>
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"
                          style={currentTab(history, '/admin/dashboard')}
                          to='/admin/dashboard'>
                        A. Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"
                          style={currentTab(history, '/signup')}
                          to='/signup'>
                        SignUp
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"
                          style={currentTab(history, '/signin')}
                          to='/signin'>
                        SignIn
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"
                          style={currentTab(history, '/signout')}
                          to='/signout'>
                        SignOut
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default withRouter(Menu);
