import React from "react";
import Axios from "axios";
import FormWYSIWYG from "../wysiwyg/form";
import PubSub from "pubsub-js";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alias: "", titulo: "", corpo: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount = () => {
    let self = this;
    PubSub.subscribe("form-wys", function(msg, data) {
      console.log("sucesso", { msg, data });
      self.setState({ corpo: data });
      console.log("new state", self.state.corpo);
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

    let alias = this.state.alias;
    let titulo = this.state.titulo;
    let corpo = this.state.corpo;
    console.log(
      `http://localhost:2999/template/cadastrar/${alias}/${titulo}/${corpo}`
    );

    Axios.post(`http://localhost:2999/template/cadastrar`, {
      alias: alias,
      titulo: titulo,
      corpo: corpo
    })
      .then(function() {
        //console.log('response.data',response.data);
        //that.setState({list:response.data})
        alert("salvo com sucesso");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.list);
    return (
      <div classNameName="">
        <div classNameName="col-md-10">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Alias</label>
              <input
                name="alias"
                classNameName="form-control"
                type="text"
                value={this.state.value}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Titulo</label>
              <input
                name="titulo"
                classNameName="form-control"
                type="text"
                value={this.state.value}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Corpo</label>
              <FormWYSIWYG />
            </div>

            <input
              classNameName="btn btn-primary"
              type="submit"
              value="Submit"
            />
          </form>
          <button onClick={this.teste} />
        </div>
      </div>
    );
  }
}
