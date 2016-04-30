import {Component, OnInit, Input} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { StudentService } from './student.service';
import {Student} from './student';

@Component({
	selector: 'my-student-detail',
	templateUrl:'app/student-detail.component.html',
})
export class StudentDetailComponent implements OnInit {
	@Input() student: Student;

	constructor(
		private _studentService: StudentService,
		private _routeParams: RouteParams){}

	ngOnInit() {
		let id =  +this._routeParams.get('id');
		this._studentService.getStudent(id)
			.then(student => this.student = student);
	}
	goBack() {
	window.history.back();
	}
}