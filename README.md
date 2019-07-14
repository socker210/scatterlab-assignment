# Scatterlab-assignment

## Scatterlab Aniamls 짧은 설명
**Scatterlab Animals**의 총 페이지는 3개이며 welcome 페이지, cat 페이지, dog 페이지로 구성되어 있습니다. 

- [Welcome 페이지](http://localhost:3000)
  - 간단하게 강아지와 고양이의 안내를 보여주기 위한 페이지입니다
- [Cat 페이지](http://localhost:3000/cat)
  - 고양이 리스트를 볼 수 있는 페이지입니다
- [Dog 페이지](http://localhost:3000/dog)
  - 강아지 리스트를 볼 수 있는 페이지입니다

**Header**는 Sticky한 스타일로 개발을 하여 하단으로 scrolling시 상단에 붙어있습니다. 또한 Header 우측에 cat & dog 페이지로 이동을 할 수 있는 키테고리 버튼을 두었고 만약 리스트 페이지로 이동을 할 경우 이동한 페이지의 버튼의 색이 변경되도록 개발을 하였습니다.

**각 동물의 리스트**를 보여주는 방식은 하단으로 scrolling시 데이터를 자동으로 불러오는 infinite scrolling 방식으로 구현을 하였습니다. (infinite scrolling기능은 외부 라이브러리를 사용하였습니다)

**Responsive design**은 PC & Mobile (768px)으로 나누어 디자인 하였습니다.


## 필요 설치 패키지
### Global
[PM2](https://github.com/Unitech/pm2)
```
sudo npm install -g pm2
```

## 명령어
- yarn run dev
  - 개발을 진행하기 위해 개발용 서버 실행
- yarn run kill
  - PM2에서 실행되고 있는 client, api서버 instance 제거
- yarn run fix
  - Linting
- yarn run test
  - Jest 실행
- yarn run test:watch
  - Jest watch 모드
- yarn run prod
  - production용 빌드 및 production 서버 실행


## 프로젝트 구조
- api/
  - API호출을 하기위해 API를 정의해 놓은 폴더
- components/
  - React component 폴더
- data/
  - JSON data 폴더
- layout/
  - 공통 Layout 폴더 (/cats & /dogs에서 공통으로 사용됨)
- pages/
  - Nextjs의 page 폴더
- server/
  - client & api 서버 폴더
- static/
  - static 폴더
- styles/
  - SCSS 폴더


## 개발
### Client
React + Nextjs를 사용하여 개발하였습니다

### Server
express.js를 사용하여 Nextjs를 사용하는데 필요한 client용 서버와 데이터를 request 하기위해 간단한 api용 서버를 개발하였습니다.

### Style
SCSS를 사용하여 개발하였습니다. Gulp 등을 사용해 Link태그를 이용하여 불러오는 방식이 아닌 Nextjs에서 제공하는 plugin인 next-sass를 사용하였습니다. vendor prefix같은 경우는 postcss의 plugin인 autoprefixer를 사용하였습니다. class 정의는 BEM을 따랐습니다. (설정은 package.json에 있습니다)

### Lint
Eslint + standard를 사용하였습니다.

### Management
PM2를 사용하여 Client와 API 서버의 instance를 관리하였습니다. package.json의 scripts에서 각각의 서버를 실행하기 위해 **dev,** **kill,** **prod**명령어를 작성하였습니다. (PM2  설정파일 - ecosystem.config.js)

### Test
Jest & Enzyme으로 단위테스트를 진행하였습니다. 보여주는 기능이 대부분이라 많은 테스트를 거치진 않았고 StickyHeader 컴포넌트만 테스트 스크립트를 작성하였습니다.


## API
- /cats
  - 고양이 데이터 호출
  - params
    - current: 현재 index
    - per: 데이터 갯수
- /dogs
  - 강아지 데이터 호출
  - params
    - current: 현재 index
    - per: 데이터 갯수


## Port번호
- client: 3000
- server: 3001


## 모바일에서 접속하기
현재 API서버가 localhost로 설정되어 있어 모바일기기에서 접속하려면 api/index.js의 **BASE_URL**부분을 서버 실행 IP로 변경을 해주어야 합니다.


## 외부 라이브러리
- [lodash](https://github.com/lodash/lodash)
  - Array & Object를 다루기 위해 사용
- [react-infinite-scroller](https://github.com/CassetteRocks/react-infinite-scroller)
  - Infinite scrolling 기능을 위해 사용
- [font-awesome](https://fontawesome.com/)
  - Icon을 사용하기 위해 사용