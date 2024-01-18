
const createServer = require('./src/app.js')
const usersRoute = require('./src/routes/users.route.js')
const authRoute = require('./src/routes/auth.route.js')
const majorsRoute = require('./src/routes/majors.route.js')
const questionsRoute = require('./src/routes/questions.route.js')
const examsRoute = require('./src/routes/exams.route.js')
const resultRoute = require("./src/routes/results.route.js")
const errorMiddleware = require('./src/middlewares/error.middleware.js')


const app = createServer();

app.use("/api", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/questions", questionsRoute);
app.use("/api/exams", examsRoute);
app.use("/api/majors", majorsRoute);
app.use("/api/results", resultRoute);
app.use(errorMiddleware);

process.on('unhandledRejection', (err, promise) => {
    console.log(err);
    process.exit(1);
});


