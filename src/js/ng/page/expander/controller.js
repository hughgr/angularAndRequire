define (['ng/page/expander/main'], function (expander) {
expander.controller('ctrl',function($scope){
    $scope.text = '隐藏的内容';
    $scope.title = '模块A';
    $scope.$on('emitEve', function (e, title) {
        console.log('这里是外层controller:' + title + '被点击');
    })
    TM.on('emitEve', function (title) {
        console.log('这里是外层controller:' + title + '被点击');
    })
})

})
