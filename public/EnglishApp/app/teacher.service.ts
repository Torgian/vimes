
import {Injectable} from 'angular2/core';
import {Teacher} from './teacher';
import {TEACHERS} from './mock-teachers';

@Injectable()
export class TeacherService {
	getTeachers() {
		return Promise.resolve(TEACHERS);
	}
	getTeacher(id: number) {
  return Promise.resolve(TEACHERS).then(
    teachers => teachers.filter(teacher => teacher.id === id)[0]
  );
}
}