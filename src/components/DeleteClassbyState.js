import { useState } from "react";

/*챌린지 1 of 3: CSS 클래스를 추가하고 제거하기 
사진을 클릭하면 바깥에 있는 <div>의 background--active CSS 클래스를 제거하고 <img>에 picture--active 클래스를 추가합니다. 그리고 배경을 다시 클릭하면 원래 CSS 클래스로 돌아와야 합니다.
화면상으로는 사진을 클릭하면 보라색 배경은 제거되고 사진의 테두리는 강조 표시됩니다. 사진 외부를 클릭하면 배경이 강조 표시되고 사진의 테두리 강조 표시는 제거됩니다.
*/

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClass = "background";
  let pictureClass = "picture";

  if (isActive) {
    pictureClass += ` picture--active`;
  } else {
    backgroundClass += ` background--active`;
  }

  return (
    <div className={backgroundClass} onClick={() => setIsActive(false)}>
      <img
        className={pictureClass}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
      />
    </div>
  );
}
