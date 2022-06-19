// https://www.npmjs.com/package/express
import express from 'express'

//https://www.npmjs.com/package/morgan
import morgan from 'morgan';


import taskRoutes from './routes/task.route.js'



const app = express();


app.set('PORT', process.env.PORT || 5000)

app.use(morgan('dev'))

app.use('/api', taskRoutes)

export default app;