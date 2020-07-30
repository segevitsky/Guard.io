import React from 'react';
import { BreachContainer, Image } from '../styles/styles'
import { withRouter } from 'react-router-dom';

const Breach = props => {
	return (
		<BreachContainer className="Post" onClick={props.clicked}>
			<div>
                <Image
                    src={props.LogoPath}
                    alt="breach-icon"
                />
            </div>
            <div>
                <h1>{props.name}</h1>
                <p> {props.BreachDate} </p>
            </div>
		</BreachContainer>
	);
};

export default withRouter(Breach);

