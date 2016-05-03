import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {TeacherService} from './teacher.service';
import {StudentService} from './student.service';
import {TeachersComponent} from './teachers.component';
import {StudentsComponent} from './students.component';
import {TeacherDetailComponent} from './teacher-detail.component';
import {StudentDetailComponent} from './student-detail.component';

@Component({
	selector: 'my-app',
	template:`
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['Dashboard']">Dashboard</a>
			<a [routerLink]="['Teachers']">Teachers</a>
			<a [routerLink]="['Students']">Students</a>
		</nav>
		<router-outlet></router-outlet>
		
		`,


directives: [ROUTER_DIRECTIVES],
providers: [
	ROUTER_PROVIDERS,
	TeacherService,
	StudentService
	]
})
@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/detail/:id',
		name: 'TeacherDetail',
		component: TeacherDetailComponent
	},
	
	{
		path: '/teachers',
		name: 'Teachers',
		component: TeachersComponent

	},
	{
		path: '/students',
		name: 'Students',
		component: StudentsComponent
	},
])
export class AppComponent {
	title = 'English App';
}