
function term(month){
    if(month == 2 || month == 3 ||month ==  4 ){
        return 1
      }else if(month == 5||month == 6){
        return 2
    }else if(month == 7||month == 8||month == 9){
        return 3
      }else if(month == 10||month == 11||month == 12){
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