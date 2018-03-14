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

class SubCategoriaEconomica extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subcategorias: [
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
        diasFaltas.value = '';
    }

    renderRows() {
        const listaSubCategorias = this.state.subcategorias || []
        return listaSubCategorias.map(subcategoria => (
            <tr key={subcategoria.id} onClick={this.valorPlano}>
                <td>{subcategoria.codigo}</td>
                <td>{subcategoria.descricao}</td>
                <td>{subcategoria.numero_empenho}</td>
            </tr>
        ))
    }

    render() {
        return (
                 <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Subcategoria Econômica
                        </CardHeader>
                            <CardBody className="text-center">

                                <Form action="" method="post">
                                
                                    <FormGroup row>
                                        <Col md="1">
                                            <Label htmlFor="cod_subcategoria">Código:</Label>
                                        </Col>
                                        <Col xs="12" md="1">
                                            <Input type="text" id='cod_subcategoria' name="cod_subcategoria" />
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

export default SubCategoriaEconomica;
