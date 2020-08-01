import React, {useState,useEffect} from 'react';
import Spinner from '../components/Spinner/Spinner';
import { FullBreachContainer, Image, Header, Description, Para, BackButton } from '../styles/styles'
import { useHistory } from "react-router-dom";
import parse from 'html-react-parser';
import axios from 'axios';


const FullBreach = (props) => {
    const [selectedBreach, setSelectedBreach] = useState([])
    const page = props.match.params.page
    let history = useHistory();
	useEffect(() => {
        let endP = `https://guard.io/v2/hiring/fe/breaches?offset=${page}`;
		axios
			.get(endP, {
				headers: {
					'X-Best-Pokemon': 'charmander',
				},
			})
			.then((res) => {
                let results = res.data.items
                let name = props.match.params.id
                results  = results.filter((el) => name === el.Name )
                setSelectedBreach(results)
			})
			.catch((err) => console.log(err));
	}, []);

    

    let desc,date,upperDate;
    // let date;
    // let upperDate;
    let fullB = <Spinner />
    if (selectedBreach.length > 0) {
        fullB = selectedBreach[0]
        desc = parse(fullB.Description)
        date = new Date(fullB.ModifiedDate).toDateString()
        upperDate = new Date(fullB.BreachDate).toDateString()
    }

    return (
        <FullBreachContainer> 
             <BackButton onClick={() => history.goBack()}>Back</BackButton>
            <Header> Breach Name: { fullB.Title } </Header>    
            <p> { upperDate } </p>
            <Image src={fullB.LogoPath} alt='Logo'/>
            <h3> Other Details </h3>
            <p> { fullB.PwnCount } </p>
            <Description> {desc} </Description>
            <Para> Data Classes: {fullB.DataClasses?.join(", ")}. </Para>
            <p> Last Update: { date } </p>
        </FullBreachContainer>
    )
}


export default FullBreach;

