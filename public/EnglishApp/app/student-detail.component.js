System.register(['angular2/core', 'angular2/router', './student.service', './student'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, student_service_1, student_1;
    var StudentDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            },
            function (student_1_1) {
                student_1 = student_1_1;
            }],
        execute: function() {
            StudentDetailComponent = (function () {
                function StudentDetailComponent(_studentService, _routeParams) {
                    this._studentService = _studentService;
                    this._routeParams = _routeParams;
                }
                StudentDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._studentService.getStudent(id)
                        .then(function (student) { return _this.student = student; });
                };
                StudentDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', student_1.Student)
                ], StudentDetailComponent.prototype, "student", void 0);
                StudentDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-student-detail',
                        templateUrl: 'app/student-detail.component.html',
                    }), 
                    __metadata('design:paramtypes', [student_service_1.StudentService, router_1.RouteParams])
                ], StudentDetailComponent);
                return StudentDetailComponent;
            }());
            exports_1("StudentDetailComponent", StudentDetailComponent);
        }
    }
});
//# sourceMappingURL=student-detail.component.js.map