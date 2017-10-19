import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import TabLayout from './components/TabLayout';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">Product manager</Header>
        <TabLayout
          tabs={[
            { name: 'Add product', component: <AddProductForm /> },
            { name: 'Browse products', component: <ProductList /> },
          ]}
        />
      </Container>
    );
  }
}

export default App;
