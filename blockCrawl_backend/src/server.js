import "./env";
import "./redux/store";
import { GraphQLServer } from "graphql-yoga";
import schema from "./scheme";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";

import { brs, error, init, reLaunch } from "./crwaling/browser";

import path from "path";

/*
 ========================
    mongo DB
 ========================
 */

const connect = mongoose
  .connect(process.env.DB_URI, {
    dbName: "dosdb",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("✔ MongoDB connected..."))
  .catch((e) => console.error(`❌ MongoDB disconnected`, e));
/*
 ========================
    Server setting &&  MiddleWare
 ========================
 */

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, brs, error, init, reLaunch }),
});
server.express.use(morgan("dev"));
server.express.use(helmet());
server.express.use(cors());
server.express.use(bodyParser.json());
server.express.use(bodyParser.urlencoded({ extended: true }));
server.express.use(cookieParser());
server.express.use(express.static("public"));

//==========================================
//        REST API
//==========================================

server.express.use("/api/test", require("./routes/test"));
server.express.use("/api/users", require("./routes/users"));
server.express.use("/api/basecrawl", require("./routes/baseCrawl"));
server.express.use("/api/basecrawlsaved", require("./routes/baseCrawlSaved"));
server.express.use("/api/crawl/taobao", require("./routes/taobao/shopList"));
server.express.use("/api/filecreate", require("./routes/filecreate"));
server.express.use("/api/testmongo", require("./routes/testmongo"));

server.express.use((err, req, res, next) => {
  console.error("❌ Server Error", err);
  res.end("❌ Server Error", err);
});

server.express.get("/download/*", (req, res) => {
  console.log("try download serve...");
  if (req) {
    const fileName = path.basename(req.url);
    //console.log(decodeURIComponent(fileName));
    res.download(
      path.join(__dirname, "../public/", decodeURIComponent(fileName))
    );
  } else {
    res.end();
  }
});

server.start({ port: PORT }, () => {
  console.log(`✔ Server is running on http://localhost:${PORT}`);
});
