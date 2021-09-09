import dbConnect from '../../utils/dbConnect';
import Product from '../../models/Product';

dbConnect()

export default async (req, res) => {
  const { method, query: { id } } = req;

  switch (method) {
    case 'GET':
      try {
        const products = await Product.findOne({ productId: id });
        res.status(200).json({ success: true, data: products })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    case 'PUT':
      try {
        const product = await Product.findOneAndUpdate({ productId: id }, req.body, {
          new: true
        });

        if (!product) {
          return res.status(400).json({ success: false, message: 'Product was not updated' });
        }
        res.status(200).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    case 'DELETE':
      try {
        const deletedProduct = await Product.findOneAndDelete({ productId: id });

        if (!deletedProduct) {
          return res.status(400).json({ success: false, message: 'Product was not deleted' })
        }
        res.status(200).json({ success: true, data: deletedProduct });
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
