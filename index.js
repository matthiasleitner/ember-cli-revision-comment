/* jshint node: true */
'use strict';

require('shelljs/global');
var info = require('git-repo-info')();
var revisionComment;

revisionComment = function() {
	return '<!--\n' + info.sha + '\n-->';
}

module.exports = {
  name: 'ember-cli-revision-comment',

  contentFor: function(type, config) {
    if(config.environment === 'production' || type !== 'body-footer') {
      return;
    }

    return revisionComment();
  }
};