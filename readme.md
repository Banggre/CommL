# Component HTML

HTML을 컴포넌트화 해서 관리하기 위해 만들었습니다.

모든 태그들에 대해 구성한 것은 아닙니다.
필요한 태그가 있다면 base 파일 내 다른 함수를 참고해 추가해서 사용합니다.

<strong>base 내 태그 함수는 두가지 형태가 존재합니다.</strong>

## 1. 태그 내부에 다른 요소가 들어갈 수 있는 것
ex) div, form, header...
위와 같은 태그는 다음과 같은 형태로 사용합니다.
```javascript
    const [layoutBox, setLayoutBox] = base.div({Class: '클래스명'});
    setLayoutBox('해당 디브에 추가하고자 하는 컴포넌트'); //디브에 컴포넌트를 넣을 때 사용
    layout(); //디브를 호출
```
    base.태그명({넘기고자 하는 속성})
    속성으로는 Class(class명), id, value, name 등이 있습니다.
    다른 속성을 추가하고 싶다면 base 내부 태그에 해당하는 함수를 수정해서 사용합니다.
    base.div는 다음과 같습니다.

```javascript
    const div = (data) => {
        let{ id, Class, children } = middleware(data);
        let contents = `<div${id}${Class}>${children}</div>`;

        const setContents = (...child) => {
            children += child.reduce((acc,val) => acc += val,'');
            contents = `<div${id}${Class}>${children}</div>`;
        }

        const getContents = () => contents;

        return [getContents, setContents];
    }
```
    리터럴 문자 내부에 속성을 추가하고 미들웨어에서 전처리 단계를 추가해줍니다.
    미들웨어는,,, 리팩토링이 매우 시급합니다만 조건이 다소 까다로워 조금 시간이 걸릴 것 같습니다...
    현재는 속성이 추가될 때마다 그냥 미들웨어에 속성을 추가해주고 있습니다.
    미들웨어의 역할은 속성에 해당하는 값이 있는지 없는 확인하여 있다면 태그내 속성의 형태에 맞게 바꿔주고,
    없다면 ''을 리턴합니다.

    결과를 호출하는 get함수와 결과에 컴포넌트를 추가하는 set함수를 반환합니다.
    따라서 결과를 호출하거나, 셋팅할 때는 반드시 "함수를 호출해주어야 합니다."

## 2. 태그 내부에 다른 태그가 들어갈 수 없는 것
ex) input, img, button
위와 같은 태그들은 다음과 같이 사용합니다.

```javascript
    const img = base.img({src: image, width:'400px', height:'300px', Class:'feedPicture'});

    const [layoutBox, setLayoutBox] = base.div({Class: '클래스명'});
    setLayoutBox(img); //디브에 img를 넣을 때
    layout(); //디브를 호출
```
    호출하는 방법과 속성을 설정하는 방법은 1번과 같습니다.
    차이점은 해당 요소를 사용할 때 함수호출 형태가 아닌 변수의 값을 사용하면 됩니다.
```javascript
    const img = (data) => {
        const { src, width, height, id, Class } = middleware(data);
        return `<img ${src} ${width} ${height} ${id} ${Class}>`;
    }
```
Example에 예시가 있으니 참고하셔도 좋을 것 같습니다.