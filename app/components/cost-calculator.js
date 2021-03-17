import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A as emberArray } from '@ember/array';

class Person{
    @tracked name
    @tracked event
    @tracked amountPaid

    constructor(name, event, amountPaid){

        this.name = name
        this.event = event
        this.amountPaid = amountPaid
    }
}


export default class CostCalculatorComponent extends Component {
    @tracked count = 0   

    @tracked nameVal
    @tracked eventVal
    @tracked payVal
    
    @tracked NameList = emberArray([])

    constructor(){
        super(...arguments)
    }

    @action
    UpdateName(nameInput){
        this.currentAddedName = nameInput.target.value
    }

    @action
    UpdateCost(costInput){
        this.currentCost = costInput.target.value
    }
    
    @action
    UpdateEvent(eventInput){
        this.currentEvent = eventInput.target.value
    }

    @action
    AddName(){
        if(this.count !== 10){
            let name = this.currentAddedName
            let event = this.currentEvent
            let amountPaid = this.currentCost

            let person = new Person()

            person.name = name
            person.event = event
            person.amountPaid = amountPaid

            this.NameList.addObject(person)
            //console.log(this.NameList)

            this.nameVal = ''
            this.eventVal = ''
            this.payVal = ''
            
            this.count++
        }
        else return  
    }

    @action
    RemoveName(value){
        this.NameList.removeObject(value)
    }
}



