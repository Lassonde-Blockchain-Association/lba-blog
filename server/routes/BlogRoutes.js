import { PrismaClient } from "@prisma/client";

const express = require("express");

const prisma = new PrismaClient();
const router = express.Router();
const app = express();
const blogRouter = require("./routes/blog.router");

app.use(express.json());
app.use(blogRouter);

module.exports = router;
