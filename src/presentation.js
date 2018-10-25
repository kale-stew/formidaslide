import React, { Component } from 'react';
import './fonts.css';

// spectacle-core tags
import { Deck, Image, Notes, Slide, Heading } from 'spectacle';

// theme
import createTheme from 'spectacle/lib/themes/default';
const theme = createTheme(
  {
    black: '#111111',
    darkRed: '#7D1513',
    medRed: '#CC2936',
    offwhite: '#EFEFEF',
    primary: '#EFEFEF'
  },
  {
    primary: 'Fira Sans',
    secondary: 'Space Mono'
  }
);

// image assets
const images = {
  FormidaLogo: require('./assets/Formidable_White.svg'),
  Twitter: require('./assets/twitter.png')
};

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['fade']} theme={theme} progress="none">
        <Slide bgColor="black">
          <Image src={images.FormidaLogo} height="500px" />
          <div style={{ display: 'flex' }}>
            <Heading textColor="offwhite" size={5} textFont="Fira Sans">
              @FormidableLabs on
            </Heading>
            <Image
              style={{ marginLeft: '-165' }}
              src={images.Twitter}
              height="45px"
            />
          </div>
          <Notes>
            {
              'Formidable is a Seattle and London-based engineering consultancy and open source software organization specializing in React.js, React Native, GraphQL, Node.js, and the extended JavaScript ecosystem.'
            }
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
