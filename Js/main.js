// break , continue


// var myArr = ['oppo' , 'iphone' , 'samsung' , 'nokia']

// for ( var i = 0 ; i < myArr.length   ; i++ ) {
//     if(myArr[i] == 'iphone') continue
//     console.log(myArr[i]);
// }



// increment , decrement  ( ++ , -- )

// var x = 10 


// yzwdo fe memory b3den ytb3o 
// x = x +1 
// x += 1 
// ++x --> zadt fee memory 
// console.log(++x);


// x++

// console.log(x++); --> 10 abl l memory , 11 b3d al memory 

// console.log(x); --> 11 



// logical operators ---> &&  , || 

// var x = 10 

// var y = 20 


// && ---> true,true = true ,, false, false = false, true, false = false
// || ---> true,true = true ,, false, false = false, true, false = true



//           true       false 
// console.log(x < 15 || y < 15);



// ternary operator = if 

// condition ? (code here if true) : (code here if false)



// // CRUD

// var userInput = document.getElementById('userInput')
// var searchInput = document.getElementById('searchInput')
// // var listContent = 

// var allList = []

// if (localStorage.getItem('todoList') != null ){
//     allList = JSON.parse(localStorage.getItem('todoList'))
//     console.log(allList);
//     displayList()
// }


// // Create 
// function addItem() {
//     var list = {
//         name : userInput.value
//     }
//     allList.push(list)
//     clearInput()
//     displayList()
//     localStorage.setItem('todoList', JSON.stringify(allList))
//     console.log(allList);
// }


// // for clear user input
// function clearInput() {
//     userInput.value = ''
// }


// // Display 
// function displayList() {
//     var container = ''
//     for( var i = 0 ; i < allList.length ; i++) {
//         container += `<div class="home-item mb-2 p-3 rounded-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
//                  <p id="x" class="mb-0">${allList[i].name}</p>
//                 <i class=" fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})" "></i>
//             </div>`
//     }
//     document.getElementById('homeContent').innerHTML = container
// }


// // Delete 
// function deleteItem(deleteIndex) {
//     // remove
//     allList.splice(deleteIndex,1) 
//     console.log(allList);
//     localStorage.setItem('todoList', JSON.stringify(allList))
//     displayList()
// }




// Search 
// function searchItem() {
//     var searchText = searchInput.value
//     var container = ''
//     for( var i = 0 ; i < allList.length ; i++) {
//         if(allList[i].name.toLowerCase().includes(searchText.toLowerCase())) {
//             container += `<div class="home-item mb-2 p-3 rounded-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
//                  <p id="x" class="mb-0">${allList[i].name}</p>
//                 <i class=" fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})" "></i>
//             </div>`
//     }
//         }
//     document.getElementById('homeContent').innerHTML = container
// }



// Problem 1

// [1, 2, 3, 4, 5, 6, 7]
// [8, 6, 33, 100]
// [2, 55, 60, 97, 86]

// var myArr = [8, 6, 33, 100]


// function boom(array) {
//     console.log(array.join('').includes(7));
//    return array.join('').includes(7) ? "Boom! ✔" : "there is no 7 in the array"
// }

// // boom(myArr) --> "Boom! ✔"  or "there is no 7 in the array"
// console.log(boom(myArr));





// Problem 2
// ["1a", "a", "2b", "b"]
// ["abc", "abc10"]
// ["abc", "ab10c", "a10bc", "bcd"]
// ["this is a test", "test1"]

// var myArr = ["this is a test", "test1"]

// function checkNum(arr) {
//     var newArr = []
//     for( var i = 0 ; i < arr.length ; i++ ) {
//         // console.log(arr[i]);
//         for (var k = 0 ; k < arr[i].length ; k++) {
//             if (arr[i][k] >= 0 && arr[i][k] <= 9 && arr[i][k] !== " "  ) {
//                 newArr.push(arr[i])
//                 console.log(newArr);
//                 break
//             }
//         }
//     }
// }


// checkNum(myArr)



// Problem 3

function sum(x,y) {
    // return x + y
    console.log(arguments);
    if (arguments.length == 2  ) {
        return x + y 
    } else {
        return function(y) {
            return x + y
        }
    }
}
// sum()function(y) --> x + y 



console.log(sum(2,3));
console.log(sum(2)(3));