import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./directory.styles.css"
import Department from '../department/department.component';

export default class Directory extends Component {
    render(){
        return (
            <section className="container directory">
                    <Department />
            </section>
        )
    }
}
