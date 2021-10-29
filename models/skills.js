const skills = [
  {skill: "git gatherer",level:6,professional:true,_id:3562},
  {skill:'html hunter',level:3, professional:true,_id:7832},
  {skill:'css champion',level:4,professional:true,_id:4365},
  {skill:'node nostradamus',level:4,professional:false,_id:6734},
  {skill:'python proffesor',level:1,professional:false,_id:8723},
  {skill:'json jehovah',level:1,professional:false,_id:1278},
  {skill:'javascript joker',level:4,professional:true,_id:6954}
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

export{
  find
}