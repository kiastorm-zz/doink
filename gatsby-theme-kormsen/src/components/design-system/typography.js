/** @jsx jsx */
import { jsx, Styled, useThemeUI } from 'theme-ui'
import {
  TypeScale,
} from '@theme-ui/style-guide'
import {Heading} from '../atoms';

const Row = props => (
  <div
    {...props}
    sx={{
      display: 'flex',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      mx: -3,
      '& > div': {
        px: 3,
      },
    }}
  />
)

export default props => {
  const { theme } = useThemeUI()
  const { fonts, fontWeights, lineHeights } = theme

  return (

    <section id="typography">
      <Heading variant="h2">Typography</Heading>
      {fonts && (
        <div>
          <Heading variant="h3">Font Families</Heading>
          <Row>
            {Object.keys(fonts).map(name => (
              <div key={name}>
                <Heading fontFamily={name} mb={1}>
                  Aa
                </Heading>
                <Styled.code title={fonts[name]}>{name}</Styled.code>
              </div>
            ))}
          </Row>
        </div>
      )}
      <Heading variant="3">Font Sizes</Heading>
      <TypeScale />
      {fontWeights && (
        <div>
          <Heading variant="3">Font Weights</Heading>
          <Row>
            {Object.keys(fontWeights).map(name => (
              <div key={name}>
                <Heading fontSize={6} fontWeight={name}>
                  {fontWeights[name]}
                </Heading>
                <Styled.code>{name}</Styled.code>
              </div>
            ))}
          </Row>
        </div>
      )}
      {lineHeights && (
        <div>
          <Heading variant="3">Line Heights</Heading>
          <Row>
            {Object.keys(lineHeights).map(name => (
              <div key={name}>
                <Heading fontSize={6} lineHeight={name}>
                  {lineHeights[name]}
                </Heading>
                <Styled.code>{name}</Styled.code>
              </div>
            ))}
          </Row>
        </div>
      )}
    </section>
  )
}
