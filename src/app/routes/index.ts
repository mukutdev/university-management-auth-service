import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoutes } from '../modules/academic-semester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academic-faculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academic-department/academicDepartment.route';
import { StudentRoutes } from '../modules/student/student.route';
const router = express.Router();

//api end-point

const moduleRoutes = [
  {
    path: '/users/',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters/',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculty/',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-department/',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/students/',
    route: StudentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
