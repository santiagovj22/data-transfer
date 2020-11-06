const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const controllers = require("./controllers");
const { errorHandler } = require("./middlewares/errorHandler");

const PORT = process.env.PORT || 3001;

function application() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(morgan("tiny"));
  app.use(controllers);
  app.use(errorHandler);

  return app;
}

async function main() {
  try {
    const app = application();
    app.listen(PORT, () => console.log(`Server on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

module.exports = { main };
