import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../config.js";

export function createAccesToken(payload) {

    return new Promise((resolve, reject) => {

        jwt.sign(
            payload,
            TOKEN_SECRET,
            // {
            //     id: userSaved._id,
            // },
            // "secret123",
            {
                expiresIn: "1d",
            },
            (err, token) => {
                if (err) console.log(err);
                resolve(token);
                // res.cookie('token', token)
                // res.json({
                //     message: "User creates successfully OK"
                // })
            }
        );

    });




    
}



