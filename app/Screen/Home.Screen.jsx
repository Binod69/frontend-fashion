'use client';
import { useEffect, useState } from 'react';
import Products from '../Components/Products/Products';
import axiosInstance from '../config/axios.config';
import apiEndpoints from '../config/apiEndpoints';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axiosInstance.get(apiEndpoints.PRODUCTS);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div>
        <h2>Latest Products</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
          {products.map((product) => (
            <div key={product.id}>
              <Products product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
