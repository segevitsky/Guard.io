import React from 'react';
import Header from './Header';


const Layout = (props) => {
    return (
		<div>
			<Header toggler={props.toggler}/>
			<main>{props.children}</main>
		</div>
    )
}



export default Layout;
