import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  function addProduct(productId, amount) {
    cart.value = [...cart.value, { productId, amount }]
  }
  function substractProduct(productId, amount) {
    cart.value = cart.value.map((productInCart) => {
      if (productInCart.productId == productId) {
        return { productId, productInCart: productInCart.amount - amount }
      } else return productInCart
    })
  }

  function removeProduct(productId) {
    cart.value = cart.value.filter((productInCart) => productInCart.productId != productId)
  }

  function cleanCart() {
    if (cart.value.findIndex((productInCart) => productInCart.amount <= 0) !== -1) {
      cart.value = cart.value.filter((productInCart) => productInCart.amount > 0)
    }
  }

  watch(() => cart.value, cleanCart)

  return {
    cart,
    addProduct,
    substractProduct,
    removeProduct
  }
})
