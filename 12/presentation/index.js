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
  // eslint-disable global-require
  cap: require('../assets/cap.png'),
  otherCap: require('../assets/other-cap.png'),
  circle: require('../assets/circle.jpg'),
  database: require('../assets/database.png'),
  databaseSupport: require('../assets/DatabaseSupport.jpg'),
  manyToMany: require('../assets/many-to-many.png'),
  oneToMany: require('../assets/one-to-many.png'),
  map: require('../assets/map.png'),
  nosqlType: require('../assets/nosql-type.jpg'),
  nosqlMap: require('../assets/nosql-map.jpg'),
  sqls: require('../assets/sqls.png'),
  table: require('../assets/table.jpg'),
  mom: require('../assets/mom.png'),
  // eslint-enable global-require
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
              Week 12
            </Heading>
            <Text textSize="1.5em" lineHeight={1.3} margin="60px 0px 0px" bold textColor="white">
              More Database / Auth
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
                  Database
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  SQL
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Sequelize
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Auth
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          { /* =================================
            Database
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Database
            </Heading>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              DBMS
            </Heading>
            <Text textColor="primary">
              Database Manage System
            </Text>
            <Image src={images.database.replace('/', '')} style={{ width: '50%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Database 的發展已經有超過 50 年以上
            </Heading>
            <Text textColor="primary">
              比較詳細的可以看
              <Link
                href="https://speakerdeck.com/yunglin/nosql-da-chang-hua"
                target="_blank"
              >
                NoSQL 大腸花
              </Link>
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              經典款：RDBMS
            </Heading>
            <Text textColor="primary">
              Relational Database Management System，關聯式資料庫
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              主流的種類
            </Heading>
            <Image src={images.sqls.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              許多許多的優點
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  資料處理很穩健
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  會使用的人多，資源多易學
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  歷史悠久，長年效能優化
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  可使用 join 等功能，功能性強
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              有支援 Transaction 的 ACID 特性
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  原子性 (atomicity)：transaction 中的所有操作，要麼全部完成，要麼全部不完成。發生錯誤，會被 rollback
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  一致性 (consistency)：寫入的資料必須完全符合所有的預設規則，包含資料的精確度等等
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  隔離性 (isolation)：當兩個或者多個 transition 同時進行（查詢或修改）資料庫的同一數據時所表現出的相互關係
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  持久性 (durability)：對資料庫所作的改變持久地保存在資料庫之中
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Text textColor="primary" lineHeight={1.4}>
              但是...<br />
              即便長年下來 SQL 衍伸出很多<br />
              垂直分割、讀寫分離等等等技術<br />
              但遇到某些狀況還是不適合用 SQL 處理..<br />
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              CAP
            </Heading>
            <Image src={images.cap.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              有支援 Transaction 的 ACID 特性
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Consistency 一致性
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Availability 可用性
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Partition tolerance 分區容忍
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Wiki
            </Heading>
            <Text textColor="primary" lineHeight={1.4}>
              根據定理，分布式系統只能滿足三項中的兩項而不可能滿足全部三項。理解 CAP 理論的最簡單方式是想像兩個節點分處分區兩側。允許至少一個節點更新狀態會導致數據不一致，即喪失了 C 性質。如果為了保證數據一致性，將分區一側的節點設置為不可用，那麼又喪失了 A 性質。除非兩個節點可以互相通信，才能既保證 C 又保證 A，這又會導致喪失 P 性質。
            </Text>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Image src={images.otherCap.replace('/', '')} style={{ width: '90%' }} />
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Image src={images.circle.replace('/', '')} style={{ width: '75%' }} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              NoSQL (Not only SQL)
            </Heading>
            <Text textColor="primary" lineHeight={1.4}>
              非關係型、分散式、不提供 ACID 的資料庫設計模式
            </Text>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              主要分成
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Document
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Graph
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Key-Value
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Column
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Object
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Image src={images.nosqlType.replace('/', '')} style={{ width: '65%' }} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              NoSQL 世界地圖
            </Heading>
            <Image src={images.nosqlMap.replace('/', '')} style={{ width: '80%' }} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={6} lineHeight={2} textColor="white">
              每個功能模組適用的 database 可能都不一樣
            </Heading>
            <Image src={images.map.replace('/', '')} style={{ width: '95%' }} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
             資源：
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Mongodb:<Link href="https://university.mongodb.com/" target="_blank">Mongo University</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Redis:<Link href="http://try.redis.io/" target="_blank">Try Redis</Link>
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Neo4j:<Link href="http://console.neo4j.org/" target="_blank">Neo4j</Link>
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
             Relationship
            </Heading>
            <Image src={images.table.replace('/', '')} style={{ width: '75%' }} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
             One to Many
            </Heading>
            <Text textColor="primary">通常會有一個 foreign key 關聯到另一個表的 PK</Text>
            <Image src={images.oneToMany.replace('/', '')} style={{ width: '75%' }} />
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
             Many to Many
            </Heading>
            <Text textColor="primary">中間需要有 Pivot Table 記錄兩邊的 PK</Text>
            <Image src={images.manyToMany.replace('/', '')} style={{ width: '75%' }} />
          </BgSlide>


          { /* =================================
            Project
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Sequelize
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Migration
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  ORM (Object Relational Mapping)
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Use Sequelize
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  $ npm install -g sequelize-cli
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  $ npm install --save sequelize mysql
                </Text>
              </ListItem>
            </List>
          </BgSlide>
          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              <Link href="https://github.com/sequelize/cli" target="_blank">Migration</Link>
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  $ sequelize migration:create
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  $ sequelize db:migration
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  $ sequelize db:migration:undo
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          { /* =================================
            Auth
            ================================= */ }
          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Auth
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Authentication
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Authorization
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Authentication
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Users table
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Password Hash
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Cookie & Session
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Password Hash
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  密碼一定要加密
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  不要使用 md5, sha1 等等容易碰撞，而且有
                  <Link
                    href="http://project-rainbowcrack.com/table.htm"
                    target="_blank"
                  >
                    Rainbow Table
                  </Link>的演算法
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  不要使用可逆的加密
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  建議使用 Bcrypt、Script、PBKDF2 其中之一
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Cookie & Session
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Server 可以傳 Set-Cookie Response Header 給 Client
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Client 之後都會帶上 Cookie (by domain)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  Cookie 裡面可以只存一個 session_id 來辨識
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              Authorization
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  Token
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  JWT (JSON Web Token)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  OAuth 2
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={3} lineHeight={2} textColor="white">
              常見漏洞
            </Heading>
            <List>
              <ListItem>
                <Text textColor="primary">
                  XSS (Cross-Site Scripting)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  CSRF (Cross-Site Request Forgery)
                </Text>
              </ListItem>
              <ListItem>
                <Text textColor="primary">
                  SQL Injection
                </Text>
              </ListItem>
            </List>
          </BgSlide>

          <BgSlide transition={['slide']}>
            <Heading size={4} lineHeight={2} textColor="white">
              Injection
            </Heading>
            <Image src={images.mom.replace('/', '')} style={{ width: '100%' }} />
          </BgSlide>
        </Deck>
      </Spectacle>
    );
  }
}
