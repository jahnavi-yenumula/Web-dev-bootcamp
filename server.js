const express=require("express");
const app=express();

const port=process.env.PORT || 8080;
app.use(express.static("frontend"));
app.use(express.json());
var users=[
  {
        "id":1,
        "name":"john",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/18.jpg"
    },

    {
        "id":2,
        "name":"amber",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/43.jpg"
    },

    {
        "id":3,
        "name":"lily",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/26.jpg"
    },

    {
        "id":4,
        "name":"juan",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/88.jpg"
    },

    {
        "id":5,
        "name":"valtteri rantala",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/5.jpg"
    },
  {
    "id": 6,
    "name": "Diya Nair",
    "gender": "Female",
    "image": "https://randomuser.me/api/portraits/women/92.jpg"
  },
  {
    "id": 7,
    "name": "Rohan Singh",
    "gender": "Male",
    "image": "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    "id": 8,
    "name": "Kavya Rao",
    "gender": "Female",
    "image": "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    "id": 9,
    "name": "Vikram Joshi",
    "gender": "Male",
    "image": "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    "id": 10,
    "name": "Ishita Gupta",
    "gender": "Female",
    "image": "https://randomuser.me/api/portraits/women/95.jpg"
  }
];
var currId=11;
function findIndex(id){
    for (var index = 0; index < users.length; index++) {
        if(id===users[index].id){
            return index;
        }
    }
    return -1;
}
app.get("/api/users",function(req,res){
    return res.json(users);
});
app.get("/api/users/:id",function(req,res){
    var id=Number(req.params.id);
    var ind=findIndex(id);
    if(ind===-1){
        return res.status(404).json({"message":"User not found with id: "+ id});
    }
    return res.json(users[ind]);
});
app.get("/api/randomuser",function(req,res){
    if(users.length===0){
        return res.status(404).json({"message":"No user found"});
    }
    var randomInd=Math.floor(users.length * Math.random());
    return res.json(users[randomInd]);
});
app.post("/api/users",function(req,res){
    var newUser=req.body;
    var tempUser=
        {
            "id": currId,
            "name": newUser.name,
            "gender": newUser.gender,
            "image": newUser.image
        };
    
    currId=currId+1;
    users.push(tempUser);
    return  res.status(201).json({
        "message": "User created successfully",
        "user": tempUser
    });
})
app.listen(port,function(){
    console.log("Server running on http://localhost:"+port);
});