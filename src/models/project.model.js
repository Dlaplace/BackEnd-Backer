const {Schema, model}= require ('mongoose');

const projectSchema = new Schema({

    name:{
        type: String,
        required: true,
    },
    tickets:{
        type:[{
            type: Schema.Types.ObjectId,
            ref: "Project",
          }]
    }
},
{timestamps:true});

const Project = model('Project',projectSchema);

module.exports=Project;