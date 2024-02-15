const player=require('../models/player.models')

module.exports.allPlayers=(req,res)=>{
    player.find()
    .then(allplayers=>res.json(allplayers))
    .catch((err)=>res.json(err))
}
module.exports.createPlayer=(req,res)=>{
    player.create(req.body)
    .then(createdPlayer=>res.status(200).json(createdPlayer ))
    .catch((err)=>res.status(400).json(err))
}

module.exports.deletePlayer=(req,res)=>{
    player.deleteOne({_id:req.params.id})
    .then(deletedPlayer=>res.json(deletedPlayer))
    .catch((err)=>res.json(err))
}
module.exports.updatePlayer = (req, res) => {
    player.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedPlayer) => {
        res.json(updatedPlayer);
      })
      .catch((err) => res.status.json(err));
  };