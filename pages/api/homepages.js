import homePages from '../../api/homepages.json'

export default (req, res) => {
  res.status(200).json(homePages)
}
