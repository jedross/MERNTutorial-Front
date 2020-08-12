import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth'
import { Fragment } from 'react';
import {itemTotal} from './cartHelpers'

const isActive = ( history, path ) => {
    if(history.location.pathname === path) {
        return { color: '#ff9900' };
    } else {
        return { color: '#ffffff'};
    }
};

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-link" 
                 style={isActive(history,'/')} to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" 
                 style={isActive(history,'/Shop')} to="/Shop">Shop</Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/Cart")}
                    to="/Cart"
                >
                    Cart{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>           
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
              <li className="nav-item">
                <Link className="nav-link" 
                 style={isActive(history,'/Dashboard')} to="/Dashboard">User Dashboard</Link>
              </li>
            )}


            {isAuthenticated() && isAuthenticated().user.role === 1 && (
              <li className="nav-item">
                <Link className="nav-link" 
                 style={isActive(history,'/admin/Dashboard')} to="/admin/Dashboard">Admin Dashboard</Link>
              </li>
            )}
            {!isAuthenticated() && (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" 
                 style={isActive(history,'/Signin')} to="/Signin">Sign In</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" 
                 style={isActive(history,'/Signup')}to="/Signup">Sign Up</Link>
             </li>
          </Fragment>
        )}
        {isAuthenticated() && (
            <div>
              <li className="nav-item">
                <span className="nav-link" 
                 style={{ cursor: "pointer", color: "#ffffff"}} 
                 onClick ={ () => signout(() => { history.push("/"); })}>
                 Sign Out</span>
             </li>
           </div>
        )}
        </ul>
    </div>
);

export default withRouter(Menu);