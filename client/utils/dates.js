
function term(month){
    if(month == 1 || month == 2 ||month ==  3 ){
        return 1
      }else if(month == 4||month == 5){
        return 2
    }else if(month == 6||month == 7||month == 8){
        return 3
      }else if(month == 9||month == 10||month == 11){
        return 4
      }else{
        return null
      }
}

function year(dateString){
  return parseInt(dateString)
}

module.exports = {
    term,
    year
}