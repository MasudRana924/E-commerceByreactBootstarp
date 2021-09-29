
import React from 'react';
import {  Card, Col } from 'react-bootstrap';
import { Link,} from 'react-router-dom';
import './Shirt.css'

const Shirt = (props) => {
    const {id,img}=props.shirt
    const url=`/Shirt/${id}`
    return (
        <Col >

        <Card>
            <Card.Img variant="" src={img} />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  
                </Card.Text>
               <Link className="anchor text-primary" to={url}>Show details</Link>
            </Card.Body>
        </Card>


    </Col>
    );
};

export default Shirt;