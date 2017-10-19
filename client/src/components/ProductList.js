import React, { Component } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Product from './Product';
import { loadAllProducts, deleteProduct } from '../AC/products';

class ProductList extends Component {
  componentDidMount() {
    const { loadAllProducts, loaded, loading } = this.props;
    if (!loading && !loaded) loadAllProducts();
  }

  renderProducts() {
    const { products } = this.props;

    return products.map(product => {
      return (
        <Grid.Column stretched textAlign="center" key={product._id}>
          <Product product={product} deleteProduct={this.handleProductDelete(product._id)} />
        </Grid.Column>
      );
    });
  }

  handleProductDelete = id => () => this.props.deleteProduct(id);

  render() {
    const { loading } = this.props;
    if (loading) return <Loader active inline="centered" size="large" />;

    return <Grid columns={4}>{this.renderProducts()}</Grid>;
  }
}

export default connect(
  state => {
    return {
      loading: state.products.loading,
      loaded: state.products.loaded,
      products: state.products.entities,
    };
  },
  { loadAllProducts, deleteProduct }
)(ProductList);
