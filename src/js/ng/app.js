define([
    'angular',
    'ng/page/expander/main',
    'ng/page/expander/directive',
    'ng/page/expander/controller'
], function (angular) {

    $(function () {
        if ($('.J_expander')) {
            angular.bootstrap(document, ['expanderApp']);
        }
    })
})
