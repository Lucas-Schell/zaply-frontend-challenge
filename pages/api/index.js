import dbConnect from '../../utils/dbConnect';
import Product from '../../models/Product';

dbConnect()

export default async (req, res) => {
  const { method } = req;
  const name = req.query.search ? {
    $or: [
      {
        name: {
          '$regex': req.query.search,
          '$options': 'i'
        }
      },
      {
        brand: {
          '$regex': req.query.search,
          '$options': 'i'
        }
      }
    ]
  } : {}
  const categories = req.query.categories ? { categories: req.query.categories } : {}
  const sort = req.query.sort ? { [req.query.sort]: req.query.order } : {}
  console.log(sort)

  switch (method) {
    case 'GET':
      try {
        const products = await Product.find({ ...name, ...categories }).sort(sort).lean();
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
