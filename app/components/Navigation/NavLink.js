/**
*
* NavLink
*
*/

import React from 'react';
import NavIcon from './NavIcon';
import Link from './Link';

function NavLink(props) {
  const { iconName, text, changePage, linkTo } = props;
  return (
    <Link onClick={() => changePage(linkTo)}>
      <NavIcon
        name={iconName}
        size="2x"
      />
      {text}
    </Link>
  );
}

NavLink.propTypes = {
  iconName: React.PropTypes.string,
  text: React.PropTypes.string,
  changePage: React.PropTypes.func,
  linkTo: React.PropTypes.string,
};

export default NavLink;
