(function () {
    angular
        .module("mrdb")
        .controller("CastController", CastController);

    function CastController(UserService, $routeParams, MovieApiService) {
        UserService
            .getCurrentUser()
            .then(function (response) {
                vm.currentUser = response.data;
            })

        var vm = this;
        vm.id = $routeParams.id;
        MovieApiService.findCastByID(vm.id,
            function (response) {
                response.movie_credits.cast.splice(8, response.movie_credits.cast.length - 8);
                vm.actor = response;
            })
    }
})();