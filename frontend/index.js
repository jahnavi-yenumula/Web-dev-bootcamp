// alert("welcome to my web page");
var Users=[
    {
        "name":"John doe",
        "gender": "Male",
        "image": "john.png"
    },
    {
        "name":"Jane doe",
        "gender": "Female",
        "image": "jane.png"
    }
]
var curId=0;
function toggleUser(){
    curId=1-curId;
    var userName=document.getElementById("user-name");
    var userImage=document.getElementById("user-image");
    var userGender=document.getElementById("user-gender");
    userName.innerHTML=Users[curId].name;
    userImage.src=Users[curId].image;
    userGender.innerHTML=Users[curId].gender;
}
function randomUser(){
    fetch("https://randomuser.me/api/")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var userName=document.getElementById("user-name");
        var userImage=document.getElementById("user-image");
        var userGender=document.getElementById("user-gender");
        userName.innerHTML=data.results[0].name.first + " " +data.results[0].name.last;
        userGender.innerHTML=data.results[0].gender;
        userImage.src=data.results[0].picture.medium;

    })
    .catch(function(err){
        console.log("error ouccured: "+err);
    })
}
function MyrandomUser(){
    fetch("/api/randomuser")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var userName=document.getElementById("user-name");
        var userImage=document.getElementById("user-image");
        var userGender=document.getElementById("user-gender");
        userName.innerHTML=data.name;
        userGender.innerHTML=data.gender;
        userImage.src=data.image;

    })
    .catch(function(err){
        console.log("error ouccured: "+err);
    })
}