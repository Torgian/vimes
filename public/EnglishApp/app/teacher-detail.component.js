System.register(['angular2/core', './teacher'], function(exports_1, context_1) {
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
    var core_1, teacher_1;
    var TeacherDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (teacher_1_1) {
                teacher_1 = teacher_1_1;
            }],
        execute: function() {
            TeacherDetailComponent = (function () {
                function TeacherDetailComponent() {
                }
                TeacherDetailComponent.prototype.contructor = function (_teacherService, _routeParams) {
                };
                TeacherDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._teacherService.getTeacher(id)
                        .then(function (teacher) { return _this.teacher = teacher; });
                };
                TeacherDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', teacher_1.Teacher)
                ], TeacherDetailComponent.prototype, "teacher", void 0);
                TeacherDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-teacher-detail',
                        templateUrl: 'app/teacher-detail.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], TeacherDetailComponent);
                return TeacherDetailComponent;
            }());
            exports_1("TeacherDetailComponent", TeacherDetailComponent);
        }
    }
});
//# sourceMappingURL=teacher-detail.component.js.map