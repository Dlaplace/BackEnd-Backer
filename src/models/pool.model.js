const {Schema, model}= require ('mongoose');

const poolSchema = new Schema({
    High:{
        type:[{
            type: Schema.Types.ObjectId,
            ref: "Ticket",
          }]
    },
    Normal:{
        type:[{
            type: Schema.Types.ObjectId,
            ref: "Ticket",
          }]
    },
    Low:{
        type:[{
            type: Schema.Types.ObjectId,
            ref: "Ticket",
          }]
        },
        user:{
            
        },
        bin:{
          type:[{
            type: Schema.Types.ObjectId,
            ref: "Ticket",
          }]
        }
},
{timestamps:true});

const Pool = model('Pool',poolSchema);

module.exports=Pool;