let arr = [];
arr.push({
        Name: "Elaraby",
        Email: "elo@gmail.com",
        Age: 21,

        fullData: function () {
                console.log(this.Name, this.Age, this.Email);
        }
});
arr.push({
        Name: "Abdo",
        Email: "abdoayman@gmail.com",
        Age: 21,
        fullData: function () {
                console.log(this.Name, this.Age, this.Email);
        }
});
arr.push({
    Name:"Abdo Hany",
    Email:"abdelrhmanhany200348@gmail.com",
    Age:21,
    
    fullData: function(){
        console.log(this.Name,this.Age,this.Email);
    }
})

arr[0].fullData();
arr[1].fullData();
arr[2].fullData();

let s1 = JSON.stringify(arr[0]) ; 
let s2 = JSON.stringify(arr[1]) ;
let s3 = JSON.stringify(arr[2]) ;

window.localStorage.user1 = s1 ; 
window.localStorage.user2 = s1 ; 
window.localStorage.user3 = s1 ; 
