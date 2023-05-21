import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav id="navbar">
		<Bars />

		<NavMenu>
		<NavLink  activeStyle>
			File
		</NavLink>
		<NavLink  activeStyle>
			Edit
		</NavLink>
		<NavLink  activeStyle>
			View
		</NavLink>
		<NavLink activeStyle>
			Insert
		</NavLink>
		<NavLink  activeStyle>
			Format
		</NavLink>
		<NavLink  activeStyle>
			Tools
		</NavLink>
        <NavLink  activeStyle>
			Extensions
		</NavLink>
        <NavLink  activeStyle>
			Help
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
