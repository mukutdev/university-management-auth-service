import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoutes } from '../modules/academic-semester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academic-faculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academic-department/academicDepartment.route';
import { StudentRoutes } from '../modules/student/student.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { AdminRoutes } from '../modules/admin/admin.route';
const router = express.Router();

//api end-point

const moduleRoutes = [
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
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/users/',
    route: UserRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
