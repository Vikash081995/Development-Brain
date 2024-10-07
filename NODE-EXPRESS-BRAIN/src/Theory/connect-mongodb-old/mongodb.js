import { MongoClient } from "mongodb";
const fs = require("fs").promises;
import path from "path";

const connectDB = async () => {
  const client = await MongoClient.connect("mongodb://localhost:27017");

  const db = client.db("nodejs-dummy");
  const newProductsString = await fs.readFile(
    path.join(__dirname, "/Theory/Connec-MongoDB-with-Nodejs/new-products.txt"),
    "utf8"
  );
  const productNames =newProductsString.split(',')
  for(const productName in productNames){
    await db.collection("products").insertOne({
      name:productName
    })
  }
  await db.collection("products");
  client.close()
};


connectDB();