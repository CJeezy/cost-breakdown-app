import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A as emberArray } from '@ember/array';

export default class CostCalculatorComponent extends Component {
    @tracked addedNameList = emberArray([])
    @tracked currentAddedName = ''

    constructor(){
        super(...arguments)
    }

    @action
    UpdateCurrentName(nameInput){
        this.currentAddedName = nameInput.target.value
    }

    @action
    AddName(){
        this.addedNameList.addObject(this.currentAddedName)
        this.currentAddedName = ''
    }

    @action
    RemoveName(value){
        this.addedNameList.removeObject(value)
    }

}
