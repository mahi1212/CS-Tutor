import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap'

const HomeService = (props) => {
    console.log(props)
    const { courseName, price, details, duration , picture} = props.service
    return (
        <div>
            <Col className='py-3'>
                <Card >
                    <Card.Img variant="top" src={picture} style={{height :'15rem'}}/>
                    <Card.Body>
                        <Card.Title> Course: {courseName}</Card.Title>
                        <Card.Text>
                            <h5>Price : {price} Tk</h5>
                            <p>Deatils :{details}</p>
                            <p className='text-danger'>Duration : {duration}</p>
                        </Card.Text>
                        <Button variant='primary'>ADD FAVOURITE</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default HomeService;