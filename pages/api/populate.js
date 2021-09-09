import getProductsFromFile from '../../scripts/populateDb';

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        res.status(200).json({ success: true, data: await getProductsFromFile() })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
