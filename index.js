const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000;

// const handler =(req, res) =>{
//     res.send('Hello from Node')
// }
app.get('/',(req, res) =>{
    res.send('Hello From my first ever node')
});

const users =[
    {id:1, name:'Folder', email:'folder@gmail.com', phone: '01332457635'},
    {id:2, name:'halder', email:'halder@gmail.com', phone: '01374587635'},
    {id:3, name:'Malder', email:'Malder@gmail.com', phone: '01374560635'},
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
});

app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('inside post')
    res.json(newUser);
})

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})




app.listen(port, () => {
    console.log('listening to port', port);
});