import apiInstance from './request'

export const getAllCategories = async () => {
  return apiInstance.get('/products/categories')
}
