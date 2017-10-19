import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import ColorSet from './ColorSet';

function Product({ product, deleteProduct }) {
  const { name, colors } = product;

  return (
    <Segment>
      <p>{name}</p>
      Colors: <ColorSet colors={colors} />
      <Button onClick={deleteProduct} content="Delete" icon="delete" labelPosition="right" />
    </Segment>
  );
}

export default Product;
