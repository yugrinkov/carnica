import clubPages from '../../api/clubpages.json'

export default (req, res) => {
  res.status(200).json(clubPages)
}
