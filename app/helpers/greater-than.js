import { helper } from '@ember/component/helper';

var greaterThan = ([cost1, cost2]) => {
  if (cost1 > cost2) return true
  else return false
}

export default helper(greaterThan)

