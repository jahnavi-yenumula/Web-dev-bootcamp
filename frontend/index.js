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