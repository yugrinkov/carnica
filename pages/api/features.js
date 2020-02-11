import features from '../../api/features.json'

export default (req, res) => {
  res.status(200).json(features)
}
