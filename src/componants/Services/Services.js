import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('/serviceData.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={4} className="g-4 px-5" >
                {
                    service.map(singleService => <SingleService singleService={singleService}></SingleService>)
                }
            </Row>

        </div>
    );
};

export default Services;