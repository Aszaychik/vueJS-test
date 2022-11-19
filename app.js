const product = {
  "name": 'SmartPhone',
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, autem esse dolores quo necessitatibus iure vitae ullam molestiae! Non alias quisquam eaque unde inventore nesciunt aliquid maiores, tenetur provident laborum!",
  'price': 69,
  'image': "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
}

const app = new Vue({
  el: "#app",
  data: product,
});