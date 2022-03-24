export interface IProject {
  title: string
  type: string
  description: string
  action: string
  url: string
  img: {
    src: string
  }
}

export interface IProjectProps {
  projectData: IProject
}
