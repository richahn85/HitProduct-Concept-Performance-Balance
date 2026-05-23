# 배포 안내

이 폴더는 바로 업로드할 수 있는 정적 웹사이트 배포본입니다.

## 포함된 것

- `index.html`: 메인 페이지
- `styles.css`, `app.js`: 화면과 동작
- `assets/manifest.js`: 이미지 목록
- `stickers/`: 웹에서 표시되는 PNG 이미지
- `downloads/`: 모음별 ZIP과 전체 ZIP
- `.nojekyll`: GitHub Pages에서 정적 파일을 그대로 서빙하기 위한 파일

## 추천 배포

전체 ZIP 파일이 100MB를 조금 넘기 때문에 GitHub Pages에는 업로드가 막힐 수 있습니다.
Netlify, Vercel, 일반 웹호스팅에 이 폴더 전체를 올리는 방식을 추천합니다.

GitHub Pages를 꼭 써야 한다면 `downloads/all-buddha-emoticons.zip`만 삭제하고 모음별 ZIP과 개별 PNG 다운로드 방식으로 배포하세요.
