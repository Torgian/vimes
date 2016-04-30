System.register(['angular2/core', 'angular2/router', './teacher-detail.component', './teacher.service'], function(exports_1, context_1) {
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
    var core_1, router_1, teacher_detail_component_1, teacher_service_1;
    var TeachersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (teacher_detail_component_1_1) {
                teacher_detail_component_1 = teacher_detail_component_1_1;
            },
            function (teacher_service_1_1) {
                teacher_service_1 = teacher_service_1_1;
            }],
        execute: function() {
            TeachersComponent = (function () {
                function TeachersComponent(_router, _teacherService) {
                    this._router = _router;
                    this._teacherService = _teacherService;
                }
                TeachersComponent.prototype.getTeachers = function () {
                    var _this = this;
                    this._teacherService.getTeachers().then(function (teachers) { return _this.teachers = teachers; });
                };
                TeachersComponent.prototype.ngOnInit = function () {
                    this.getTeachers();
                };
                TeachersComponent.prototype.onSelect = function (teacher) { this.selectedTeacher = teacher; };
                TeachersComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['TeacherDetail', { id: this.selectedTeacher.id }]);
                };
                TeachersComponent = __decorate([
                    core_1.Component({
                        selector: 'my-teachers',
                        templateUrl: 'app/teachers.component.html',
                        styleUrls: ['app/teachers.component.css'],
                        directives: [teacher_detail_component_1.TeacherDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, teacher_service_1.TeacherService])
                ], TeachersComponent);
                return TeachersComponent;
            }());
            exports_1("TeachersComponent", TeachersComponent);
        }
    }
});
//# sourceMappingURL=teachers.component.js.map