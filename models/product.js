const db=require('../util/database');
module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  updateProduct(){
      return db.execute('UPDATE products SET title=?,price=?,description=?,imageURL=? WHERE ',
      [this.title,this.price,this.description,this.imageUrl]);
  }

  save() {
    
      return db.execute('INSERT INTO products (title,price,description,imageURL) VALUES (?,?,?,?)',
      [this.title,this.price,this.description,this.imageUrl]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE id = ?',[id]);
  }
  static deletebyId(id){
    return db.execute('DELETE FROM products WHERE id = ?',[id]);
  }
}
