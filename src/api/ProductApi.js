import services from "./BaseApi";

const fetchProductsFromApi = () => {
  const data = services.getData("/products");
  return data;
};

export { fetchProductsFromApi };
