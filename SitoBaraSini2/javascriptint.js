const express = require('express');
const app = express();
const port = 3000;
const path=require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  'eserciziodel_26_05_2025.html'));
});
app.get('/tetris',(req, res)=>{
    res.sendFile(path.join(__dirname,  'Sito.html'));
});

app.get('/contact', (req, res) => {
  res.send('Welcome to contact us page');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



