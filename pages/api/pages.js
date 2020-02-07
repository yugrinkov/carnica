import pages from '../../api/pages.json'

export default (req, res) => {
  res.status(200).json(pages)
}
