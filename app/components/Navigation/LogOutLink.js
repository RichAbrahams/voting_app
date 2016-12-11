/**
*
* NavLink
*
*/

import React from 'react';
import NavIcon from './NavIcon';
import Link from './Link';

function LogOutLink(props) {
  const { iconName, text, logOut } = props;
  return (
    <Link onClick={logOut}>
      <NavIcon
        name={iconName}
        size="2x"
      />
      {text}
    </Link>
  );
}

LogOutLink.propTypes = {
  iconName: React.PropTypes.string,
  text: React.PropTypes.string,
  logOut: React.PropTypes.func,
};

export default LogOutLink;
