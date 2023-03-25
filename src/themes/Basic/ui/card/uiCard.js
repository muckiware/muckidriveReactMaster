import React from 'react';
import Card from 'react-bootstrap/Card';

const uiCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body></Card.Body>
        </Card>
    );
};

export default uiCard;
