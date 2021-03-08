import { helper } from '@ember/component/helper';

function owed([cost1, cost2]) {
    return (parseFloat (cost1 - cost2).toFixed(2))
}

export default helper(owed); 