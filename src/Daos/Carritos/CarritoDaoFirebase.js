import ContenedorFirebase from "../../contenedores/contenedorFirebase.js";

class CarritoDaoFirebase extends ContenedorFirebase {
  constructor() {
    super("carritos");
  }
  async newCart(){
    const doc = this.collection.doc()
    await doc.create({timestamp:Date.now(), products:[]})
     
  }

  
}

export default CarritoDaoFirebase;