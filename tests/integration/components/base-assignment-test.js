import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | base-assignment', function(hooks) {
  setupRenderingTest(hooks);

  test('does it render', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BaseAssignment />`);

    assert.dom('[data-test-base-assignment]').exists();
    
  });
});
