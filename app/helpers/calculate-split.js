import { helper } from "@ember/component/helper"

var calculateSplit = ([array]) => {
    let sum = array.reduce(function(prevVal, currVal){
      return{
        cost: prevVal.cost + currVal.cost
      }
    })
    return sum
}
 
export default helper(calculateSplit)