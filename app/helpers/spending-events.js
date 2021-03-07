import { helper } from "@ember/component/helper"

var spendingEvents = ([event1, event2]) => {
    if (event1 === event2) return true
    else return false
}

export default helper(spendingEvents)