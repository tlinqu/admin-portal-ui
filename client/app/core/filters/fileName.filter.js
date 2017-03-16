(function () {

    'use strict';

    angular
        .module('app.core')
        .filter('fileName', fileNameFilter);

    /* @ngInject */
    function fileNameFilter() {
        return function (fileName) {
            var parts = fileName.split(".");
            var fileNameWithoutExtension = parts[0];
            return fileNameWithoutExtension;

        };
    }
})();
