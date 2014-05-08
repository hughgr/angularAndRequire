define (['ng/page/expander/main'], function (expander) {
    expander.directive('expander', ['dateFilter', function (dateFilter) {
         console.log(dateFilter(new Date(),'M/d/yy h:mm:ss a'));
         return {
             restrict : 'EA',
             replace : true,
             transclude : true,
             scope : {
                 title : '=expanderTitle'
             },
             template : '<div>'
             + '<div class="title" ng-click="toggle()" ng-bind="title.name"></div>'
             + '<div class="body" ng-show="showMe" ng-transclude></div>'
             + '</div>',
             link: function(scope, element, attr, controller){
                 scope.showMe = false;
                 console.log(scope.title)
                 scope.toggle = function(){
                     scope.showMe = !scope.showMe;
                     /*scope.$emit('emitEve', scope.title);*/
                     
                     TM.trigger('emitEve', scope.title.name);
                 }
                 //scope.$on('emitEve', function (e, title) {
                 //console.log('这里是directive:' + title);
                 //})
                 TM.on('emitEve', function (title) {
                     console.log('这里是directiveA:' + title + '被点击');
                 })
             },
             controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
                 }]
         }
            
    }])
    expander.directive('expanderCp',['dateFilter', function (dateFilter) {
        return {
            restrict : 'EA',
            replace : true,
            transclude : true,
            scope : {
                title : '@expanderTitle'
            },
            template : '<div>'
            + '<div class="title" ng-click="toggle()" ng-bind="title"></div>'
            + '<div class="body" ng-show="showMe" ng-transclude></div>'
            + '</div>',
            link: function(scope, element, attr, controller){
                scope.showMe = false;
                scope.toggle = function(){
                    scope.showMe = !scope.showMe;
                    /*scope.$emit('emitEve', scope.title);*/
                    TM.trigger('emitEve', scope.title);
                }
                /*scope.$on('emitEve', function (e, title) {
                 console.log('这里是directive-cp:' + title);
             })*/
                TM.on('emitEve', function (title) {
                        console.log('这里是directiveB:' + title + '被点击');
                    })
            },
            controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
                }]
        }
    
    }])
    expander.directive('expanderE',['dateFilter', function (dateFilter) {
        return {
            restrict : 'EA',
            replace : true,
            transclude : true,
            scope : {
                title : '@expanderTitle'
            },
            template : '<div>'
            + '<div class="title" ng-click="toggle()" ng-bind="title"></div>'
            + '<div class="body" ng-show="showMe" ng-transclude></div>'
            + '</div>',
            link: function(scope, element, attr, controller){
                scope.showMe = false;
                scope.toggle = function(){
                    scope.showMe = !scope.showMe;
                    scope.$emit('emitEve', scope.title);
                }
                scope.$on('emitEve', function (e, title) {
                        console.log('这里是directiveA:' + title + '被点击');
                    })
            },
            controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
                }]
        }
    
    }])
    expander.directive('expanderECp',['dateFilter', function (dateFilter) {
        return {
            restrict : 'EA',
            replace : true,
            transclude : true,
            scope : {
                title : '@expanderTitle'
            },
            template : '<div>'
            + '<div class="title" ng-click="toggle()" ng-bind="title"></div>'
            + '<div class="body" ng-show="showMe" ng-transclude></div>'
            + '</div>',
            link: function(scope, element, attr, controller){
                scope.showMe = false;
                scope.toggle = function(){
                    scope.showMe = !scope.showMe;
                    scope.$emit('emitEve', scope.title);
                }
                scope.$on('emitEve', function (e, title) {
                        console.log('这里是directiveB:' + title + '被点击');
                    })
            },
            controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
                }]
        }
    
    }])

})
