const Client = require('../../../models/Client')

module.exports = (req,res) => {

  const { id } = req.params

  let { firstName, lastName, age, address } = req.body
  const updatedAt = Date.now()

  Client.findByIdAndUpdate( id,  { firstName, lastName, age, address, updatedAt} )
    .then( client => {
      console.log('client has been updated succesfully')
      res.status(200).json(client)
    })
    .catch( err => res.status(500).json(err) )

}
