import React from 'react';
import { Carousel } from 'react-bootstrap';

const Review = () => {

    return (
        <div>
            <h2 className='text-warning text-center bg-primary m-0 py-3'>Let's have a review on our courses</h2>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        style={{ height: '30rem' }}
                        className="d-block w-100"
                        src="https://futurestartup.com/wp-content/uploads/2018/03/Anisul-Islam.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mahinur Rahman</h3>
                        <p>I loved their courses. I also recommend it for others</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        style={{ height: '30rem' }}
                        className="d-block w-100"
                        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1457E/production/_119362338_gettyimages-1288829859.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Elon Ahmen</h3>
                        <p>I loved their courses. I also recommend it for others</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        style={{ height: '30rem' }}
                        className="d-block w-100"
                        src="https://i.playboard.app/p/AATXAJznXk5D3nZelL2713AQOAQp6Mt2QtX3LL8AIeZa4w/default.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Anisul Islam</h3>
                        <p>They are really good in this courses. I recommend it for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Review;