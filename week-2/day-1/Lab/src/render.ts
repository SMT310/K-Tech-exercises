import CourseManager, { ICourse } from './CourseManager';

const renderMenu = (): void => {
  console.log('\n=== Course Management System ===');
  console.log('1. Add new course');
  console.log('2. Display all courses');
  console.log('3. Update course');
  console.log('4. Delete course');
  console.log('5. Exit');
  console.log('==============================');
};

const getUserInput = (message: string): Promise<string> => {
  return new Promise((resolve) => {
    process.stdout.write(message);
    process.stdin.once('data', (data) => resolve(data.toString().trim()));
  });
};

const main = async (): Promise<void> => {
  const courseManager = CourseManager;
  while (true) {
    try {
      renderMenu();
      const choice = await getUserInput('Enter your choice (1-5): ');

      switch (choice) {
        case '1': {
          const name = (await getUserInput('Enter course name2 (press Enter for default): ')) || undefined;
          const instructor = (await getUserInput('Enter instructor (press Enter for default): ')) || undefined;
          const durationInput = await getUserInput('Enter duration (hours, press Enter for default): ');
          const duration = durationInput ? parseInt(durationInput) : undefined;
          courseManager.addCourse(name, instructor, duration);
          break;
        }
        case '2':
          courseManager.displayCourses();
          break;
        case '3': {
          const idUpdate = parseInt(await getUserInput('Enter course ID to update: '));
          const courseExists = courseManager.getCourses().find((c) => c.id === idUpdate);
          if (!courseExists) {
            console.log('Course not found. Returning to menu.');
            break;
          }
          const newNameInput = await getUserInput('Enter new name (press Enter to skip): ');
          const newName = newNameInput || undefined;
          const newInstructorInput = await getUserInput('Enter new instructor (press Enter to skip): ');
          const newInstructor = newInstructorInput || undefined;
          const newDurationInput = await getUserInput('Enter new duration (press Enter to skip): ');
          const newDuration = newDurationInput ? parseInt(newDurationInput) : undefined;

          const updates: Partial<ICourse> = {};
          if (newName !== undefined) updates.name = newName;
          if (newInstructor !== undefined) updates.instructor = newInstructor;
          if (newDuration !== undefined) updates.duration = newDuration;

          courseManager.updateCourse(idUpdate, updates);
          break;
        }
        case '4': {
          const idDelete = parseInt(await getUserInput('Enter course ID to delete: '));
          courseManager.deleteCourse(idDelete);
          break;
        }
        case '5':
          console.log('Exiting program...');
          process.exit(0);
        default:
          console.log('Invalid choice. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
};

export { renderMenu, main };
