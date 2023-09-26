const mongoose = require('mongoose');

const chartSchema = new mongoose.Schema({
    end_year:{
        type:String,
    },
    intensity:{
        type:String,
    },
    sector:{
        type:String,
    },
    topic:{
        type:String,
    },
    insight:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    region:{
        type:String,
    },
    start_year:{
        type:String,
    },
    impact:{
        type:String,
    },
    added:{
        type:String,
    },
    published:{
        type:String,
    },
    country:{
        type:String,
    },
    relevance:{
        type:String,
    },
    pestle:{
        type:String,
    },
    source:{
        type:String,
    },
    title:{
        type:String,
        required:true,
        unique:true,
    },
    likelihood:{
        type:String,
    }            
})

const Chart = mongoose.model('CHART', chartSchema);

module.exports = Chart;