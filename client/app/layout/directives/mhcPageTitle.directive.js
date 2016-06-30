(function () {
    'use strict';

    angular
        .module('app.layout')
            .directive('mhcPageTitle', mhcPageTitle);

            /* @ngInject */
            function mhcPageTitle($rootScope, $timeout, brand) {
                var directive =  {
                    link:linkFunc
                };

                return directive;

                /* @ngInject */
                function linkFunc(scope, element) {
                    var listener = function (event, toState, toParams, fromState, fromParams) {
                        // Default title - load on Dashboard 1
                        var title = 'MHC-Admin | Login';
                        // Create your own title pattern
                        if (toState.data && toState.data.pageTitle) {
                            title = brand.getBrandInitials() + ' | ' + toState.data.pageTitle;
                        }
                        $timeout(function () {
                            element.text(title);
                        });
                    };
                    $rootScope.$on('$stateChangeStart', listener);
                }
            }

})();