import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";


if (!DB_URI) {
    throw new Error("DB_URI is not defined in environment variables .env.<production/development>.local file");
}

const connecToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Connected to Database successfully");
    } catch (error) {
        console.error("Error in connecting to Database", error);
        process.exit(1);
    }
}

export default connecToDatabase;