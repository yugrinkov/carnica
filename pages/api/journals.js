import journals from '../../api/journals.json'

export default (req, res) => {
  res.status(200).json(journals)
}
