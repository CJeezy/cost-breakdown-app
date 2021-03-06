import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PersonCounterComponent extends Component {
    @tracked count = 0;
    @tracked personArray = []

    @action
    increment(){
        let temp = this.count
        if(temp < 10) this.count++

        this.personArray.length++
    
    }

    @action
    decrement(){
        let temp = this.count
        if (temp !== 0) this.count--

        this.personArray.length--
    }
}
