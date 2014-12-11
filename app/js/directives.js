'use strict';

/* Directives */


angular.module('clolset.directives', []).
directive('autocomplete', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<input name="autocomplete" type="text"/>',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.list, function(value) {
                element.autocomplete({
                    source: value,
                    minLength: 2,
                    select: function(event, ui) {
                        scope[attrs.selection] = ui.item.value;
                        scope.$apply();
                    }
                });
            });
        }
    }
});