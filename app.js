async function getProducts() {
  let datas = await fetch('https://dummyjson.com/products?limit=10')
  return datas.json()
}

const app = new Vue({
  el: "#app",
  data: {
    maximum: 4269,
    products: null,
    cart: [],
  },
  mounted: async () => {
    data = await getProducts();
    data.products.map((product) => (
      console.log(product.title)
    ))
    data => {
      this.products = data.products;
    }
  },
});