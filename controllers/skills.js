import * as skillsDb from '../models/skills.js'

function index(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills,
      error
      
    })
  })
}
function show (req,res){
  skillsDb.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill,
      error
    })
  })
}

export{
  index,
  show
}