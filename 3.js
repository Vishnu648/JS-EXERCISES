var data = [
    {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
    {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
    {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648"}
  ]

for(let values of data){

    // name

   var fname= values.firstname.trim()
   var lname=  values.lastname.trim()
    var Name=`${fname} ${lname}`
    console.log("Name:",Name);

    // number
   
    if(values.phone.length<10){
       
        let remaining=10-values.phone.length
        for(let i=0;i<remaining;i++){
           
 values.phone= "0"+values.phone
        }
        console.log("Phone Number:",values.phone);
    }
   else if(values.phone.length>10){
let remaining=values.phone.length-10
for(let i=0;i<remaining;i++){
var number2=values.phone.slice(0,10)

}
console.log("Phone Number:",number2);
   }

//    zip

var zip= values.zip.replace(/\s/g, "")
console.log('Zip:',zip);

//    age

if(values.age>150||values.age<0){
    console.log("Age:","NA");
}
else{
    console.log("Age:",values.age);
}

// id
var id=values.id
let userId=id.split('')

for(let i=0;i<3;i++){
    userId[i]='#';
}

userId=userId.join('')
console.log("Id:",userId)

// console.log('---',id)

//    for(let res in values){
//     values[res].toString().trim()
//    }
console.log( );
}