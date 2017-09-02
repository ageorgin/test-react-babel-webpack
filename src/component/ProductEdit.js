import React from 'react';

class ProductEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      category: '',
      name: '',
      weight: '',
      price: '',
      description: '',
      isModified: false
    }
  }

  handleInputChange(event){
    switch(event.target.id) {
      case "category": {
        this.setState({category: event.target.value, isModified: true});
        break;
      }
      case "name": {
        this.setState({name: event.target.value, isModified: true});
        break;
      }
      case "weight": {
        this.setState({weight: event.target.value, isModified: true});
        break;
      }
      case "price": {
        this.setState({price: event.target.value, isModified: true});
        break;
      }
      case "description": {
        this.setState({description: event.target.value, isModified: true});
        break;
      }
    }
  }

  handleSave(event) {
    console.log('submit');
    event.preventDefault();
  }

  handleReset(event) {
    console.log('reset');
    event.preventDefault();
  }

  render() {
    var styles = {
        input: {
          paddingTop: '25px'
        },
        textarea: {
          marginTop: '50px',
          overflowY: 'auto',
          height: '150px'
        },
        select: {
          marginTop: '40px',
          opacity: '1',
          pointerEvents: 'auto',
          position: 'relative',
          width: '100%',
          height: 'auto'
        },
        button: {
          marginRight: '30px'
        }
    };

    return(
      <div className="row">
        <form className="col s12" onSubmit={this.handleSave} onReset={this.handleReset}>
          <div className="row">
            <div className="input-field col s12">
              <select style={styles.select} value={this.state.category} id="category" onChange={this.handleInputChange} required>
                <option value="" disabled>Sélectionnez la catégorie du produit</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label>Catégorie du produit :</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Saisissez le nom du produit" id="name" type="text" className="validate" value={this.state.name} onChange={this.handleInputChange} required style={styles.input}/>
              <label htmlFor="name">Nom du produit :</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Saisissez le poids du produit" id="weight" type="text" className="validate" value={this.state.weight} onChange={this.handleInputChange} required style={styles.input}/>
              <label htmlFor="weight">Poids du produit :</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Saisissez le prix du produit" id="price" type="text" className="validate" value={this.state.price} onChange={this.handleInputChange} required style={styles.input}/>
              <label htmlFor="price">Prix du produit :</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="description" className="materialize-textarea" placeholder="Saisissez la description du produit" value={this.state.description} onChange={this.handleInputChange} rows="10" required style={styles.textarea}></textarea>
              <label htmlFor="description">description du produit :</label>
            </div>
          </div>
          <div className="row">
              <button className="btn waves-effect waves-light" type="submit" style={styles.button}>Enregistrer</button>
              <button className="btn waves-effect waves-light" type="reset" style={styles.button}>Annuler</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductEdit;
