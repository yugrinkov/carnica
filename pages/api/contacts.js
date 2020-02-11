import contacts from '../../api/contacts.json'

export default (req, res) => {
  res.status(200).json(contacts)
}
