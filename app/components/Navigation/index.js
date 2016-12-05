/**
*
* Navigation
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import NavLink from './NavLink';

function Navigation(props) {
  const { username, changePage } = props;
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
        linkTo="/sign-in"
      />}
      {!username && <NavLink
        iconName="user-plus"
        text="Sign Up"
        changePage={changePage}
        linkTo="/sign-up"
      />}
      {username && <NavLink
        iconName="user"
        text="My Polls"
        changePage={changePage}
        linkTo="/my-polls"
      />}
      {username && <NavLink
        iconName="plus-square"
        text="New Poll"
        changePage={changePage}
        linkTo="/new-poll"
      />}
      {username && <NavLink
        iconName="sign-out"
        text="Log Out"
        changePage={changePage}
        linkTo="/sign-out"
      />}
    </Wrapper>
  );
}

Navigation.propTypes = {
  username: React.PropTypes.string,
  changePage: React.PropTypes.func,
};

export default Navigation;
