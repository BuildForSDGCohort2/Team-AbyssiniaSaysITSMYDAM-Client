import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_PRODUCT } from '../../apollo/product/product.operations';
import { useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import SingleProduct from './supplier-item.component';

const CompanyItemContainer = () => {
  const { productId } = useParams();
  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: { productId },
  });

  if (!data && !loading) {
    return <Redirect to="/error" />;
  }

  if (loading) return <CircularProgress />;

  return <SingleProduct data={data} loading={loading} />;
};

export default CompanyItemContainer;
