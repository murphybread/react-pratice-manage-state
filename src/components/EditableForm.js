import { useState } from "react";

/*
이 폼은 두 가지 모드를 가지고 있습니다. 하나는 편집 모드이고 이때 인풋들을 볼 수 있습니다. 또 다른 하나는 보기 모드이고 이때는 오직 결과만 볼 수 있습니다.
버튼의 라벨은 속한 모드에 따라 “Edit”과 “Save”로 변경됩니다. 또한 인풋들의 내용을 변경할 때 환영 메시지를 실시간으로 확인할 수 있습니다.
당신의 목적은 아래 샌드박스에서 React로 다시 구현하는 것입니다. 편의를 위해 마크업은 이미 JSX로 변환되어 있습니다.
하지만 원래 구현돼있던 것처럼 인풋들을 보여주고 숨기는 것은 직접 구현해야 합니다.

마찬가지로 아래에 있는 텍스트도 업데이트시켜야 합니다!
*/

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      <label>
        First name:{" "}
        {isEditing ? (
          <input
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      Last name:{" "}
      {isEditing ? (
        <input
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
      ) : (
        <b>{lastName}</b>
      )}
      <label></label>
      <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
