import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A as emberArray } from '@ember/array';
import { sum } from '@ember/object/computed';

export default class CostCalculatorComponent extends Component {
    @tracked count = 0   
    @tracked NameList = emberArray([])
    @tracked sum = 0;
    
    constructor(){
        super(...arguments)
    }

    @action
    UpdateCurrentName(nameInput){
        this.currentAddedName = nameInput.target.value
    }

    @action
    UpdateCurrentCost(costInput){
        this.currentCost = costInput.target.value
    }
    
    @action
    UpdateCurrentEvent(eventInput){
        this.currentEvent = eventInput.target.value
    }


    @action
    AddName(){
        if(this.count !== 10){
            this.NameList.addObject({
                name: this.currentAddedName,
                event: this.currentEvent,
                cost: this.currentCost
            })

            this.count++
        }
        else return  
    }

    @action
    RemoveName(value){
        this.NameList.removeObject(value)
    }

    @action
    GetSum(){
        this.sum = this.NameList.reduce((a, {cost}) => +a + +cost, 0)
    }
}



