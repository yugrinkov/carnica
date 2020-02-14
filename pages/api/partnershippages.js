import partnershipPages from '../../api/partnershippages.json'

export default (req, res) => {
  res.status(200).json(partnershipPages)
}
