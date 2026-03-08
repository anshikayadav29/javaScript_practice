const product = {
  details: {
    price: 500
  }
};

const { details: { price } } = product;

console.log(price);
