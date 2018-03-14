import React, { Component } from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
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


class CategoriaEconomica extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categorias: [
                {
                    codigo: '001',
                    descricao: 'Previdência',
                    numero_empenho: '01'
                },
                {
                    codigo: '022',
                    descricao: 'Vencimentos e Vantagens Fixas',
                    numero_empenho: '01'
                },
                {
                    codigo: '043',
                    descricao: 'Vigências',
                    numero_empenho: '01'
                },
                {
                    codigo: '044',
                    descricao: 'Tabela',
                    numero_empenho: '01'
                }
            ],
            modal: false,
            visible: false
        };

        this.clearForm = this.clearForm.bind(this);
    }

   
    clearForm() {
        
    }

    renderRows() {
        const listaCategorias = this.state.categorias || []
        return listaCategorias.map(categoria => (
            
            <tr key={categoria._id} onClick={this.clearForm}>
                <td>{categoria.codigo}</td>
                <td>{categoria.descricao}</td>
                <td>{categoria.numero_empenho}</td>
                <td>
                <Link className="btn btn-secondary" to={'/'} ><i className="fa fa-eye"></i></Link>{' '}
                <Link className="btn btn-warning" to={'/'} ><i className="fa fa-pencil"></i></Link>{' '}
                <Link className="btn btn-danger" to={'/'} ><i className="fa fa-trash"></i></Link></td>
            </tr>
        ))
    }

    render() {
        return (
                 <Row>

                    <Col>
                        <Card>
                            <CardHeader>
                                Categoria Econômica
                        </CardHeader>
                            <CardBody className="text-center">

                                <Form action="" method="post">
                                
                                    <FormGroup row>
                                        <Col md="1">
                                            <Label htmlFor="cod_categoria">Código:</Label>
                                        </Col>
                                        <Col xs="12" md="1">
                                            <Input type="text" id='cod_categoria' name="cod_categoria" />
                                        </Col>
                                        <Col md="1">
                                            <Label htmlFor="descricao">Descrição:  </Label>
                                        </Col>
                                        <Col xs="12" md="5">
                                            <Input type="text" id="descricao" name="descricao"/>
                                        </Col>
                                        <Button onClick={this.clearForm} color="primary">Pesquisar</Button>
                                    </FormGroup>
                                </Form>
                           
                                {/* Inicio - Lista Categoria */}
                                <Col>
                                    <CardBody>
                                        <Table hover bordered striped responsive>
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>Código</th>
                                                    <th>Descrição</th>
                                                    <th>Número de Empenho</th>
                                                    <th> Ações </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.renderRows()}
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Col>
                                {/* Fim - Lista Categoria */}
                               

                            </CardBody>
                        </Card>
                    </Col>

                </Row>
        )
    }
}

export default CategoriaEconomica;
