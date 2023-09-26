const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());

dotenv.config({ path: './config.env'});
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Read data from data.json file
    // const rawData = fs.readFileSync(path.join(__dirname, 'data.json'));
    // const data = JSON.parse(rawData);
    // Insert data into MongoDB Atlas
    // const Chart = require('./model/chartSchema');
    // Chart.create(data)
    // .then(() => {
    //   console.log('Inserted data into MongoDB Atlas');
    // })
    // .catch(err => {
    //   console.error(err);
    // });
    // const Skill = require('./model/skillsSchema');
    // Skill.create(data)
    // .then(() => {
    //     console.log('created new collection');
    // })
    // .catch(err => {
    //     console.log(err);
    // });
  })
  .catch(err => {
    console.error(err);
  });


const port = process.env.PORT || 3000;

const Chart = require('./model/chartSchema');

app.get('/user_details', (req, res) => {
    
    Chart.find({}).sort({ _id: 1 }).exec()
    .then(data => {
      res.setHeader('Content-Language', 'en-US');
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal server error');
    });
  });

app.listen(port, () => {
    console.log(`Server listened on http://localhost:${port}`);
});

module.exports = app;