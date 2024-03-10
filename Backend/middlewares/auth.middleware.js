const jwt = require("jsonwebtoken");
const userModel = require("../models/User");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization").split(" ")[1];

        if (!token) return res.status(404).json({ msg: "Token Not Found" });

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)

        if (!decoded) {
            return res.status(403).json({ msg: "Unauthorized" });
        }

        const user = await userModel.findById(decoded?.userId).select("-password");

        if(!user)  return res.status(404).json( {msg:"User not found"} )

        req.user =  user;
        next();

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Internal Server Error" })
        }
    };

    module.exports = authMiddleware;