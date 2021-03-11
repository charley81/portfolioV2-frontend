import React from 'react'
import Title from './title'
import Project from '../components/project'
import { Link } from 'gatsby'

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center">
        {projects.map((project, index) => (
          <Project key={project.id} index={index} {...project} />
        ))}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          see more
        </Link>
      )}
    </section>
  )
}

export default Projects
