import {Component, OnInit} from 'angular2/core';

import {Router} from 'angular2/router';
import {Student} from './student';

import {StudentDetailComponent} from './student-detail.component';

import {StudentService} from './student.service';





@Component({
	
	selector: 'my-students',
	templateUrl: 'app/students.component.html',
	styleUrls: ['app/students.component.css'],
	 directives: [
	 			
	 			StudentDetailComponent			
		],
	
})




export class StudentsComponent implements OnInit {
	
	
	 
	 students: Student[];
     
	 
	
	
	
	selectedStudent: Student;
	

	constructor(
		private _router: Router,
		private _studentService: StudentService) {}



	getStudents() {
		this._studentService.getStudents().then(students => this.students = students);
	}



ngOnInit() {
		
		this.getStudents();
	} 

onSelect(student: Student) {this.selectedStudent = student; }

gotoDetail() {
	this._router.navigate(['StudentDetail', {id: this.selectedStudent.id}]);
}

}







