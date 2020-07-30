import React, {useState,useEffect} from 'react';
import Spinner from '../components/Spinner/Spinner';
import { FullBreachContainer, Image, Header } from '../styles/styles'
import axios from 'axios';


const FullBreach = (props) => {
    const [selectedBreach, setSelectedBreach] = useState([])
    console.log(props)
    const page = props.match.params.page
    console.log({page})
	useEffect(() => {
        let endP = `https://guard.io/v2/hiring/fe/breaches?offset=${page}`;
		axios
			.get(endP, {
				headers: {
					'X-Best-Pokemon': 'charmander',
				},
			})
			.then((res) => {
                console.log(res.data.items);
                let results = res.data.items
                let name = props.match.params.id
                results  = results.filter((el) => name === el.Name )
                console.log(results)
                setSelectedBreach(results)
			})
			.catch((err) => console.log(err));
	}, []);

    let fullB = <Spinner />
    if (selectedBreach.length > 0) {
        fullB = selectedBreach[0]
    }
    console.log(fullB)
    return (
        <FullBreachContainer> 
            <Header> Breach Name: { fullB.Title } </Header>    
            <Image src={fullB.LogoPath} alt='Logo'/>
            <h3> Other Details </h3>
            <p> { fullB.BreachDate } </p>
            <p> { fullB.PwnCount } </p>
            <p> Last Update: { fullB.ModifiedDate } </p>
        </FullBreachContainer>
    )
}


export default FullBreach;

