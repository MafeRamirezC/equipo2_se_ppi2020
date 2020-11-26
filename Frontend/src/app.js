import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";

import "./styles.css";

const url = "https://practicamysqlsantaelana.juan0414.repl.co/api/comerciante";

export default class App extends Component {
  state = {
    show: false,
    comerciante: [],
    form: {
      nombres: "",
      apellidos: "",
     codigo_co: "",
      e_mail: "",
      contraseña: "",
     tipo_doc: "",
      numero_id: "",
   
    },
    idcomerciante: "",
    modalEliminar: false
  };
//3
  showModal = () => {
    this.setState({ show: !this.state.show });
  };

  peticionGet = () => {
    fetch(`${url}comerciante`)
      .then((response) => response.json())
      .then((data) => this.setState({ comerciante: data }));
  };

  peticionPost = async () => {
    await axios
      .post(`${url}nuevo-estudiante`, this.state.form)
      .then((response) => {
        this.showModal();
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPut = () => {
    axios
      .put(`${url}comerciante/${this.state.idEstudiante}`, this.state.form)
      .then((response) => {
        this.showModal();
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionDelete = () => {
    axios
      .delete(`${url}estudiante/${this.state.idEstudiante}`, this.state.form)
      .then((response) => {
        this.setState({ modalEliminar: false });
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  seleccionarEstudiante = (estudianteMod) => {
    console.log(estudianteMod);
    const estudiante = this.state.estudiantes.find(
      (result) => result.id === estudianteMod
    );

    this.setState({
      idEstudiante: estudiante.id,
      tipoModal: "actualizar",
      form: {
        documento: estudiante.documento,
        tipo_documento: estudiante.tipo_documento,
        nombres: estudiante.nombres,
        apellidos: estudiante.apellidos,
        correo: estudiante.correo,
        numero_expediente: estudiante.numero_expediente,
        genero: estudiante.genero,
        institucion_id: estudiante.institucion_id,
        telefono_celular: estudiante.telefono_celular
      }
    });
  };
// 1
  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  };

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    const { form } = this.state;
    return (
      <>
        <Button
          variant="success"
          onClick={() => {
            this.setState({ form: "", tipoModal: "insertar" });
            this.showModal();
          }}
        >
          Nuevo estudiante
        </Button>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.estudiantes.map((estudiante, index) => {
              return (
                <tr key={index}>
                  <td>{estudiante.id}</td>
                  <td>
                    {estudiante.nombres} {estudiante.apellidos}
                  </td>
                  <td>{estudiante.correo}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.seleccionarEstudiante(estudiante.id);
                        this.showModal();
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.seleccionarEstudiante(estudiante.id);
                        this.setState({ modalEliminar: true });
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Modal show={this.state.show} animation={false}>
          <Modal.Header closeButton onClick={this.showModal}>
            <Modal.Title>Ingresar nuevo Estudiante</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="nombres">
                <Form.Label>Nombre(s) *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre(s) completo(s)"
                  name="nombres"
                  required="required"
                  onChange={this.handleChange}
                  value={form ? form.nombres : ""}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="apellidos">
                <Form.Label>Apellido(s)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Apellidos completo"
                  name="apellidos"
                  onChange={this.handleChange}
                  value={form ? form.apellidos : ""}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="documento">
                <Form.Label>Documento *</Form.Label>
                <Form.Control
                  type="text"
                  minLength="7"
                  maxLength="11"
                  name="documento"
                  placeholder="Documento de identidad"
                  onChange={this.handleChange}
                  value={form ? form.documento : ""}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="correo">
                <Form.Label>Correo *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite el correo"
                  name="correo"
                  required
                  onChange={this.handleChange}
                  value={form ? form.correo : ""}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="numero_expediente">
                <Form.Label>Expediente (*)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="EXP-3902993-P90"
                  name="numero_expediente"
                  onChange={this.handleChange}
                  value={form ? form.numero_expediente : ""}
                  required="required"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="tipo_documento">
                <Form.Label>Tipo de Documento (*)</Form.Label>
                <Form.Control
                  as="select"
                  name="tipo_documento"
                  onChange={this.handleChange}
                  value={form ? form.tipo_documento : ""}
                  required
                >
                  <option value="">seleccione...</option>
                  <option value="CC">CC</option>
                  <option value="TI">TI</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="genero">
                <Form.Label>Genero (*)</Form.Label>
                <Form.Control
                  as="select"
                  name="genero"
                  value={form ? form.genero : ""}
                  onChange={this.handleChange}
                  required
                >
                  <option value="" style={{ display: "none" }}>
                    Seleccionar...
                  </option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="institucion_id">
                <Form.Label>Institución Educativa (*)</Form.Label>
                <Form.Control
                  as="select"
                  name="institucion_id"
                  onChange={this.handleChange}
                  value={form ? form.institucion_id : ""}
                  required
                >
                  <option value="0">Choose...</option>
                  <option value="1">IJFR</option>
                  <option value="2">HAG</option>
                  <option value="3">FO</option>
                  <option value="3">JAYG</option>
                  <option value="3">SO</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="telefono_celular">
                <Form.Label>Celular</Form.Label>
                <Form.Control
                  type="text"
                  minLength="5"
                  maxLength="11"
                  placeholder="Número celular"
                  name="telefono_celular"
                  value={form ? form.telefono_celular : ""}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
          </Modal.Body>
          <Modal.Footer>
            {this.state.tipoModal === "insertar" ? (
              <Button variant="success" onClick={this.peticionPost}>
                Insertar
              </Button>
            ) : (
              <Button variant="success" onClick={this.peticionPut}>
                Actualizar
              </Button>
            )}

            <Button variant="primary" onClick={this.showModal}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.modalEliminar}>
          <Modal.Body>
            Estás seguro que deseas eliminar este estudiante
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-danger"
              onClick={() => this.peticionDelete()}
            >
              Sí
            </button>
            <button
              className="btn btn-secundary"
              onClick={() => this.setState({ modalEliminar: false })}
            >
              No
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
