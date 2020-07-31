import React, {useState,useEffect} from 'react';
import Spinner from '../components/Spinner/Spinner';
import { FullBreachContainer, Image, Header, Description } from '../styles/styles'
import parse from 'html-react-parser';
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

    
    let link;
    let linkTwo;
    let fullB = <Spinner />
    if (selectedBreach.length > 0) {
        fullB = selectedBreach[0]
        link = fullB.Description.split(/(<([^>]+)>)/gi)
        link = link[1]
        linkTwo = parse(link)
        console.log(link)
        console.log(linkTwo)
    }

    return (
        <FullBreachContainer> 
            <Header> Breach Name: { fullB.Title } </Header>    
            <p> { fullB.BreachDate } </p>
            <Image src={fullB.LogoPath} alt='Logo'/>
            <h3> Other Details </h3>
            <p> { fullB.PwnCount } </p>
            <Description> {fullB.Description?.replace(/(<([^>]+)>)/gi, "")} </Description>
            <p> Data Classes: {fullB.DataClasses?.map(el => el + ' ')} </p>
            <p> Last Update: { fullB.ModifiedDate } </p>
             { linkTwo }
        </FullBreachContainer>
    )
}


export default FullBreach;

