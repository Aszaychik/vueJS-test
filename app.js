// async function getProducts() {
//   let datas = await fetch('https://dummyjson.com/products?limit=10')
//   return datas.json()
// }

const app = new Vue({
  el: "#app",
  data: {
    maximum: 4269,
    products: null,
    cart: [],
  },
  mounted: function () {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        this.products = data.products;
        console.log('data :>> ', data.products);
      })
  },
});