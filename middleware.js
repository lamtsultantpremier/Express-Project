import chalk from "chalk";
const logger = (req,res,next)=>
{
    const methodColors = { 
        GET:chalk.green,
        POST:chalk.yellow,
        PUT : chalk.blue,
        DELETE : chalk.red
    }

    const color = methodColors[req.method]
 
    console.log(`${color(req.method)} ${req.protocol}:/${req.get('host')}${req.originalUrl}`);
    next();
}
export default logger;