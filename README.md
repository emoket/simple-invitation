# Simple Invitation

[Create React App](https://github.com/facebook/create-react-app)을 이용하여 구성하였습니다만, 실제 리액트의 기능은 useState만을 사용하고 있습니다. (리액트 기능 최소화, Photo 컴포넌트의 Image Lazy Loading 시에만 사용)

대부분 CSS 기능으로 동작된다고 보면 됩니다.

![Shadow-Series-Apple-iDevices-V2](https://github.com/emoket/simple-invitation/assets/8438711/6106fbd6-c6db-4da8-b1f7-97f6e37ab1dd)

[Demo](https://simple-invitation.vercel.app/)

## Features

- 데스크탑부터 모바일까지 반응형 디자인
- framer-motion을 이용한 랜딩 페이지의 부드러운 모션 효과
- 사진이 쌓이는 효과의 포토 갤러리 (Lazy loading)

## How to use

1. 포토갤러리에 사용할 이미지는 public/images/ 폴더에 photo_1.jpg 과 같이 위치 시킵니다.
2. 사진 갯수를 아래 `PHOTO_COUNT` 변수에 기록합니다.
3. (옵션) 포개어지는 사진의 각도를 조정하고자 할 경우 `DEGREE_RANGE` 값을 변경합니다. (10 권장)

```javascript
// components/Photo.jsx 내 설정값

// 사진 갯수 설정값
const PHOTO_COUNT = 6;
// 포개어지는 사진의 각도 범위
const DEGREE_RANGE = 10;
```
