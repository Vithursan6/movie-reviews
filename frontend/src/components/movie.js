import React, {useState, useEffect} from "react"
import MovieDataService from '../services/movies'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media';

const Movie = props => {

    const [movie, setMovie] = useState({
        id: null,
        title: "",
        rated:"",
        reviews:[]
    })

    const getMovie =  id =>{
        MovieDataService.get(id)
            .then(response => {
                setMovie(response.data)
                console.log(response.data)
            })
            .catch(e =>{
                console.log(e)
            })
    }

    useEffect(() =>{
        getMovie(props.match.params.id)
    },[props.match.params.id])
    
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <Image src={movie.poster+"/100px250"} fluid />
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
    

}



export default Movie;