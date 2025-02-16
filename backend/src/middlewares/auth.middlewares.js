import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import userService from '../services/user.service.js'

dotenv.config()

export const authMiddleware = (req, res, next) => {
    try {
        const auth = req.headers.authorization;
            if (!auth) {
                res.send(401)
            }
    
            const parts = auth.split(" ")
    
            const [schema, token] = parts
    
            if (parts.length !== 2) {
                return res.send(401)
            }
    
            if(schema !== "Bearer") {
                return res.send(401)
            }
    
            jwt.verify(token, process.env.SECRET_JWT, async(error, decoded) => {
                if (error) {
                    return res.status(401).send({message: 'Expired Token!'});
                }
                
                const user = await userService.findByIdService(decoded.id);

                if(!user || !user.id) {
                    return res.status(401).send({message: "Invalid Token!"})
                }
                
                req.userId = user.id
                                
                next();
            })
    } catch(err) {
        res.status(500).send({message: err.message})
    }
}