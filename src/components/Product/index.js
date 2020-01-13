import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Product({ data }) {
  return (
    <Container>
      <img src={data.image} alt="product-name" />
      <span>
        {data.name} <br />
        R$ {data.price}
      </span>
    </Container>
  );
}

Product.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
