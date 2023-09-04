'use client';
import React, { useState, useEffect } from 'react';
import apiEndpoints from '../../config/apiEndpoints';
import axiosInstance from '../../config/axios.config';

const page = ({ params: { id } }) => {
  const [product, setProduct] = useState({});

  const fetchedProduct = async () => {
    const { data } = await axiosInstance.get(`${apiEndpoints.PRODUCTS}/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    fetchedProduct();
  }, [id]);

  return (
    <>
      <div>
        <h2>{product.name}</h2>
      </div>
    </>
  );
};

export default page;
