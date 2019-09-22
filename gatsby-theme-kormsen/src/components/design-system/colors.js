import React from 'react'
import { Box, Heading } from 'gatsby-theme-kormsen'
import { ColorPalette } from '@theme-ui/style-guide'

export default () => {
  return (
    <Box id="colors">
      <Heading>Colors</Heading>
      <ColorPalette omit={[]} />
    </Box>
  )
}
