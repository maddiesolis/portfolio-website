export interface ParentProps {
  children: React.ReactNode
}

export interface EducationProps {
  institution: string
  degree: string
  major: string
  startMonth: string
  startYear: string
  endMonth: string
  endYear: string
}

export interface EducationListProps {
  educations: EducationProps[]
}

export interface LanguageProps {
  name: string
  descriptionInLanguage: string
  descriptionInEnglish?: string
}

export interface LanguageListProps {
  languages: LanguageProps[]
}

export interface SkillProps {
  name: string
  url: string
}

export interface SkillListProps {
  skills: SkillProps[]
}

export interface AwardProps {
  title: string
  year: string
  url?: string
}

export interface AwardListProps {
  awards: AwardProps[]
}

export interface JobDateProps {
  startMonth: string
  startYear: string
  endMonth: string
  endYear: string
}

export interface JobProps {
  title: string
  company: string
  dates: JobDateProps[]
  brief: string
  technologies: string[]
  description: string[]
}

export interface ProjectProps {
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  websiteUrl?: string
  githubUrl?: string
  linkedInUrl?: string
}
