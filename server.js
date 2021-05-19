
const express = require('express')
const app = express()


app.use(addActiveTime =(req, res, next)=> {
  let requestAt= new Date().getHours()
  
if((requestAt<=17)&&(requestAt>=9))
{
  next()
  app.use(express.static('public'));
}
else{

    res.send("no access")
}
  })


const port = 5000
app.listen(port, (err) => {
  err ? console.log(err) : console.log('the server is running on port 5000')
})
