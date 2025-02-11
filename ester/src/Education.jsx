import React from 'react'

const Education = () => {
  return (
    <section className="education" id="education">
        <h2 className="title-education">Vzdělání</h2>
        <div className="container-education">
        <div className="education-box">
            <h3 className="degree">Získání titulu Bc. v oboru Technika a technologie v dopravě a
            spojích</h3>
            <p className="institution">Fakulta dopravní ČVUT v Praze</p>
            <p className="duration">2011 - 2014</p>
        </div>
        <h2 className="title-education">Certifikáty</h2>
        <div className="education-box">
            <h3 className="degree">JavaScript Frontend Developer</h3>
            <p className="institution">Coders Lab IT Academy</p>
            <p className="duration">20.4.2024 - 10.11.2024</p>
            <p className="description">HTML & CSS, Sass, Grid, RWD,
            JavaScript (ES6+), React</p>
        </div>
        </div>
    </section>
  )
}

export default Education