//Do the below programs in arrow functions.
//a.	Print odd numbers in an array
//b.	Convert all the strings to title caps in a string array
//c.	Sum of all numbers in an array
//d.	Return all the prime numbers in an array
//e.	Return all the palindromes in an array

//Solutions:
//A.	Print odd numbers in an array
//Arrow Function:
var y=[1,2,3,4,5,6,7]
var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));

//B.	Convert all the strings to title caps in a string array
//Arrow Function:
var str="vukkisila raaga shobitha";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));

//C.	Sum of all numbers in an array
//Arrow Function:
var a=[10,20,30,40,50,60];
var sum=0;
let ab=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(ab(a));

//D.	Return all the prime numbers in an array
//Arrow Function:
let n=34;
let l=(n)=>
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
console.log(l(n));

//Return all the palindromes in an array
//Arrow Function:
const palin=()=>{
    var a=["madam","teacher"]
    for(i=0;i<a.length;i++)
    {
        var b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i])
    }}
    palin()
