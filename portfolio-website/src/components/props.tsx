export interface ParentProps {
  children: React.ReactNode
}

export interface LinkProps {
  label: string
  url: string
}

export interface SidebarNavProps {
  links: LinkProps[]
  onClick?: () => void
}

export interface DrawerMenuProps {
  links: LinkProps[]
}

export interface ToCProps {
  links: ToCLinkProps[]
}

export interface KeywordsProps {
  keywords: string[]
}

interface ToCLinkProps {
  id: string
  label: string
}

export interface ContentPageContainerProps {
  title: string
  tableOfContentsLinks?: ToCLinkProps[]
  children: React.ReactNode
}

export interface ContentPageSectionContainerProps {
  title?: string
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
  imageSrc: string
  skillUrl: string
}

export interface SkillListProps {
  skills: SkillProps[]
}

export interface AchievementProps {
  title: string
  year: string
  url?: string
}

export interface AchievementListProps {
  achievements: AchievementProps[]
}

export interface JobDateProps {
  startMonth: string
  startYear: string
  endMonth: string
  endYear: string
  employmentType: string
}

export interface JobProps {
  title: string
  company: string
  companyUrl: string
  logo: string
  dates: JobDateProps[]
  brief: string
  technologies: string[]
  description: string[]
}

export interface JobListProps {
  jobs: JobProps[]
  resumeUrl?: string
}

export interface JobSectionProps {
  title: string
  children: React.ReactNode
}

export interface ProjectProps {
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  websiteUrl: string
  githubUrl?: string
  linkedInUrl?: string
  instagramUrl?: string
}

export interface SocialLinkProps {
  label: string | undefined
  url: string
  icon: React.ReactNode
  navigateWithHref?: boolean
}

export interface SocialLinksProps {
  links: SocialLinkProps[]
}
