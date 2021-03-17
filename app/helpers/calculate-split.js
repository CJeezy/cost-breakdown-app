import { helper } from "@ember/component/helper"

function split([costs]){
  let totalCost = 0

  costs.forEach(person => {
    if(!isNaN(parseFloat(person.amountPaid))){
      totalCost += parseFloat(person.amountPaid)
    }
  });
  return (totalCost/costs.length)
}
export default helper(split)


//If amount person paid > averageCost, that person is owed the difference
