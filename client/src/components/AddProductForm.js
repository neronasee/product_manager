import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Input } from 'semantic-ui-react';
import ColorPicker from './ColorPicker';
import { addProduct } from '../AC/products';

class AddProductForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      colors: { ...baseColors },
      formValid: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Product name</label>
          <Input
            placeholder="name (4-8 characters, numbers and letters)"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </Form.Field>

        <Form.Field>
          <label>Pick desired colors:</label>
          <ColorPicker handleColorChange={this.handleColorChange} colors={this.state.colors} />
        </Form.Field>

        <Button color="blue" type="submit" disabled={!this.state.formValid}>
          Submit
        </Button>
      </Form>
    );
  }

  handleInputChange(ev) {
    const name = ev.target.value;

    if (name.length <= limits.name.max && /^[a-zA-Z0-9_]*$/.test(name)) {
      this.setState(
        {
          name,
        },
        () => this.validateForm()
      );
    }
  }

  handleColorChange(color) {
    this.setState(
      {
        colors: { ...this.state.colors, [color]: !this.state.colors[color] },
      },
      () => this.validateForm()
    );
  }

  handleSubmit(ev) {
    const { name, colors } = this.state;
    const colorsArr = Object.keys(colors).filter(color => colors[color]);

    this.props.addProduct(name, colorsArr);

    this.setState({ formValid: false, name: '', colors: { ...baseColors } });

    ev.preventDefault();
  }

  validateForm() {
    const { colors, name } = this.state;

    if (name.length >= limits.name.min && !Object.keys(colors).every(color => !colors[color])) {
      this.setState({
        formValid: true,
      });
    } else {
      this.setState({
        formValid: false,
      });
    }
  }
}

const baseColors = {
  red: false,
  blue: false,
  green: false,
};

const limits = {
  name: {
    min: 4,
    max: 8,
  },
};

export default connect(null, { addProduct })(AddProductForm);
