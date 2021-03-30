import { owed } from 'cost-breakdown-app/helpers/is-owed';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | amount-owed-test', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('see if the amount owed equals correct amount ', function(assert) {
    assert.equal(owed([100,70]), 30, "owed works")
  });
});
