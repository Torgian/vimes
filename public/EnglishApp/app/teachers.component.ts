import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Teacher} from './teacher';
import {TeacherDetailComponent} from './teacher-detail.component';
import {TeacherService} from './teacher.service';






@Component({
	
	selector: 'my-teachers',
	templateUrl: 'app/teachers.component.html',
	styleUrls: ['app/teachers.component.css'],
	directives: [TeacherDetailComponent]
	
})




export class TeachersComponent implements OnInit {
	
	
	 teachers: Teacher[];
	selectedTeacher: Teacher;
	
	
	

	constructor(
		private _router: Router,
		private _teacherService: TeacherService) {}

	getTeachers() {
		this._teacherService.getTeachers().then(teachers => this.teachers = teachers);}

	
	



ngOnInit() {
		this.getTeachers();
	} 

onSelect(teacher: Teacher) {this.selectedTeacher = teacher; }





gotoDetail(){
	this._router.navigate(['TeacherDetail', {id: this.selectedTeacher.id}]);
}
}



