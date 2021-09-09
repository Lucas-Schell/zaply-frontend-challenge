import fs from 'fs';
import parse from 'csv-parse';

const csvData = [];

const getProductsFromFile = () => new Promise((resolve) => {
  fs.createReadStream('products.csv')
    .pipe(parse({ delimiter: ';' }))
    .on('data', (csvrow) => {
      const row = {
        productId: parseInt(csvrow[0]),
        image: csvrow[1],
        name: csvrow[2],
        categories: csvrow[3],
        price: parseFloat(csvrow[4]),
        brand: csvrow[5]
      }
      csvData.push(row);
    })
    .on('end', () => {
      resolve(csvData);
    });
})

export default getProductsFromFile
