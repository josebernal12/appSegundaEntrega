import ContenedorMongo from "../../Contenedores/ContenedorMongodb.js"
import mongoose from "mongoose";

class ProductoDaoMongo extends ContenedorMongo {
  constructor() {
    super("productos", new mongoose.Schema({
      title: { type: String, require: true, max: 200 },
      description: { type: String, require: true, max: 200 },
      code:{ type: Number, require: true},
      price:{ type: Number, require: true},
      thumbnail:{ type: String, require: true },
      timestamp:{ type: Date, require: true },
      stock:{ type: Number, require: true}
    })
    )
  }

  async update(id, title, description, code, price, thumbnail, stock){
    await this.collection.updateOne({_id:id}, {title, description, code, price, thumbnail, stock})
    console.log(this.collection)        
  }
  
  async newProduct(title, description, code, price, thumbnail, stock){
    const doc = new this.collection({title, description, code, price, thumbnail, stock,timestamp:Date.now()})
    await doc.save()   
    console.log(this.collection)        
  }

  

}

export default ProductoDaoMongo;