import EmberRouter from '@ember/routing/router';
import config from 'explore-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('catalog');
  this.route('course-overview', { path: '/courses/:course_id/overview' });
});
