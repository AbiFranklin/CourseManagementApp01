import React, { Component } from 'react';
import { getCourses } from "../api/courseApi";
import { getAuthors } from '../api/authorApi'

class CoursesPage extends Component {
    state = {
        courses: [],
        authors: [],
        loading: true
    };

    componentDidMount() {
        getCourses()
            .then(courses => this.setState({ courses: courses }))
        getAuthors()
            .then(authors => this.setState({ authors: authors }))
            .then(this.setState({ loading: false }))
    }

    render() {
        const { courses } = this.state;
        if (this.state.loading) return <h2>Loading...</h2>
        return (
            <>
                <h2>Courses</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Class Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course.id}>
                                <td><a href={`https://app.pluralsight.com/library/courses/${course.slug}`} target="_blank">{course.title}</a></td>
                                <td>Cory House</td>
                                <td>{course.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}

export default CoursesPage;