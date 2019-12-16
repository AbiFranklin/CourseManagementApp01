import React from "react";

const CourseList = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Class Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => (
          <tr key={course.id}>
            <td>
              <a
                href={`https://app.pluralsight.com/library/courses/${course.slug}`}
                target="_blank"
              >
                {course.title}
              </a>
            </td>
            <td>Cory House</td>
            <td>{course.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;
