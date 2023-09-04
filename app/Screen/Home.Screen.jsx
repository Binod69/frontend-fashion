'use client';
import Products from '../Components/Products/Products';
import { useGetProductsQuery } from '../redux/slice/productsApi.slice';

const HomeScreen = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>{isError?.data?.message || isError?.error}</p>;
  }
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
