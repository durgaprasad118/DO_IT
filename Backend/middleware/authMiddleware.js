import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Authentication failed" });
  }
console.log("conterol reacherd here");
  try {
    const decodedToken = jwt.verify(token, "xyz"); // Use the same secret key as in the login controller
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Authentication failed" });
  }
};
export default authMiddleware;
