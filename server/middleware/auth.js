import jwt from "jsonwebtoken";

const auth = (req, res, next) => {

    try {
        const token = req.headers.authorization.split("Bearer ")[1];

        let decData = jwt.verify(token, 'secretSHHHH');
        req.userId = decData?.id;

        next();
    } catch (error) {
        console.log(error)
    }

};

export default auth