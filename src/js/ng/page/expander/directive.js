define (['ng/page/expander/main'], function (expander) {
        expander.directive('expander',function(dateFilter){
                console.log(dateFilter(new Date(),'M/d/yy h:mm:ss a'));
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
            })
        expander.directive('expanderCp',function(dateFilter){
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
            })
        expander.directive('expanderE',function(dateFilter){
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
            })
        expander.directive('expanderECp',function(dateFilter){
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
            })

})
