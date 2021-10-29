import * as skillsDb from '../models/skills.js'

function index(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills,
      error
      
    })
  })
}

export{
  index
}