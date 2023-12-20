import Product from '../model/product-schema.js';
import bwipjs from 'bwip-js';

const generateBarcode = async (productId) => {
  return new Promise((resolve, reject) => {
    const svgOptions = {
      bcid: 'code128',       
      text: productId,      
      scale: 3,             
      height: 10,            
      includetext: true,     
    };

    bwipjs.toBuffer(svgOptions, (err, pngBuffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(pngBuffer);
      }
    });
  });
};

export const userSubmit = async (request, response) => {
  try {
    const product = request.body;

    console.log('Received product data:', product);

    const barcodeBuffer = await generateBarcode(product.productId);

    const newProduct = new Product({
      ...product,
      barcode: barcodeBuffer,
    });

    const savedProduct=await newProduct.save();

    response.status(200).json({ message: 'Data received and saved successfully',data:savedProduct });
  } catch (error) {
    console.error('Error in userSubmit:', error.message);
    response.status(500).json({ error: 'Internal Server Error' });
  }
};