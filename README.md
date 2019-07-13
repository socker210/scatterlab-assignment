지금 먼저 해결해야 할 것이 json어떻게 fetch하느냐임
**생각한 방법**
 - API용 서버를 하나 더 만들고 이것을 pm2에 추가하여 같이 쓰도록 하기
 - JSON 파일을 불러올 때 cat, dog용 object만들어서 각 object에 maxIndex와 그리고 각 동물 object에 index부여하기
 - 이것을 fetch할 때 클라이언트의 정해진 갯수로 fetch하도록 하기

현재 일단 API 만들고 기본 Next세팅 완료 함
이제 기본 Layout 잡고 개발하기
  - 주요기능
    - Sticky Header
      - scrolling fetch