import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productImageUrl: this.buildProductImageUrl(props.product.id, props.product.category.code),
      urlEdit: "/edit/" + props.product.id + "?category=" + props.product.category.id
    }
  }

  buildProductImageUrl(id, category) {
    return "https://www.lespepitesdeberiz.fr/images/" + category + "/" + id + ".jpeg";
  }

  render() {
    var styles = {
      "card": {
        "width": "311px"
      }
    }
    return (
      <div className="col s12 m6">
      <div className="card" style={styles.card}>
        <div className="card-image">
          <img src={this.state.productImageUrl}/>
          <span className="card-title">{this.props.product.name}</span>
        </div>
        <div className="card-content">
          <p dangerouslySetInnerHTML={{__html: this.props.product.description.substr(0, 250) + "..."}}/>
        </div>
        <div className="card-action">
          <Link to={this.state.urlEdit}>Modifier</Link>
          <a href="#">Supprimer</a>
        </div>
      </div>
      </div>
    );
  }
}

export default ProductCard;
