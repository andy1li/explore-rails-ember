import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { findRecord } from '@ember-data/json-api/request';

export default class IndexRoute extends Route {
  @service store;

  async model(params) {
    const { content } = await this.store.request(
      findRecord('course', params.course_id),
    );
    return content.data;
  }
}
