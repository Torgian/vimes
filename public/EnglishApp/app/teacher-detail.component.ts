import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Teacher} from './teacher';
import {TeacherService} from './teacher.service';

@Component({
	selector: 'my-teacher-detail',
	templateUrl:'app/teacher-detail.component.html',
})

export class TeacherDetailComponent implements OnInit {
	@Input() teacher: Teacher;
	
	
	constructor(
		private _teacherService: TeacherService,
		private _routeParams: RouteParams) {

		}

	ngOnInit() {
		let id =  +this._routeParams.get('id');
		this._teacherService.getTeacher(id)
			.then(teacher => this.teacher = teacher);
	}
	goBack() {
	window.history.back();
	}
}1