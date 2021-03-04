import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PersonCounterComponent extends Component {
    @tracked count = 0;

    @action
    increment(){
        let temp = this.count
        if(temp < 10) this.count++

        createForm()
    }
    @action
    decrement(){
        let temp = this.count
        if (temp !== 0) this.count--
    }

    createForm(){
        
    }
}
