import { FC } from 'react'
import { Label, Paragraph } from '../typography'
import { LanguageListProps } from '../props'
import { Card, HStack, Separator, Tabs } from '@chakra-ui/react'
import { ContentPageSectionContainer } from '../shared/ContentPageContainers'

export const Languages: FC<LanguageListProps> = ({ languages }) => {
  return (
    <ContentPageSectionContainer id="languages" title="Languages">
      <Tabs.Root data-label="languages-tabs" defaultValue={languages[0].name} variant={'outline'}>
        <Tabs.List aria-label="view languages">
          {languages.map((language, index) => (
            <Tabs.Trigger aria-label={`select ${language}`} key={index} value={language.name}>
              <Paragraph>{language.name}</Paragraph>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {languages.map((language, index) => (
          <Tabs.Content key={index} value={language.name}>
            <Card.Root size="sm" borderColor={'gray.400'}>
              <Card.Body>
                <Paragraph>{language.descriptionInLanguage}</Paragraph>
                {language.descriptionInEnglish && (
                  <>
                    <HStack my={{ base: 3, md: 3.5, lg: 4 }} color="gray.500">
                      <Separator flex={1} />
                      <Label flexShrink={0}>English translation</Label>
                      <Separator flex={1} />
                    </HStack>
                    <Paragraph>{language.descriptionInEnglish}</Paragraph>
                  </>
                )}
              </Card.Body>
            </Card.Root>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </ContentPageSectionContainer>
  )
}
