import React from "react";
import { Link } from "react-router-dom";

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
              <Link to={"/course/" + course.slug}>{course.title}</Link>
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
