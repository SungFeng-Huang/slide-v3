import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Slide,
  Spectacle,
  Text,
  S,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
} from 'spectacle';


// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import BgSlide from './BgSlide';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  nosql: require('../assets/nosql-type.jpg'), // eslint-disable-line global-require

};

preloader(images);

const theme = createTheme({
  primary: 'white',
  secondary: 'white',
  tertiary: 'white',
  quartenary: 'white',
}, {
  primary: 'Open Sans Condensed',
  secondary: 'Open Sans Condensed',
  tertiary: 'Open Sans Condensed',
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500} textColor="white" progress="bar">
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Web Programming Seminar
            </Heading>
            <Heading size={5} fix textColor="white">
              Week 11
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="60px 0px 0px" bold textColor="white">
              Backend framework
            </Text>
          </BgSlide>
          { /* =================================
            Outline
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  MongoDB
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Mongoose
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Blog Demo
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              download
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  <Link href="https://github.com/web-seminar/blog-starter-skeleton" target="_blank">blog starter</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="https://robomongo.org/" target="_blank">Robomongo</Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          { /* =================================
            MongoDB
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              NoSQL DB
            </Heading>
            <Image src={images.nosql.replace('/', '')} style={{ width: '50%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              MongoDB
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  NoSQL DB
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  JSON like - BSON
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  2009年 / 2月
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Collection & Document
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Collection = Table
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Document = Record
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              <Link href="https://blog.gtwang.org/programming/getting-started-with-mongodb-shell-1/" target="_blank">MongoDB shell</Link>
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  $ mongo [DB name] // default 'test'
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  $ mongo news
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  $ use test
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  $ show dbs
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  $ show collections
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              MongoDB shell
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  $ use web-seminar-blog
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  $ db.articles.find(QUERY)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  $ db.articles.find(QUERY).pretty()
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  $ db.articles.insert(QUERY)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  $ db.articles.remove(QUERY)
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          { /* =================================
            Mongoose
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link href="http://mongoosejs.com/" target="_blank">Mongoose</Link>
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Mongoose
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  elegant mongodb object modeling for node.js
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  validation
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  casting
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Use Mongoose
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  $ npm install mongoose
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  $ yarn add mongoose
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link href="http://mongoosejs.com/docs/guide.html" target="_blank">Schema</Link>
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  String
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Number
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Date
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Buffer
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Boolean
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Mixed
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  ObjectId
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Array
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link href="http://mongoosejs.com/docs/models.html" target="_blank">Models - Create</Link>
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/model-create.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link href="http://mongoosejs.com/docs/models.html" target="_blank">Models - Update</Link>
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/model-update.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link href="http://mongoosejs.com/docs/models.html" target="_blank">Models - Delete</Link>
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/model-delete.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
