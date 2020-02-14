import productPages from '../../api/productpages.json'

export default (req, res) => {
  res.status(200).json(productPages)
}
