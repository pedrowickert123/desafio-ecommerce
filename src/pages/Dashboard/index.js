/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { formatBrPrice } from '../../util/format';

import Product from '../../components/Product';
import Pagination from '../../components/Pagination';

import { Container, PageHeader, ProductList } from './styles';

export default function Dashboard() {
  const [totalPage, setTotalPage] = useState(0);
  const [products, setProducts] = useState([]);

  async function loadProducts(page) {
    try {
      const response = await api.get('/products', {
        params: {
          _page: page,
          _limit: 10,
        },
      });

      const arrProducts = response.data.map((product, index) => ({
        ...product,
        id: index,
        formattedPrice: formatBrPrice(product.price, false),
      }));

      setProducts(arrProducts);
      setTotalPage(parseInt(response.headers['x-total-count'] / 10, 10));
      setTotal(Number(response.headers['x-total-count']));
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadProducts(1);
  }, []); // eslint-disable-line

  return (
    <Container>
      <PageHeader>
        <h1>Sapatos</h1>
        <div className="dropdown">
          <select>
            <option value="MAIOR PRECO">Maior preço</option>
          </select>
        </div>
      </PageHeader>
      <ProductList>
        {products.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </ProductList>
      {products.length > 0 && (
        <Pagination
          // page={page}
          totalPage={totalPage}
          onLoadPage={loadProducts}
        />
      )}
    </Container>
  );
}
