define (['ng/page/expander/main','sui'], function (expander, sui) {
expander.controller('ctrl', ['$scope', function ($scope) {
    $scope.text = '隐藏的内容';
    $scope.title = '模块A';
    $scope.titleObj = {
        name: '模块A-obj'
    }
    $scope.$on('emitEve', function (e, title) {
        console.log('这里是外层controller:' + title + '被点击');
    })
    TM.on('emitEve', function (title) {
        console.log('这里是外层controller:' + title + '被点击');
    })
    $scope.openModal = function (modal) {
        $(modal).modal('show');
    }
    
}])

})
