const skills = [
  {skill: "git gatherer",level:6,professional:true,_id:3562},
  {skill:'html hercules',level:3, professional:true,_id:7832},
  {skill:'css clarion',level:4,professional:true,_id:4365},
  {skill:'node nostradamus',level:4,professional:false,_id:6734},
  {skill:'python proffessor',level:1,professional:false,_id:8723},
  {skill:'json derulo',level:1,professional:false,_id:1278},
  {skill:'javascript jehovah',level:4,professional:true,_id:6954}
]

const find = (conditions, callback) => {
    
    try {
      if (!(conditions instanceof Object)){
        throw new TypeError('Please pass in an object')
      }
      
      if (Object.keys(conditions).length === 0) return callback(null, skills)
    
    } catch (error) {
      console.log(error)
      callback(error, [])
    }
  }

  const findById = (id, callback) =>{
    try {
      const skill = skills.find(skill => skill._id === parseInt(id))
      if (!skill) throw new Error ('No skill was found')
      return callback(null, skill)
    } catch (error) {
      console.log(error)
      return callback(error, null)
    }
  }
  function create(skill, callback) {
    skills.skill = ''
    skills.level = 1
    skill.professional = false
    skill._id = Math.floor(Math.random() * 10000)
    skills.push(skill)
    return callback(null, skill)
  }
  
export{
  find,
  findById,
  create
}