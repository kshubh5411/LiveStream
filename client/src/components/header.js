import React from 'react';
import {Link} from 'react-router-dom'
import GoogleApi from './googleauth';

class Header extends React.Component{
    render()
    {
        return(
            <div className="ui secondary pointing menu">
                <Link to='/' className="item">
                 Home
                </Link>
                <Link to='/' className="item">
                 Messages
                </Link>
            <div className="right menu">
              <Link to='/' className="ui item">
                Logout
              </Link>
              <GoogleApi/>
            </div>
          </div>
        );
    }

}
export default Header;