var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    if (request.status==200)
    {
let c=JSON.parse(request.responseText)
c.map((m)=>{
console.log(m.flags.png)
})
}else   
{
request.onerror=function()
{
    console.log("site is error")
}}
    var res = JSON.parse(request.response)
    console.log(res)

   // console.log(res[0].population)

    for(var i=0;i<res.length;i++){
        console.log(res[i].name.common,res[i].region,res[i].subregion,res[i].population)
    }

}

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

let a=JSON.stringify(obj1)===JSON.stringify(obj2);

console.log(a)