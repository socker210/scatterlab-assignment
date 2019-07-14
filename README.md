# Scatterlab-assignment

## 구현
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


## 필요 설치 패키지
### Global
[PM2](https://github.com/Unitech/pm2)
```
sudo npm install -g pm2
```

## 명령어
- dev
  - 개발을 진행하기 위해 개발용 서버 실행
- kill
  - PM2에서 실행되고 있는 client, api서버 제거
- fix
  - Linting
- test
  - Jest 실행
- test:watch
  - Jest watch 모드
- prod
  - production용 빌드 및 production 서버 실행