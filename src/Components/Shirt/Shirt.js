
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Shirt = (props) => {
    const {img}=props.shirt
    return (
        <Col >

        <Card>
            <Card.Img variant="" src={img} />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                   
                </Card.Text>
                <Button className="btn btn-secondary" onClick={()=>props.handleCart(props.shirt)}>Add To Cart</Button>
            </Card.Body>
        </Card>


    </Col>
    );
};

export default Shirt;