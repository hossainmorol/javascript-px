const addItem = () => {
  const inputFelid = document.getElementById("product-name");
  const inputValue = inputFelid.value;
  addName(inputValue);
  addProductCart(inputValue);
  // console.log(inputValue);
  inputFelid.value = "";
};

const addName = (inputValue) => {
  const ul = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = inputValue;
  ul.appendChild(li);
};

const getCart = (inputValue) => {
  const cart = document.getElementById("cart");
  let objectCart;
  if (cart) {
    objectCart = JSON.parse(cart);
  } else {
    objectCart = {};
  }
  return objectCart;
};

const addProductCart = (inputValue) => {
  const cart = getCart();
  cart[inputValue] = 1;
  const cartStingy = JSON.stringify(cart);
  localStorage.setItem("cart", cartStingy);
};
