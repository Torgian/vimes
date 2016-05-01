import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Teacher} from './teacher';
import {TeacherService} from './teacher.service';
import {Student} from './student';
import {StudentService} from './student.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
})

export class DashboardComponent implements OnInit
 {
 	teachers: Teacher[] = [];
 	students: Student[] = [];

 	constructor(
 		private _router: Router,
 		private _teacherService: TeacherService,
 		private _studentService: StudentService){
 		
 		}

 	ngOnInit() {
 		this._teacherService.getTeachers()
 			.then(teachers => this.teachers = teachers.slice(1,3));
 		this._studentService.getStudents()
 			.then(students => this.students = students.slice(1,3));
 	}

 	gotoDetail(teacher: Teacher){
 		let link = ['TeacherDetail', {id: teacher.id}];
 		this._router.navigate(link);
 	}

 }