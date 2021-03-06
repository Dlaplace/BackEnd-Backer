const {Schema, model}= require ('mongoose');

const projectSchema = new Schema({

    name:{
        type: String,
        required: true,
    },
    tickets:{
        type:[{
            type: Schema.Types.ObjectId,
            ref: "Ticket",
          }]
    },High:{
        type:[{
            type: Schema.Types.ObjectId,
            ref: "Ticket",
          }]
    },Normal:{
        type:[{
            type: Schema.Types.ObjectId,
            ref: "Ticket",
          }]
    },Low:{
        type:[{
            type: Schema.Types.ObjectId,
            ref: "Ticket",
          }]
    },
},
{timestamps:true});

const Project = model('Project',projectSchema);

module.exports=Project;