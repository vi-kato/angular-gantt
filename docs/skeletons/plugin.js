'use strict';
angular.module('gantt.xxxxxx', ['gantt', 'gantt.xxxxxx.templates']).directive('ganttTooltips', ['$compile', function($compile) {
    return {
        restrict: 'E',
        require: '^gantt',
        scope: {
            enabled: '=?'
            // Add other option attributes for this plugin
        },
        link: function(scope, element, attrs, ganttCtrl) {
            var api = ganttCtrl.gantt.api;

            // Load options from global options attribute.
            if (scope.options && typeof(scope.options.xxxxxx) === 'object') {
                for (var option in scope.options.xxxxxx) {
                    scope[option] = scope.options[option];
                }
            }

            if (scope.enabled === undefined) {
                scope.enabled = true;
            }

            api.directives.on.new(scope, function(directiveName, directiveScope, directiveElement) {
                // Write Template Hooks here...
            });
        }
    };
}]);
