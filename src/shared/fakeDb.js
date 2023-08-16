// use local storage to manage cart data
const addToDb = (_id) => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[_id];
  if (!quantity) {
    shoppingCart[_id] = 1;
    console.log("if")
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  } else {
    removeFromDb(_id)
    console.log("else")
  }
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

const isInCart = (_id) => {
  const shoppingCart = getShoppingCart();
  return _id in shoppingCart;
};

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart, isInCart };
