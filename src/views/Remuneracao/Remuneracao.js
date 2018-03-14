import React, { Component } from 'react';
import {
    Alert, Row, Col, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader,
    CardBody, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';

class Remuneracao extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valores: [
                {
                    id: 1,
                    classe: 'Especial',
                    padrao: 'III',
                    ativo: '23.595,39',
                    aposentado: '23.595,39'
                },
                {
                    id: 2,
                    classe: 'Primeira',
                    padrao: 'IV',
                    ativo: '21.443,26',
                    aposentado: '21.443,26'
                },
                {
                    id: 3,
                    classe: 'Segunda',
                    padrao: 'VI',
                    ativo: '19.799,23',
                    aposentado: '19.799,23'
                },
                {
                    id: 4,
                    classe: 'Terceira',
                    padrao: 'II',
                    ativo: '16.886,39',
                    aposentado: '16.886,39'
                }
            ], carreiras: [
                {
                    id: 1,
                    nome: 'Inteligência'
                },
                {
                    id: 2,
                    nome: 'Ciência e Tecnologia'
                }
            ],
            cargos: [
                {
                    id: 1,
                    nome: 'Oficial de Inteligência'
                },
                {
                    id: 2,
                    nome: 'Agente de Inteligência'
                }
            ],
            vigenciaValores: [
                {
                    id: 1,
                    data: 'Fevereiro/2017'
                },
                {
                    id: 2,
                    data: 'Abril/2017'
                },
                {
                    id: 3,
                    data: 'Outubro/2017'
                }
            ],
            vigencias: [
                {
                    id: 1,
                    dataInicial: '20/02/2017',
                    dataFinal: 'a 21/11/2017'

                },
                {
                    id: 2,
                    dataInicial: '22/11/2017',
                    dataFinal: 'a 21/02/2018'

                },
                {
                    id: 3,
                    dataInicial: '21/02/2018',
                    dataFinal: ' '
                }

            ],

            modal: false,
            visible: false,
            modalVigencia: false,
            modalExclusao:false,
        };

        this.onDismiss = this.onDismiss.bind(this);
        this.chamarAlerta = this.chamarAlerta.bind(this);
        this.valorPlano = this.valorPlano.bind(this);
        this.chamarModalVigencia = this.chamarModalVigencia.bind(this);
        this.chamarExcluirVigencia = this.chamarExcluirVigencia.bind(this);
    }

    valorPlano() {
        this.setState({
            modal: !this.state.modal
        });
    }

    chamarModalVigencia() {
        this.setState({
            modalVigencia: !this.state.modalVigencia
        }); 
    }

    chamarExcluirVigencia() {
        this.setState({
            modalExclusao: !this.state.modalExclusao
        });
    }

    preeditar(e) {

    }
    clearForm() {
        // _idSubsidio.value = '';
        valorAtivo.value = '';
        valorAposentado.value = '';
    }

    onDismiss() {
        this.setState({
            visible: false
        });
    }

    chamarAlerta() {
        this.setState({
            modal: !this.state.modal,
            visible: true
        })
    }

    renderRows() {
        const listaValores = this.state.valores || []
        return listaValores.map(valor => (
            <tr key={valor._id} onClick={this.valorPlano}>
                <td>{valor.classe}</td>
                <td>{valor.padrao}</td>
                <td>{valor.ativo}</td>
                <td>{valor.aposentado}</td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                    Vigência Excluída com Sucesso
                </Alert>
                <Row>

                    <Col>
                        <Card>
                            <CardHeader>
                                Tabela de Cargos e Remunerações
                        </CardHeader>
                            <CardBody>

                                {/* Inicio - Formulário de Pesquisa */}
                                <Col>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label htmlFor="carreira">Carreira:</Label>
                                        </Col>
                                        <Col xs="12" md="5">
                                            <Input type="select" name="carreira" id="carreira">
                                                {this.state.carreiras.map((carreira, index) => {
                                                    return (
                                                        <option key={carreira.id} scope="row">
                                                            {carreira.nome}
                                                        </option>
                                                    )
                                                })}
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label htmlFor="cargo">Cargo:</Label>
                                        </Col>
                                        <Col xs="12" md="5">
                                            <Input type="select" name="cargo" id="cargo">
                                                {this.state.cargos.map((cargo, index) => {
                                                    return (
                                                        <option key={cargo.id} scope="row">
                                                            {cargo.nome}
                                                        </option>
                                                    )
                                                })}
                                            </Input>

                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label htmlFor="vigenciaLei">Vigência de Lei:</Label>
                                        </Col>
                                        <Col xs="12" md="5">
                                            <Input type="select" name="vigenciaLei" id="vigenciaLei">
                                                {this.state.vigencias.map((vigencia, index) => {
                                                    return (
                                                        <option key={vigencia.id} scope="row">
                                                            {vigencia.dataInicial}  {vigencia.dataFinal}
                                                        </option>
                                                    )
                                                })}
                                            </Input>
                                        </Col>

                                    </FormGroup>



                                    <FormGroup row>
                                        <Col md="2">
                                            <Label htmlFor="vigenciaValores">Vigência de Valores:</Label>
                                        </Col>
                                        <Col xs="12" md="5">
                                            <Input type="select" name="vigenciaValores" id="vigenciaValores">
                                                {this.state.vigenciaValores.map((vigenciaValor, index) => {
                                                    return (
                                                        <option key={vigenciaValor.id} scope="row">
                                                            {vigenciaValor.data}
                                                        </option>
                                                    )
                                                })}
                                            </Input>
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Button onClick={this.chamarModalVigencia} color="success">Incluir</Button>{' '}
                                            <Button onClick={this.chamarModalVigencia} color="warning">Editar</Button>{' '}
                                            <Button onClick={this.chamarExcluirVigencia} color="danger">Excluir</Button>{' '}


                                        </Col>

                                    </FormGroup>
                                </Col>
                                {/* Fim - Formulário de Pesquisa */}


                                {/* Inicio - Lista Remuneração */}
                                <Col>
                                    <CardBody>
                                        <Table hover bordered striped responsive>
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>Classe</th>
                                                    <th>Padrão</th>
                                                    <th>Ativo</th>
                                                    <th>Aposentado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.renderRows()}
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Col>
                                {/* Fim - Lista Remuneração */}
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

                {/* Inicio - Modal Incluir/Editar Vigencia */}
                <Modal isOpen={this.state.modalVigencia} toggle={this.chamarModalVigencia} className={this.props.className}>
                    <ModalHeader toggle={this.chamarModalVigencia}>Incluir/Editar Vigência</ModalHeader>
                    <Form action="" method="post">
                        <ModalBody>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="vigenciaLei">Vigência da Lei:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text" id="vigenciaLei" name="vigenciaLei" placeholder="20/10/2017 a 21/11/2017" disabled />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="instrumentoLegal">Instrumento Legal</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="textarea" name="instrumentoLegal" id="instrumentoLegal" rows="5"
                                        placeholder="Lei 11776" disabled />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="vigenciaValores">Vigência Valores:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="month" id="vigenciaValores" name="vigenciaValores" placeholder="00/00/0000" />
                                </Col>
                            </FormGroup>


                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.chamarModalVigencia}>Salvar</Button>{' '}
                            <Button color="secondary" onClick={this.clearForm}>Limpar</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
                {/* Fim - Modal Incluir/Editar Vigencia */}

                {/* Inicio - Mensagem Exclusão */}

                <Modal isOpen={this.state.modalExclusao} toggle={this.chamarExcluirVigencia} className={this.props.className}>
                    <ModalHeader toggle={this.chamarExcluirVigencia}>Deseja realmente excluir o registro?</ModalHeader>
                    <Form action="" method="post">
                        <ModalBody>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="vigenciaLei">Vigência da Lei:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text" id="vigenciaLei" name="vigenciaLei" placeholder="20/10/2017 a 21/11/2017" disabled />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="instrumentoLegal">Instrumento Legal</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="textarea" name="instrumentoLegal" id="instrumentoLegal" rows="5"
                                        placeholder="Lei 11776" disabled />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="vigenciaValores">Vigência Valores:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text" id="vigenciaValores" name="vigenciaValores" placeholder="Fevereiro/2017" disabled />
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.chamarExcluirVigencia}>Sim</Button>{' '}
                            <Button color="danger" onClick={this.chamarExcluirVigencia}>Não</Button>

                        </ModalFooter>
                    </Form>
                </Modal>


                {/* Fim - Mensagem Exclusão */}

                {/* Inicio - Editar Valor Tabela */}

                <Modal isOpen={this.state.modal} toggle={this.valorPlano} className={this.props.className}>
                    <ModalHeader toggle={this.valorPlano}>Editar Valor Tabela Salarial</ModalHeader>
                    <Form action="" method="post">
                        <ModalBody>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="carreira">Carreira</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text" name="carreira" id="carreira" placeholder="Inteligência" disabled />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="cargo">Cargo</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text" name="cargo" id="cargo" placeholder="Oficial de Inteligência" disabled />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="classe">Classe</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text" name="classe" id="classe" placeholder="Primeira" disabled />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="nivel">Padrão</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text" name="nivel" id="nivel" placeholder="II" disabled />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="valorAtivo">Valor Ativo:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text" id="valorAtivo" name="valorAtivo" placeholder="000,00" />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="valorAposentado">Valor Aposentado:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text" id="valorAposentado" name="valorAposentado" placeholder="000,00" />
                                </Col>
                            </FormGroup>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.chamarAlerta}>Salvar</Button>{' '}
                            <Button color="secondary" onClick={this.clearForm}>Limpar</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
                {/* Fim - Editar Valor Tabela */}

            </div>
        )
    }
}

export default Remuneracao;
