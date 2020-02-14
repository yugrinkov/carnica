import productPages from '../../api/productspages.json'

export default (req, res) => {
  res.status(200).json(productPages)
}
