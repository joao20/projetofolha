import React, { Component } from 'react';
import {
    Alert,
    Row,
    Col,
    Table,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Card,
    CardHeader,
    CardBody,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';

import MultipleDatePicker from 'react-multiple-datepicker'


class PagamentoSubsidio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            visible: false
        };

        this.clearForm = this.clearForm.bind(this);
    }

   
    clearForm() {
        diasFaltas.value = '';
    }

    render() {
        return (
            <div>
                <Row>

                    <Col>
                        <Card>
                            <CardHeader>
                                Pagamento de Subsidio
                        </CardHeader>
                            <CardBody>
                                <Form action="" method="post">
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="diasFaltas">Dias que Faltou: </Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <MultipleDatePicker id='diasFaltas' onSubmit={dates => console.log('selected date', dates)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row> 
                                        <Col md="3">
                                            <Label htmlFor="Quantidade de Faltas">Quantidade de Faltas: </Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Input type="text" id="qtdFaltas" name="qtdFaltas" placeholder="0" disabled />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="salarioBruto">Salario Bruto: </Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Input type="text" id="salarioBruto" name="salarioBruto" placeholder="18.000,00" disabled />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="descontos">Descontos: </Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Input type="text" id="descontos" name="descontos" placeholder="3.000,00" disabled />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="descontos">Salario Liquido: </Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Input type="text" id="salarioLiquido" name="salarioLiquido" placeholder="15.000,00" disabled />
                                        </Col>
                                    </FormGroup>


                                </Form>
                                <Button onClick={this.clearForm} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Salvar</Button>
                                <Button onClick={this.clearForm} size="sm" color="danger"><i className="fa fa-ban"></i> Limpar</Button>


                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default PagamentoSubsidio;
