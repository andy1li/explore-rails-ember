import Application from '@ember/application';
import { setBuildURLConfig } from '@ember-data/request-utils';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'explore-ember/config/environment';
import 'explore-ember/app.css';

setBuildURLConfig({
  host: 'http://localhost:4201',
});

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
