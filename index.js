const express = require('express');
const generateDataRoutes = require('./routes/generateDataRoute');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('Server is running');
})

const PORT = 2020;
app.use('/api/getData',generateDataRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})