import Model, { attr } from '@ember-data/model';

export default class CourseModel extends Model {
  @attr name;
  @attr description;
  @attr stagesCount;
  @attr iconSrc;
  @attr isBeta;
  @attr isFree;
}
