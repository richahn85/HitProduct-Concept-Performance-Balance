# 부처님 오신날 보은 이모티콘 나눔 페이지

이 폴더는 이모티콘 공유용 정적 웹사이트입니다.

## 다시 빌드하기

공유할 이미지는 `source-images` 폴더 안에 넣습니다.

- `source-images\01-부처님오신날`
- `source-images\02-불법전법`
- `source-images\03-다국어`

필요하면 `source-images` 안에 새 폴더를 더 만들어도 됩니다. 각 하위 폴더가 웹페이지의 한 모음으로 표시됩니다.

이미지를 추가하거나 바꾼 뒤 아래 명령을 실행하면 `stickers`, `downloads`, `assets/manifest.js`가 다시 생성됩니다.

```powershell
powershell -ExecutionPolicy Bypass -File .\build-site.ps1
```

## 웹에 공유하기

`buddha-emoticon-share` 폴더 전체를 GitHub Pages, Netlify, Vercel, 일반 웹호스팅 등에 업로드하면 됩니다.

처음 화면에서 전체 ZIP을 받을 수 있고, 각 모음과 개별 PNG도 내려받을 수 있습니다.
