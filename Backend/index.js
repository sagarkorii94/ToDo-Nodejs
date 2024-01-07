// To start- npm run nodemon

const express =require('express');
const storage =require('node-persist');
const cors =require('cors');

const app= express();
app.use(express.json());
app.use(cors());

// initializing the task variable
let task= 1;
//get method
app.get('/todo_data', async(req,res)=>{
    const data = await storage.values();
    res.json(data);

});
//post method
app.post('/todo_data', async (req,res) => {
    const data = req.body;
  
    const key = task.toString();
    task++;
    await storage.setItem(key, data);
  
    res.json({ message: 'Data added successfully' });
    console.log(data);
  });
// Start the Express server 
app.listen(5000, async()=>{
   await storage.init();
   await storage.clear();
    console.log('server is listen at port 5000');

});