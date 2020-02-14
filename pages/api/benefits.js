import benefits from '../../api/benefits.json'

export default (req, res) => {
  res.status(200).json(benefits)
}
