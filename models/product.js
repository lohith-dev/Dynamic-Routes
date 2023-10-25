const fs = require('fs');
const path = require('path');
const db = require('../util/database.js')


module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    console.log(this);
   return db.execute('INSERT INTO products (title,price,ImageUrl,description) VALUES (?,?,?,?)',[this.title,this.price,this.imageUrl,this.description]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?',[id]);
  }

  static deleteById(id) {
    return db.execute('DELETE FROM products WHERE products.id = ?',[id]);
  }
};
