import mongoose from "mongoose"

const ConnectDatabase = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then((e)=>{console.log(e.connection.host)})
    } catch (error) {
        console.log(error)
    }
}
export default ConnectDatabase