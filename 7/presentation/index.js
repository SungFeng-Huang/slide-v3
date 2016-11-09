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
  bootstrap: require('../assets/bootstrap.png'), // eslint-disable-line global-require
  promise: require('../assets/promise.png'), // eslint-disable-line global-require
  jsonTrend: require('../assets/jsonTrend.png'), // eslint-disable-line global-require
  fetch: require('../assets/fetch.png'), // eslint-disable-line global-require
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
              Week 7
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="60px 0px 0px" bold textColor="white">
              UI framework / RESTful / Promise / fetch
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
                  UI framework
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  RESTful
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Promise
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  fetch
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          { /* =================================
            UI framework
            ================================= */ }
          <BgSlide>
            <Heading size={1} lineHeight={2} textColor="white">
              UI framework
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              UI framework
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  <Link href="http://getbootstrap.com/" target="_blank">Bootstrap</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="http://foundation.zurb.com/" target="_blank">Foundation</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="http://semantic-ui.com/" target="_blank">semantic UI</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="http://www.material-ui.com/" target="_blank">material UI</Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Bootstrap
            </Heading>
            <Image src={images.bootstrap.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Why bootstrap?
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Twitter maintain
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  most popular - 103k star &#9733; on github
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Overview
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  <Link href="http://getbootstrap.com/css/#grid" target="_blank">Grid system</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="http://getbootstrap.com/css/#responsive-utilities" target="_blank">Responsive utilities</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="http://getbootstrap.com/components/" target="_blank">Components</Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          { /* =================================
            RESTful
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              RESTful
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              REST
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  表徵性狀態傳輸 (Representational State Transfer)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  2000 年就由 Roy Fielding 在博士論文提出
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  但在 Rails 1.2 實作後才紅起來
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  是設計「風格」而不是標準
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              RESTful
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  符合 REST 設計風格的 Web API 稱為 RESTful API
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              RESTful
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  資源是由 URI 指定
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  對資源的操作包括獲取、創建、修改、刪除，剛好對應 GET、POST、PUT、DELETE
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  依照不同需求給予不同格式的回應
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  利用 Cache 增加性能
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  正確的 HTTP status code
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              資源是由 URI 指定
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              bad example
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/bad-api.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Why bad?
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  不統一，不好記憶
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  重寫會不一樣
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  get / post 無法看出來
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  參數如何傳遞？
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              RESTful
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/good-api.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Good part
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  不同人依舊會實作相同 API
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  清楚表示資源關係
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Stackoverflow example
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/stackoverflow-api.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              With params
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/api-params.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              CRUD
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              HTTP 動詞
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/CRUD.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Accept
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              利用 Accept 與 Server 溝通
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/accept.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Status Code
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              不同的 Status Code 區段
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  {'1xx -> 訊息'}
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  {'2xx -> 成功'}
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  {'3xx -> 重導向'}
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  {'4xx -> 用戶端錯誤'}
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  {'5xx -> 伺服器端錯誤'}
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              常見的 Status Code
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/status-code.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              幾點事項提醒
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  RESTful 是風格，不是規範
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  可以適當放寬設計
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  避免<Link href="https://vinta.ws/blog/695" target="_blank">工程師的鄙視鏈</Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          { /* =================================
            Promise
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Promise
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              先來感受一下差異
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/callback-hell.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              when using promise
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/promise.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              學習路徑
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  callback
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Promise
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  async, await
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Promise 好好學，寫 js 沒煩惱
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Promise 規範
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">ES6 Promise.js 標準</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="https://promisesaplus.com/" target="_blank">Promise A+: 只提供最簡化的 .then</Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Promise 是什麼？
            </Heading>
            <Image src={images.promise.replace('/', '')} style={{ width: '80%' }} />
            <Text textColor="primary">
              pending、fulfilled、rejected
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Promise 怎麼用？
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/create-promise.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Promise 狀態轉移
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/promise-status-transform.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Promise 狀態處理
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  讓 .then() 接受兩個 function
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  .then() .catch() 並行
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Promise.then()
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/promise-with-then.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Promise.then().catch()
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/promise-with-then-catch.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Promise 好處
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  goodbye callback hell
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  chaining
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  成功失敗後狀態不能再被轉換
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  可以使用 async await
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              More Promise
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  promise.all
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  promise.race
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all" target="_blank">Promise.all()</Link>
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/promise-all.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race" target="_blank">Promise.race()</Link>
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/promise-race.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Reference
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  <Link href="http://bevacqua.github.io/promisees/#" target="_blank">Promise playground</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="http://caniuse.com/#search=Promise" target="_blank">Can I use Promise</Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          { /* =================================
            fetch
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Fetch
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              講 Fetch 前需提到 AJAX
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  AJAX (Asynchronous JavaScript and XML)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  並非由瀏覽器自動進行 http request
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  是由 JS code 所觸發的行為
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              現在是 2016 年了，JSON 是主流
            </Heading>
            <Image src={images.jsonTrend.replace('/', '')} style={{ width: '100%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              幾個 JSON 的注意事項
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  空字串 ('') 不是 JSON
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  空字串內要有東西才是 ({'\'""\''}, {'\'{}\''}, {'\'null\''}, {'\'[]\''})
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  JSON.stringify 將 JSON 轉字串
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  JSON.parse 將 JSON 字串轉物件
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              以前是這樣寫 ajax
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/jquery-ajax.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              今年是幾年我就不說第二次了
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              XMLHttpRequest
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  在 IE7 (2006) 年就有的 API
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  命名有些問題
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  API 太過低階
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  不打算教這個
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              目前幾個不錯的 API
            </Heading>
            可以 run 在 browser、node、react native (ios, android)
            <List>
              <ListItem>
                <Text textColor="primary">
                  <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">fetch</Link> (會教這個）
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="https://github.com/visionmedia/superagent" target="_blank">superagent</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="https://github.com/mzabriskie/axios" target="_blank">axios</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  <Link href="https://github.com/sindresorhus/got" target="_blank">got</Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              fetch
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  WHATWG
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                   Web Hypertext Application Technology Working Group
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                   上述組織所訂定的標準
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              fetch 現代瀏覽器支援度
            </Heading>
            <Image src={images.fetch.replace('/', '')} style={{ width: '100%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              fetch 在各環境用法
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  瀏覽器原生 - <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank">window.fetch</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  fetch polyfill - <Link href="https://github.com/github/fetch" target="_blank">whatwg-fetch</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  on node - <Link href="https://github.com/bitinn/node-fetch" target="_blank">node-fetch</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  結合 browser & node - <Link href="https://github.com/matthew-andrews/isomorphic-fetch" target="_blank">isomorphic-fetch</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  React Native - <Link href="https://facebook.github.io/react-native/docs/network.html#fetch" target="_blank">內建支援 API</Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              注意環境需要有 Promise
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/promise-env.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              fetch 使用
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/fetch-then.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              拿回的 <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Response" target="_blank">response</Link> 物件用法
            </Heading>
            response.text() response.json() 都是回傳 promise
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/fetch-response.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              拿回的 <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Response" target="_blank">response</Link> 物件用法
            </Heading>
            response.text() response.json() 都是回傳 promise
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/fetch-res-json.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              利用 fetch 送 POST
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/fetch-post.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              第二個參數是一個 options 物件
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  method: 可以是 get(default), post, put, delete
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  headers: HTTP request header
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  body: JSON.stringify 轉成 JSON 字串
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link href="https://github.com/github/fetch#caveats" target="_blank">Caveats</Link>
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  status 4xx, 5xx 不會被 reject (jQuery.ajax() 會 fail)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  預設不會傳 cookie 到 server
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              自己 check http status
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/codes/fetch-check-status.example")}
              margin="0 20px 0"
              textSize="0.6em"
            />
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
