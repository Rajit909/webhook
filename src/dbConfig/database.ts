import mongoose, { ConnectOptions, Mongoose } from "mongoose";

const connectToDB = (): void => {
    const mongoUrl = process.env.MONGO_URI as string;
    mongoose.connect(mongoUrl, {} as ConnectOptions)
        .then((conn: Mongoose) => {
            console.log(`Connected DB : ${conn.connection.host}`);
        })
        .catch((error: Error) => {
            console.log(error.message);
            process.exit(1);
        });
};

export default connectToDB;