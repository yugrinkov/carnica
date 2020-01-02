import homePages from '../../public/api/homepages.json'

export default (req, res) => {
  res.status(200).json(homePages)
}
