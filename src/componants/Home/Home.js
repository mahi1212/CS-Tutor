import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import HomeService from '../HomeService/HomeService';
import './Home.css'
const Home = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className=' m-0'>
            <h2 className='ps-5 text-uppercase text-primary m-0 p-0'>Welcome to the world of <span className='text-danger'> technology</span></h2>
            <div className='row main'>
                <div className='col-md-4 ms-5 mt-5'>
                    <h4 className='bg-primary text-center py-5 mt-5 border rounded-3 text-white'>
                        We offer the best courses to the <br />
                        students and it's all interesting !
                    </h4>
                    <h3 className='text-center'>PAY A VISIT ...</h3>
                </div>
                <div className="col-md-4 me-3 mt-5">
                    <h3 className='bg-secondary text-white p-4 me-2 mt-5 rounded-3'>You can learn all our courses here effectively <br /> and start growing as an IT specialist <br />
                        <br />
                        <strong> World is looking forward a new creative engineer</strong>
                    </h3>
                </div>
            </div>

            <div className="row">
                <div className="services" >
                    <h3 className='text-center text-uppercase bg-warning py-4'>Services</h3>
                    <Row xs={1} md={4} className="g-4 px-5" >
                        {
                            services.map(service => <HomeService service={service}></HomeService>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;