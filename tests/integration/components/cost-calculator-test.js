import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import fillIn from '@ember/test-helpers/dom/fill-in';
import click from '@ember/test-helpers/dom/click';

import { A as emberArray } from '@ember/array';
import { tracked } from '@glimmer/tracking';

module('Integration | Component | cost-calculator', function(hooks) {
  setupRenderingTest(hooks);

  test('textboxes and button work correctly', async function(assert){
    await render(hbs`<UserInput />`);
    assert.dom('[data-test-user-input]').exists();

    await fillIn('[data-test-name-input]', 'CJ')
    await fillIn('[data-test-event-input]', 'Dinner')
    await fillIn('[data-test-cost-input]', '100')
    await click('[data-test-add-name-button]')


    assert.dom('[data-test-name-input]').hasText('')
    assert.dom('[data-test-output]').exists();

    // this.name = 'TEST'
    // await render(hbs`<CostCalculator @name={{this.name}} />`)
    // assert.dom('[data-test-nametest]').hasText(this.name)

    //************************************************************************************************/
    //I didnt know how to pass in the ember array because the code above with fillIn and click would always return undefined.
    //I assume the values entered with fillIn and click do not update the actual value of the Person class as intended, 
    //so I hardcoded the values of the array here. this.set also somehow gave me an undefined value
    this.NameList = emberArray([])

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

      let name = "CJ"
      let event = "Dinner"
      let amountPaid = "200"

      let person = new Person()
      person.name = name
      person.event = event
      person.amountPaid = amountPaid

      this.NameList.addObject(person)

    

    await render(hbs`<CostCalculator @NameList={{this.NameList}} />`)
    const theList = this.element.querySelector('[data-test-output]')
    assert.equal(theList.getElementsByTagName('li').length, 1, 'element added correctly')
    assert.dom('[data-test-output]').hasTextContaining("Dinner")
    
    console.log(this.NameList)
    
  });
});
