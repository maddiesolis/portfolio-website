import { FC } from 'react'
import { Label, Paragraph } from '../typography'
import { LanguageListProps } from '../props'
import { Card, HStack, Separator, Tabs } from '@chakra-ui/react'
import { ContentPageSectionContainer } from '../shared/ContentPageContainers'
import { sizing } from '../../globalVariables'

export const Languages: FC<LanguageListProps> = ({ languages }) => {
  return (
    <ContentPageSectionContainer title="Languages">
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
            {/* Todo: global Card component */}
            <Card.Root size="sm" bg="none" borderColor={'border.light.default'}>
              <Card.Body>
                <Paragraph>{language.descriptionInLanguage}</Paragraph>
                {language.descriptionInLanguageOtherScript && (
                  <>
                    <br />
                    <Paragraph>{language.descriptionInLanguageOtherScript}</Paragraph>
                  </>
                )}

                {language.descriptionInEnglish && (
                  <>
                    <HStack my={sizing.margin.xsmall}>
                      <Separator flex={1} borderColor={'separator.default'} />
                      <Label flexShrink={0} color={'text.subtle.default'}>
                        English translation
                      </Label>
                      <Separator flex={1} borderColor={'separator.default'} />
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
