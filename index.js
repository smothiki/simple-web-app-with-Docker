const express = require('express');
const app = express();
app.get('/',(req, res)=>{
  res.send('A Simple Web App .....')
})

app.listen(7860,()=>{
  console.log('server runnig on port 7860')
})
