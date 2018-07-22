import React from 'react';
import Axios from 'axios';
export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {alias: '',titulo:'',corpo:''};
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
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
        console.log('ComponentWillMoun')
        Axios.get(`http://localhost:2999/template/cadastrar/${alias}/${titulo}/${corpo}`,{})
        .then(function () {
            //console.log('response.data',response.data);
            //that.setState({list:response.data}) 
            alert('salvo com sucesso');               
        })
        .catch(function (error) {
            alert(error);
        });
    }
   

    render(){
        console.log(this.state.list);
        return( 
        <form onSubmit={this.handleSubmit}>
                <label>
                Alias:
                <input name="alias" type="text" value={this.state.value} onChange={this.handleInputChange} />
                </label>
                <label>
                Titulo:
                <input name="titulo" type="text" value={this.state.value} onChange={this.handleInputChange} />
                </label>
                <label>
                Corpo:
                <input name="corpo" type="text" value={this.state.value} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
          </form>         
        )
    }
}