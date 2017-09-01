import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard.js';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[],
      isLoading: true
    };
  }

  componentDidMount(){
    // loading products from API
    this.props.apiClient.loadAllProducts().then((allProducts) => {
      this.setState({products: allProducts, isLoading: false});
    });
  }

  render() {
    if (this.state.isLoading) {
        return(
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        );
    }

    return (
      <div>
        <div className="row">
            {this.state.products.map((product, index) =>
              <ProductCard key={product.id} product={product}/>
            )}
        </div>
        <div className="fixed-action-btn">
          <Link to="/create" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">+</i></Link>
        </div>
      </div>
    )
  }
}

export default ProductList;
