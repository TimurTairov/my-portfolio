import React from 'react'
import { Container } from 'react-bootstrap'
import { projects } from '../helpers/projectsList'
import MyProject from '../components/MyProject'

const Projects = () => {
  return (
    <Container className="d-flex flex-wrap mt-3 justify-content-between align-items-betwwen">
      {projects.map((project, index) => {
        return (
          <MyProject
            key={project.id}
            tittle={project.tittle}
            text={project.description}
            skills={project.skills}
            index={index}
          />
        )
      })}
    </Container>
  )
}

export default Projects
