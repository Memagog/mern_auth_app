const jwt = require("jsonwebtoken");
const {secretOrKey} = require('../config/key.js')

module.exports = (roles)=> {
    return (req,res,next)=>{
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(403).json({message: "Not like Role"})
            }
            const {roles: userRoles} = jwt.verify(token, secretOrKey)
           
            let hasRole = false 
            userRoles.forEach(role => {
                console.log(role)
                if(roles.includes(role)){
                    hasRole = true 
                }   
                
            });
            if(!hasRole){
                return res.status(403).json({message: "Not like Role"})
            }
            console.log(hasRole)
            
               
                User.find({})
                    .then(user => {
            
                        res.send(user)
                    });
    
        } catch (error) {
           
            console.log(error);
            return res.status(403).json({message: "Treh kakoito"})
        }
    }
};
