
// function FavoriteSubject ( Person, topic) {
//  let subject =  Person + `${"'s"} favorite subject in school is ` + topic
//  return subject;

// }
// console.log(FavoriteSubject('Anushka', 'art'));


// function tipAmount ( bill, service) {
//     if(service == 'good'){
//         let tip = .20 * bill 
//         return tip
//     }
//     else if(service == 'fair'){
//         let tip = .15 * bill
//         return tip
//     }
//     else if(service == 'bad'){
//          let tip = .10 * bill
//          return tip
//     }
// }
// console.log(tipAmount(40,'fair'))


// function splitAmount ( bill, service) {
//        if (service == 'good'){
//         let tip = .20 * bill 
//         return tip + bill

//        }

//        else if (service == 'fair'){
//          let tip = .15 * bill
//         return tip + bill
//        }
       
  
// } 
//    console.log(splitAmount(40,'fair'))



function splitAmount ( bill, service, numberofPeople){
        if (service == 'good'){
         let tip = .20 * bill
         let total = bill + tip
         return total / numberofPeople
    }
        else if (service == 'fair'){
            let tip = .15 * bill
             let total = bill + tip
            return total / numberofPeople
        }
        
}
      console.log(splitAmount(100, 'good', 5))
     


      