import aboutPages from '../../api/aboutpages.json'

export default (req, res) => {
  res.status(200).json(aboutPages)
}
