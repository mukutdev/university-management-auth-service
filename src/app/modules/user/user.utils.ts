import { IAcademicSemester } from '../academic-semester/academicSemester.interface';
import { User } from './user.schema';

export const findLastStudentId = async (): Promise<string | undefined> => {
  const lastUserId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastUserId?.id ? lastUserId.id.substring(4) : undefined;
};

export const generateStudentId = async (
  academicSemester: IAcademicSemester | null
): Promise<string | undefined> => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0');
  let lastId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  console.log('lastid', lastId);
  lastId = `${academicSemester.year.substring(2)}${
    academicSemester.code
  }${lastId}`;

  return lastId;
  // console.log(lastId)
};

export const findLastFacultyId = async (): Promise<string | undefined> => {
  const lastFacultyId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastFacultyId?.id;
};

export const generateFacultyId = async (): Promise<string | undefined> => {
  const currentId =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0');
  let lastId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  lastId = `F-${lastId}`;
  return lastId;
};

export const findLastAdminId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne({ role: 'admin' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const generateAdminId = async (): Promise<string> => {
  const currentId =
    (await findLastAdminId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `A-${incrementedId}`;

  return incrementedId;
};
