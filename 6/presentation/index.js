import React from "react";

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
  TableItem
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import BgSlide from "./BgSlide";
import MyListItem from "./MyListItem";
// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  lifecycle: require("../assets/lifecycle.png"),
  bg2: require("../assets/bg2.png"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "white",
  tertiary: "white",
  quartenary: "white"
}, {
  primary: "Open Sans Condensed",
  secondary: "Open Sans Condensed",
  tertiary: "Open Sans Condensed"

});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} textColor="white" progress="bar">
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Web Programming Seminar
            </Heading>
            <Heading size={5} fix textColor="white">
              Week 6: More on React
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="120px 0px 0px" bold textColor="white">
              Lifecycle Hook / Key / inline style and className
            </Text>
          </BgSlide>

          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Outline
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Key
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Lifecycle Hook
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  inline style and className
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          {/*

          Key

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Key
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              Provide keys to components makes React render faster
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Add key
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/add-key.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              Key should be...
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  unique among siblings
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  stable for same data
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Text textColor="primary">
              <a href="https://facebook.github.io/react/docs/lists-and-keys.html">Lists and Keys</a>
            </Text>
          </BgSlide>


          {/*

          Lifecycle Hook

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Lifecycle Hook
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Mounting
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Updating
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Unmounting
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              Don't use these methods before you're familiar with them.
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Image src={images.lifecycle.replace("/", "")} style={{ width: '90%' }} />
            <Text textColor="primary">
              <a href="https://facebook.github.io/react/docs/state-and-lifecycle.html">State and Lifecycle</a>
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              Mounting
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              componentWillMount
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/componentWillMount.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              componentDidMount
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/componentDidMount.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              Updating
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              componentWillReceiveProps
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/componentWillReceiveProps.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              shouldComponentUpdate
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/shouldComponentUpdate.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              componentWillUpdate
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/componentWillUpdate.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              componentDidUpdate
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/componentDidUpdate.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={5} lineHeight={2} textColor="white">
              Unmounting
            </Heading>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              componentWillUnmount
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/componentWillUnmount.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>


          {/*

          Inline style and className

         */}
          <BgSlide transition={["slide"]}>
            <Heading size={3} lineHeight={2} textColor="white">
              Inline style and className
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  inline style
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  className
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              <a href="https://speakerdeck.com/vjeux/react-css-in-js">inline style</a>
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/inline-style.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
            <Text textColor="primary">
              Also used in React-Native development
            </Text>
          </BgSlide>
          <BgSlide transition={["slide"]}>
            <Heading size={4} lineHeight={2} textColor="white">
              className (correspond to 'class' of HTML)
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/className.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>

        </Deck>
      </Spectacle>
    );
  }
}
