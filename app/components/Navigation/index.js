/**
*
* Navigation
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import NavLink from './NavLink';
import LogOutLink from './LogOutLink';

function Navigation(props) {
  const { username, changePage, logOut } = props;
  return (
    <Wrapper>
      {<NavLink
        iconName="home"
        text="Home"
        changePage={changePage}
        linkTo="/"
      />}
      {!username && <NavLink
        iconName="sign-in"
        text="Sign In"
        changePage={changePage}
        linkTo="/signin"
      />}
      {!username && <NavLink
        iconName="user-plus"
        text="Sign Up"
        changePage={changePage}
        linkTo="/signup"
      />}
      {username && <NavLink
        iconName="user"
        text="My Polls"
        changePage={changePage}
        linkTo="/mypolls"
      />}
      {username && <NavLink
        iconName="plus-square"
        text="New Poll"
        changePage={changePage}
        linkTo="/newpoll"
      />}
      {username && <LogOutLink
        iconName="sign-out"
        logOut={logOut}
        text="Log Out"
      />}
    </Wrapper>
  );
}

Navigation.propTypes = {
  username: React.PropTypes.string,
  changePage: React.PropTypes.func,
  logOut: React.PropTypes.func,
};

export default Navigation;
