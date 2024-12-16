const userModel = require("../Db/db");
const captainModel = require("../Db/captainModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../Db/blacklist");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });
  console.log("token in logout: ", token);

    if (isBlacklisted) {
      return res.status(401).json({ message: "Blacklisted" });
    }
  if (!token) {
    console.log("not token");
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "unauthorized" });
  }
};
module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized-token not found" });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;

    return next();
  } catch (err) {
    console.log(err);

    res.status(401).json({ message: "Unauthorized-captain not found" });
  }
};
