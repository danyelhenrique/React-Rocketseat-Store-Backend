import './dotenv'
const mongoUrl = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWOD}@cluster0-l8thx.mongodb.net/test?retryWrites=true&w=majority`

export default mongoUrl
