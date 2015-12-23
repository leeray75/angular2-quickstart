System.register(['angular2/core', 'angular2/platform/browser', 'angular2/common', 'services/friends.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, common_1, friends_service_1;
    var DisplayComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (friends_service_1_1) {
                friends_service_1 = friends_service_1_1;
            }],
        execute: function() {
            DisplayComponent = (function () {
                function DisplayComponent(friendsService) {
                    this.myName = "Alice";
                    this.names = friendsService.names;
                }
                DisplayComponent = __decorate([
                    core_1.Component({
                        selector: 'display',
                        bindings: [friends_service_1.FriendsService]
                    }),
                    core_1.View({
                        templateUrl: "templates/show-properties.html",
                        directives: [common_1.NgFor, common_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof friends_service_1.FriendsService !== 'undefined' && friends_service_1.FriendsService) === 'function' && _a) || Object])
                ], DisplayComponent);
                return DisplayComponent;
                var _a;
            })();
            exports_1("DisplayComponent", DisplayComponent);
            browser_1.bootstrap(DisplayComponent);
        }
    }
});
//# sourceMappingURL=show-properties.js.map