'use client';
import { useGetProductDetailQuery } from '../redux/slice/productsApi.slice';
const SingleProductScreen = ({ id }) => {
  const { data: product, isLoading, isError } = useGetProductDetailQuery(id);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>{isError?.data?.message || isError?.error}</p>;
  }
  return (
    <div>
      <h2>{product.title}</h2>
    </div>
  );
};

export default SingleProductScreen;
