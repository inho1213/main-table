import React from 'react';

import {Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row} from 'reactstrap';

export default class Catalog extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm="6" lg="4" className="p-2">
                        <Card style={{minWidth: "160px", maxWidth: "320px", margin: "0 auto"}}>
                            <CardImg top
                                     src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97240&w=320&h=240"
                                     alt="Card Image"/>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}