import dotenv from "dotenv";
import path from'path';

const envFile = path.join(process.cwd(), './src/.env')
console.log('envFile',envFile )
dotenv.config({ path: envFile });
console.log('database',process.env.DATABASE )

let ProductoDao;
let CarritoDao;

console.log('database-Dao',process.env.DATABASE )

if (process.env.DATABASE == "firebase") {
    const { default: ProductoDaoFirebase } = await import("./productos/productoDaoFirebase.js");
    const { default: CarritoDaoFirebase } = await import( "./carritos/carritoDaoFirebase.js");

    ProductoDao = new ProductoDaoFirebase;
    CarritoDao = new  CarritoDaoFirebase;


    }else{
      const { default: ProductoDaoMongo } = await import("./Productos/ProductoDaoMongodb.js");
      const { default: CarritoDaoMongo } = await import("./Carritos/CarritoDaoMongodb.js");
    ProductoDao = new ProductoDaoMongo;
    CarritoDao = new CarritoDaoMongo;
    }
export { ProductoDao, CarritoDao };