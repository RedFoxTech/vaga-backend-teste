import mongoose from "mongoose";
export const mongo = {
  async connect(connectionString: string) {
    await mongoose.connect(connectionString);
    console.log("Connected to mongo!");
  },
  async disconnect() {
    await mongoose.disconnect();
  },
};
