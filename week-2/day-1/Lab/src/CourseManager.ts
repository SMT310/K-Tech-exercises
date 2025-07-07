export interface ICourse {
  id: number;
  name: string;
  instructor: string;
  duration: number;
}

class CourseManager {
  private courses: ICourse[] = [];

  addCourse(name: string = 'Unknown', instructor: string = 'Unknown', duration: number = 10): void {
    const course: ICourse = {
      id: Date.now(),
      name,
      instructor,
      duration
    };
    this.courses.push(course);
    console.log(`Added course: ${name}`);
  }

  displayCourses(): void {
    if (this.courses.length === 0) {
      console.log('No course available');
      return;
    }
    this.courses.forEach((course, index) => {
      console.log(
        `${index + 1}. ID: ${course.id}; Name: ${course.name}; Instructor: ${course.instructor}; Duration: ${
          course.duration
        }`
      );
    });
  }

  updateCourse = (id: number, updates: Partial<ICourse>): boolean => {
    const course = this.courses.find((c) => c.id === id);
    if (!course) {
      console.log('Course not found.');
      return false;
    }
    Object.assign(course, updates);
    console.log(`Updated course with ID: ${id}`);
    return true;
  };

  deleteCourse(id: number): boolean {
    const maxLength = this.courses.length;
    this.courses = this.courses.filter((course) => course.id !== id);
    if (this.courses.length < maxLength) {
      console.log(`Deleted course with ID: ${id}`);
      return true;
    }
    console.log('Course not found.');
    return false;
  }

  getCourses(): ICourse[] {
    return [...this.courses];
  }
}

export default new CourseManager();
