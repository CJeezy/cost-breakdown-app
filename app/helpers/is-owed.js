import { helper } from '@ember/component/helper';

export function owed([cost1, cost2]) {
    let amountOwed = (parseFloat (cost1 - cost2).toFixed(2))
    return amountOwed
}

export default helper(owed); 