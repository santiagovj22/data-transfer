function errorHandler(err, req, res, next) {
  res.json({ code: 500, error: "Unexpected Error, Please conteact you admin" }).status(500);
  next(err);
}

module.exports = { errorHandler };
