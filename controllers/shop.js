const Product = require('../models/product');
const Cart = require('../models/cart');
const CartItem = require('../models/cart-item');

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};
 
exports.getCart = (req, res, next) => {
  CartItem.findAll()
    .then(cart => {
      res.json(cart);
      });
      
      // res.render('shop/cart', {
      //   path: '/cart',
      //   pageTitle: 'Your Cart',
      //   products: cartProducts
      // });
    
};

exports.postCart = (req, res, next) => {
  // console.log(req.body.id,req.body.price);
  // console.log(req.body);
  const prodId = req.body.id;
  CartItem.findAll({where:{id:prodId}})
  .then( product => {
    if(!product){
      CartItem.create(
        
      )
    }
    CartItem.addProduct(product[0].id, product[0].price);
    res.send('added cart');
  });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findAll({where:{id:prodId}})
  .then(product => {
    Cart.deleteProduct(product[0].id, product[0].price);
    res.send('success');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
