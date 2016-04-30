import {Injectable} from 'angular2/core';
import {Student} from './student';
import {STUDENTS} from './mock-students';

@Injectable()
export class StudentService {
	getStudents() {
		return Promise.resolve(STUDENTS);
	}
	getStudent(id: number) {
  return Promise.resolve(STUDENTS).then(
    students => students.filter(students => students.id === id)[0]
  );
}
}