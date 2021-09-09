import dbConnect from '../../utils/dbConnect';
import Product from '../../models/Product';

dbConnect()

export default async (req, res) => {
  const { method } = req;
  const skip = req.query.skip || 0;
  // const name = req.params.name
  // const name = req.params.name
  // const name = req.params.name

  switch (method) {
    case 'GET':
      try {
        const products = await Product.find().lean().skip(skip);
        res.status(200).json({ success: true, data: products })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    case 'POST':
      try {
        const newProduct = await Product.create(req.body);
        res.status(201).json({ success: true, data: newProduct })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
