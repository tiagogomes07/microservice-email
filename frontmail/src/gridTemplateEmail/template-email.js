import React from "react";
import Axios from "axios";
export default class templateList extends React.Component {
  //this.const list =[]
  constructor() {
    super();
    // this.list = ['abacate','banana'];
    console.log("tempalte email");
    this.state = { list: ["teste", "teste"] };
  }

  componentWillMount() {
    let that = this;
    console.log("ComponentWillMoun");
    Axios.get("http://localhost:2999/template/")
      .then(function(response) {
        console.log("response.data", response.data);
        // let newList = [];
        // newList.push(response.data);

        // console.log('newList',newList);

        that.setState({ list: response.data });
      })
      .catch(function(error) {
        alert(error);
      });
  }

  render() {
    console.log(this.state.list);
    return (
      <div>
        <div class="jumbotron">
          <h1 class="display-4">Templates Cadastrados</h1>
          <p class="lead" />
          Aqui você encontra todos seus templates já cadastrados
          <hr class="my-4" />
          <p />
        </div>

        <table className="table table-dark table-hover table-sm">
          <thead>
            <tr>
              <th scope="col">Alias</th>
              <th scope="col">Titulo</th>
              <th scope="col">Corpo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map(function(itenList, index) {
              return (
                <tr key={index}>
                  <td>{itenList.alias}</td>
                  <td>{itenList.titulo}</td>
                  <td>{itenList.corpo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
