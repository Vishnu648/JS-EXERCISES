let array = ['apple','banana','mango']
array.map((fruit) => {
  console.log(fruit);
}
)

let objectArray = [{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}]
objectArray.map((fruit) => {
  console.log(fruit.fruit);
}
)

let object = { fruit1:'apple',fruit2:'banana',fruit3:'mango'}
for(i in object){
    console.log(object[i]);
}