export interface Project {
  title: string
  type: string
  description: string
  action: string
  url: string
  img: {
    src: string
  }
}

export interface ProjectProps {
  projectData: Project
}
