import React, { useEffect, useState } from 'react';
import { Container, ButtonContainer, Button} from '../styles/styles';
import Spinner from './Spinner/Spinner';
import { Suspense } from 'react';
// import Breach from './Breach';

import axios from 'axios';

const Breach = React.lazy(() => import('./Breach'))


const Home = (props) => {
    const [breaches, setBreaches] = useState([]);
    const [offset,setOffset] = useState(0)
    let endP = `https://guard.io/v2/hiring/fe/breaches`;

	useEffect(() => {
		axios
			.get(`${endP}?offset=${offset}`, {
				headers: {
					'X-Best-Pokemon': 'charmander',
				},
			})
			.then((res) => {
                console.log(res)
                setBreaches(res.data.items);
			})
			.catch((err) => console.log(err));
	}, []);

    const breachSelectedHandler = (id) => {
        props.history.push('/' + id + '/' + offset);
    }

    const offsetHandlerForward = () => {
        axios.get(`${endP}?offset=${offset + 1}`, {
            headers: {
                'X-Best-Pokemon': 'charmander',
            }
        }).then((res) => {
            setOffset(prevMode => prevMode + 1)
            let newArrivals = [...breaches,...res.data.items]
            const filteredArr = newArrivals.reduce((acc, current) => {
                const x = acc.find(item => item.PwnCount === current.PwnCount);
                if (!x) {
                  return acc.concat([current]);
                } else {
                  return acc;
                }
              }, []);
            setBreaches(filteredArr);

        })
        .catch(err => console.log(err))
    }

    
    let displayedBreaches = <Spinner />

    if (breaches && breaches.length > 0) { 
        displayedBreaches = breaches.map((el, i) => (
            <Suspense fallback={<div>Loading...</div>} key={el.PwnCount} >
            <Breach 
                name={el.Title}
                BreachDate={new Date(el.BreachDate).toDateString()}
                LogoPath={el.LogoPath}
                breaches={breaches}
                clicked={() => breachSelectedHandler(el.Name)}
            />
            </Suspense>
            ));
            
    }

    return (
            <>
			<Container>{displayedBreaches}</Container>
            <ButtonContainer>
                <Button disabled={ breaches.length === 0} onClick={offsetHandlerForward}> Show More! </Button>
            </ButtonContainer>
            </>
	);
};


export default Home;


