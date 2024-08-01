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