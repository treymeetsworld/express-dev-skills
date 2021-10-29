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

function create(req, res) {
  skillsDb.create(req.body, function(error, skill) {
    res.redirect('/skills')
  })
}
function newSkill(req, res) {
  res.render('skills/new')
}

export{
  index,
  show,
  create,
  newSkill as new
}