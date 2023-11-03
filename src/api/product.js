import apiInstance from './request'

export const getProductsByCategory = async (category) => {
  return apiInstance.get(`/products/category/${category}`)
}

export const getAllProducts = async () => {
  return apiInstance.get(`/products`)
}
