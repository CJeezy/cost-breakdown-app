import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class CostCalculatorComponent extends Component {
    @tracked NameList = [];
    
    constructor(){
        super(...arguments);
        this.NameList = this.args.NameList;
    }

    @action
    RemoveName(value){
        this.NameList.removeObject(value)
    }

}



