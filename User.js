const {Schema, model} = require("mogoose");
const UserSchema = new UserSchema(
{
     nome: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    senha: {
        type:String,
        required:true
    },
    token: {
        type:String,
        required:true
    }
},
{
    timestamps:true
}
);
module.exports = model("User", UserSchema);