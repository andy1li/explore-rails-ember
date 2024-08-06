import { setupTest } from 'explore-ember/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | course', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('course', {});
    assert.ok(model, 'model exists');
  });
});
