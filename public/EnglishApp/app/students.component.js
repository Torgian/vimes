System.register(['angular2/core', 'angular2/router', './student-detail.component', './student.service'], function(exports_1, context_1) {
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
    var core_1, router_1, student_detail_component_1, student_service_1;
    var StudentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (student_detail_component_1_1) {
                student_detail_component_1 = student_detail_component_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }],
        execute: function() {
            StudentsComponent = (function () {
                function StudentsComponent(_router, _studentService) {
                    this._router = _router;
                    this._studentService = _studentService;
                }
                StudentsComponent.prototype.getStudents = function () {
                    var _this = this;
                    this._studentService.getStudents().then(function (students) { return _this.students = students; });
                };
                StudentsComponent.prototype.ngOnInit = function () {
                    this.getStudents();
                };
                StudentsComponent.prototype.onSelect = function (student) { this.selectedStudent = student; };
                StudentsComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['StudentDetail', { id: this.selectedStudent.id }]);
                };
                StudentsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-students',
                        templateUrl: 'app/students.component.html',
                        styleUrls: ['app/students.component.css'],
                        directives: [
                            student_detail_component_1.StudentDetailComponent
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, student_service_1.StudentService])
                ], StudentsComponent);
                return StudentsComponent;
            }());
            exports_1("StudentsComponent", StudentsComponent);
        }
    }
});
//# sourceMappingURL=students.component.js.map