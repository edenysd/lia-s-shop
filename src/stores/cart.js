import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  const totalValue = ref(0)

  function setProduct(productId, amount, productSnapshot) {
    if (cart.value.findIndex((productInCart) => productInCart.productId === productId) !== -1) {
      cart.value = cart.value.map((productInCart) => {
        if (productInCart.productId == productId) {
          return {
            productId,
            amount: amount,
            snapshot: productSnapshot
          }
        } else return productInCart
      })
    } else {
      cart.value = [...cart.value, { productId, amount, snapshot: productSnapshot }]
    }
  }
  function addProduct(productId, amount, productSnapshot) {
    if (cart.value.findIndex((productInCart) => productInCart.productId === productId) !== -1) {
      cart.value = cart.value.map((productInCart) => {
        if (productInCart.productId == productId) {
          return {
            productId,
            amount: productInCart.amount + amount,
            snapshot: productSnapshot
          }
        } else return productInCart
      })
    } else {
      cart.value = [...cart.value, { productId, amount, snapshot: productSnapshot }]
    }
  }
  function substractProduct(productId, amount) {
    cart.value = cart.value.map((productInCart) => {
      if (productInCart.productId == productId) {
        return { ...productInCart, amount: productInCart.amount - amount }
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
  function calculateData() {
    console.log(cart)
    totalValue.value = cart.value.reduce(
      (acum, productInCart) => acum + productInCart.amount * productInCart.snapshot.price,
      0.0
    )
  }

  watch(() => cart.value, cleanCart)
  watch(() => cart.value, calculateData)

  return {
    cart,
    totalValue,
    setProduct,
    addProduct,
    substractProduct,
    removeProduct
  }
})
