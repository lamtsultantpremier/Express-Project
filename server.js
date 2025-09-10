import path from 'path';
import express from 'express';
import posts from './routes/posts.js'
import logger  from './middleware.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const PORT = process.env.PORT

const app = express();

//setup static folder
//middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(process.cwd(),'public')));

//Routes
app.use("/api/posts",posts);

// middleware for error
app.use(notFound);
app.use(errorHandler);

app.listen(PORT,()=>console.log(`Server is running ${PORT}`));
