import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/login', routes.loginRouter);
app.use('/orders', routes.orderRouter);
app.use('/products', routes.productsRouter);
app.use('/users', routes.userRouter);

app.use(errorMiddleware);

export default app;
