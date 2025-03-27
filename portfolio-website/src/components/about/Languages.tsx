import { FC } from 'react'
import { Paragraph, SectionHeader } from '../typography'
import { LanguageListProps } from '../props'
import { Card, Tabs } from '@chakra-ui/react'

export const Languages: FC<LanguageListProps> = ({ languages }) => {
  return (
    <Tabs.Root defaultValue={languages[0].name} variant={'line'}>
      <Tabs.List aria-label="view languages">
        {languages.map((language, index) => (
          <Tabs.Trigger key={index} value={language.name} p={4}>
            <SectionHeader>{language.name}</SectionHeader>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {languages.map((language, index) => (
        <Tabs.Content key={index} value={language.name} mt={2}>
          <Card.Root size={'sm'} variant={'outline'} p={2}>
            <Paragraph>{language.descriptionInLanguage}</Paragraph>
            <Paragraph>{language.descriptionInEnglish}</Paragraph>
          </Card.Root>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
