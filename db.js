const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(
            'mongodb+srv://admin:adm!n@cluster0.3vfl9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            {useNewUrlParser: true, useUnifiedTopology:true}
        )
        console.log('DB Connected...')
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = connectDB