import styled, { keyframes } from 'styled-components';


//////////////////HOME STYLES ///////////////////////

const appear = keyframes`
 0% {transform: scale(0) }
 100% { transform: scale(1); }
`

export const Container = styled.div`
max-width: 1200px;
margin: 4em auto;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 2rem;
animation: ${appear} 550ms ease-in forwards;
`;



export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em auto;

    @media (max-width: 350px) {
        margin: 2em;
    }
`;


export const Button = styled.button`
    background: transparent;
    padding: .5em 1em;
    border: 1px solid black;
    margin-right: 1em;
    margin-left: 1em;
    cursor: pointer;
    font-size: 1.5em;
    font-weight: 900;
    transition: all 250ms ease-in;

    &:hover {
        background-color: black;
        border: 1px solid black;
        color: white;
    }

    @media (max-width: 350px) {
        font-size: 1em;
        
    }
`

export const Offset = styled.div`
    font-size: 1em;
    font-weight: bold;
`

///BREACH
export const BreachContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
    padding: 1.5em;
    text-align: center;
    box-shadow: 0px 3px 6px #00000029;
    cursor: pointer;
    transition: all 250ms ease-in;

    &:hover {
        transform: scale(1.05);
    }
    `;
    

export const Image = styled.img`
    background-color: var(--dark);
    max-width: 50%;
    padding: 1.5em;
    border-radius: .3em;
    `;




/////FULL BREACH
export const FullBreachContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin-top: 2em;
`

export const Header = styled.h1`
    margin-bottom: 2em;
`;
