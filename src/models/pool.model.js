const {Schema, model}= require ('mongoose');

const poolSchema = new Schema({
    new:{
        type:[{
            type: Schema.Types.ObjectId,
            ref: "Ticket",
          }]
    },
    other:{
        type:[{
            type: Schema.Types.ObjectId,
            ref: "Ticket",
          }]
    },
    closed:{
        type:[{
            type: Schema.Types.ObjectId,
            ref: "Ticket",
          }]
        },
        user:{
            
        }
},
{timestamps:true});

const Pool = model('Pool',poolSchema);

module.exports=Pool;