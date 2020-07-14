import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from '../Heading/heading.component';
import "./heroSection.styles.css"

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="container p-5 text-center background">
                <Heading title="furniture collection" textCase="text-uppercase" display="display-2" h1="h1" />
                <button type="button" className="btn btn-shop mt-5 text-uppercase">Shop Now</button>
            </div>
        </section>
    )
}
