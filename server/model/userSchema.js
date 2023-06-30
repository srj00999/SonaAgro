const mongoose  = require("mongoose");
const bycrpt = require("bcryptjs");
const jwt  = require('jsonwebtoken');

//creating structure of document
const userSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    }, 
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    work:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    cpassword:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default:Date.now
    },
    messages:[
        {
            name:{
                type: String,
                required: true,
            }, 
            email:{
                type: String,
                required: true,
            },
            phone:{
                type: String,
                required: true,
            },
            message:{
                type: String,
                required: true,
            },
        }
    ],
    tokens:[
        {
            token:{
                type: String,
                required: true,
            }
        }
    ]
})


//we hashing the password
userSchema.pre('save', async function(next){

    if(this.isModified('password')){
        this.password = await bycrpt.hash(this.password, 12);
        this.cpassword =await bycrpt.hash(this.password, 12);
    }
    next();
});

//we are generating token
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}
// stored the mesage

userSchema.methods.addMessage = async function(name, email, phone, message){
 try{
    this.messages = this.message.concat({name, email, phone, message});
    await this.save();
    return this.messages;
 }catch(err){
    console.log(err);
 }   
}



//collection creation
const User = mongoose.model('USER', userSchema);

module.exports =  User;
