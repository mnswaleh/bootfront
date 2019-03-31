import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import MainClass from './main'

class CreateOrder extends Component {
    constructor() {
        super();

        this.state = {
            data: {
                "weight": 0,
                "pickup_location": "nyeri",
                "destination": "nyeri",
                "recipient": "",
                "parcel_details": ""
            },
            addState: false
        }
    }

    addOrder = () => {
        let default_params = new MainClass()
        let request = new Request(default_params.serverName + 'parcels', default_params.request_headers('POST', this.state.data))

        fetch(request)
            .then(result => result.json())
            .then(result => {
                console.log(result)
                alert(result.Message);
                this.setState({
                    addState: true,
                })
            })
    }

    handleChange = (event) => {
        let form_data = this.state.data
        form_data[event.target.name] = event.target.value;
        this.setState({ data: form_data });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addOrder()
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Create Order</h2>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="weight">
                        <Form.Label column sm={2}>Est Weight(Kg):</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" name="weight" value={this.state.data['weight']} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="pickup_location">
                        <Form.Label column sm={2}>Pick Up Location</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" name="pickup_location" value={this.state.data['pickup_location']} onChange={this.handleChange}>
                                <option value="nyeri">Nyeri</option>
                                <option value="kisumu">Kisumu</option>
                                <option value="mombasa">Mombasa</option>
                                <option value="kitale">Kitale</option>
                                <option value="eldoret">Eldoret</option>
                                <option value="naivasha">Naivasha</option>
                                <option value="kirinyaga">Kirinyaga</option>
                                <option value="mwea">Mwea</option>
                                <option value="narok">Narok</option>
                                <option value="kiambu">Kiambu</option>
                                <option value="nyahururu">Nyahururu</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="destination">
                        <Form.Label column sm={2}>Delivery Location</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" name="destination" value={this.state.data['destination']} onChange={this.handleChange}>
                                <option value="nyeri">Nyeri</option>
                                <option value="kisumu">Kisumu</option>
                                <option value="mombasa">Mombasa</option>
                                <option value="kitale">Kitale</option>
                                <option value="eldoret">Eldoret</option>
                                <option value="naivasha">Naivasha</option>
                                <option value="kirinyaga">Kirinyaga</option>
                                <option value="mwea">Mwea</option>
                                <option value="narok">Narok</option>
                                <option value="kiambu">Kiambu</option>
                                <option value="nyahururu">Nyahururu</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="recipient">
                        <Form.Label column sm={2}>Receiver</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="recipient" value={this.state.data['recipient']} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="parcel_details">
                        <Form.Label column sm={2}>Details</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows="3" name="parcel_details" value={this.state.data['parcel_details']} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={6}></Col>
                        <Col sm={6}>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default CreateOrder;