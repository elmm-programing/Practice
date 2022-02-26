const path =require('path') ;
const root = path.join(__dirname, '../public')
const getUsers = (req,res) => {
  res.sendFile('user.html',{root:root})
};
const createUsers = (req,res) => {
  res.sendFile('createUsers.html',{root:root})
};
const deleteUsers = (req,res) => {
  res.sendFile('deleteUsers.html',{root:root})
};
const updateUsers = (req,res) => {
  res.sendFile('updateUsers.html',{root:root})
};
module.exports = {getUsers,createUsers,deleteUsers,updateUsers};
