const express = require('express')
const app = express()
const port = 5000



app.get('/', (req, res) => {
  res.send('Hello World!')
})

// middleware
app.use(express.json())
//routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
})