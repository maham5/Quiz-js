//++++++++++Javascript arrays and methods++++++++//

//1//
const array=[1,3,4,56,78,9];
const maxnum=Math.max(...array);
console.log(maxnum);

//2//

const array1=[1,2,3,4,5,6];
const reversearray=array1.sort((a,b)=>{
return b-a;
})
console.log(array1);

//3//

const array2=[1,34,5,6,7];
const mapmethod = array2.map((x)=>{
   return x * x;
})
console.log(mapmethod);

//4//
const array3 = [2,10,12,6,,8,7,5];
const evennum=array3.filter((num)=>{
  return num % 2 === 0
})
console.log(evennum);

//5//

const array4=[2,4,5,6];
const reducenum = array4.reduce((y)=>{
   return y + y;
})
console.log(reducenum);

//6//
/*const user =[
    {
     name: "Maham Fatima",
     Age:20

    },
    {
       name:"Ayesha Afzal",
       Age : 21,

    }
]
const mapname=user.map((usernames)=>{
    return usernames.name
})
console.log(mapname);*/

//7//
/*const user1=[
    {
        Name:"maham",
        age : 37

},
{
Name :"ayesha",
age:56
},
{
    Name :"burhan",
    age:20
    },
]

const filterOlderAge = user1.filter((z)=>{
  return z.age > 30 ;
})
console.log(filterOlderAge);*/

//8//
/*const array5=["Hasilpur ", "Bahawalpur" , "Multan" ,"Hasilpur" ,"Multan","Lahore"];
const reducecount = array5.reduce((accu , curval)=>{
   if(accu[curval]){
    accu[curval]++;
   }
   else{
accu[curval] = 1;
   }
   return accu;
}, {})
console.log(reducecount)*/

//9//
const array6=[[1, 2,3 ,4], [2 ,6,8] ,9, 10,11,[12],17,18,19,20];
const nestedarr=array6.reduce((a , b) =>{
    return a.concat(b);

})
console.log(nestedarr);

//10//
//++++++++++Functions+++++++++++//
const emptyObject = (obj)=>{
    if(Object.hasOwn(obj)){
        return false;
    }
    else{
        return true;
    }
}
console.log(emptyObject);

//11//
/*const object = {
    name:"maham",
    age:20,
    Occupation : "student"

}

const  fun=(obj)=>{
    for(key in obj){
     
  console.log(obj[key]);
    }
}
fun(object);*/

//12//

/*const object1={
    name:"maham",
    age:6,
}
const cloneObject=()=>{
    let objectDetail={...object1};
  return objectDetail;
}
console.log(cloneObject());*/

//13//
const object2={
    names:"Burhan",
    ages:6,
}
const object3={
    name:"ayesha",
    age:7,
}
const mergeObjects=()=>{
    const obj4 = Object.assign({} ,object2 , object3);
    return obj4;
}
console.log(mergeObjects());

//14//
const object5={
    id:203,
    email:"maham56@gmail.com"
}
const arrayOfKey=()=>{
 return Object.keys(object5)
}

console.log(arrayOfKey());

//15//

const object6={
    id:203,
    email:"maham56@gmail.com"
}
const arrayOfVlaues=()=>{
 return Object.values(object6)
}

console.log(arrayOfVlaues());

//16//
const object7={
    id:203,
    email:"maham56@gmail.com"
}

console.log(arrayOfVlaues());alue=()=>{
 return Object.values(object6)
}

console.log(arrayOfVlaues());

//17//
/*const object8={
    id:203,
    email:"maham56@gmail.com"
}
const keyvaluePair=(objt)=>{
 return objt;
}

console.log(keyvaluePair(object8));*/

//19//


 /* const  object9={
    studentId:3,
    studentName:"anaya"
  }
  const updateName=()=>{
    let nameChange=object9.map((employee)=>{
        if(employee.studentId == 3){
            return{
                ...employee,
                 studentName: "farhan"  
        }
    }
     return nameChange;
    })

  }
  console.log(updateName());*/


 /* function primeNum(num) {
  if(num<=1)return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
   
  }
  

  console.log(primeNum(0)); */


  const factorial=(n)=> {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  
    return result;
}
  console.log(factorial(0)); 

  
