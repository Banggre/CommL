# Component HTML

HTML을 **컴포넌트화** 해서 **js**로 관리하기 위해 만들었습니다.

## 1. 
ex) div, form, header...
위와 같은 태그는 다음과 같은 형태로 사용합니다.
```javascript
    const comp = require('./components/base');
    ...
    const [header, setHeader] = comp({tag:'header',atr : {class:'header'}}); //header 태그에 속성으로 클래스 네임을 header로 줍니다.
    const [title] = comp({tag:'h1', children: 'CommL로 만든 회원가입 창'}); //h1 태그에 태그 컨텐츠로 문자열을 넘깁니다.
    setHeader(title()); // header 컴포넌트의 컨텐츠로 title를 선택합니다.
    // 위 내용은 다음과 같습니다.
    // <header class=header>
    //     <h1>CommL로 만든 회원가입 창</h1>
    // </header>
```
    comp({tag: '태그명', atr: {속성키값 : 속성 벨류값}, children : [담고자 하는 컨텐츠] });
    속성으로 넘길 때는 class: 'ClassName'과 같이 키 밸류 값으로 넘깁니다.
    이때, selected와 같이 벨류값이 없는 경우 key와 value로 같은 값을 넘깁니다.
    children의 경우, 항상 문자열 하나를 넘겨줍니다.

```javascript
    const comp = require('./components/base');
    ...
    const [firstName] = comp({tag: 'input', atr: {type: 'text', name: 'firstName', placeholder: '"아이디를 입력하세요."'}})
    const [secondName] = comp({tag: 'input',atr: {type: 'text', name: 'secondName', placeholder: '"아이디를 다시 입력하세요."'}})
    const [submitButton] = comp({tag: 'input',atr: {type: 'submit', value: '제출'}})
    const [centerBox, setCenterBox] = comp({tag: 'div', atr: {class:'centerBox'}});
    const [signupForm, setSignupForm] = comp({tag: 'form',atr: {class: 'signupForm'}, children: firstName()+secondName()+submitButton()});

    setCenterBox(signupForm());
```
    주의 : placeholder와 같이 문자열 사이 공백이 있을 때에는 '" "' 로 감싸서 넘겨주세요.

    signupForm의 자식으로 넘겨줄 때 리터럴 하나로 넘겨줘야 하기에 다음과 같이 각 함수의 반환 값을 + 해서 넘겨줍니다.
    그러나 다음과 같이 하는 set함수를 활용하는 방법을 추천합니다.

```javascript
    const [centerBox, setCenterBox] = comp({tag: 'div', atr: {class:'centerBox'}});
    const [signupForm, setSignupForm] = comp({tag: 'form',atr: {class: 'signupForm'}});

    const [firstName] = comp({tag: 'input', atr: {type: 'text', name: 'firstName', placeholder: '"아이디를 입력하세요."'}});
    const [secondName] = comp({tag: 'input',atr: {type: 'text', name: 'secondName', placeholder: '"아이디를 다시 입력하세요."'}});
    const [submitButton] = comp({tag: 'input',atr: {type: 'submit', value: '제출'}});

    setSignupForm(firstName(), secondName(), submitButton());

    setCenterBox(signupForm());
```
    
    comp는 다음과 같습니다.

```javascript
    const component = (data) => {
        let {tag, atr, children = ''} = data;
        atr = atr === undefined ? '' :getAttribute(atr);
        let contents = `<${tag}${atr}>${children}</${tag}>`;

        const setContents = (...child) => {
            children = child.reduce((acc,val) => acc += val,'');
            contents = `<${tag}${atr}>${children}</${tag}>`;

        }

        const addContents = (...child) => {
            children += child.reduce((acc,val) => acc += val,'');
            contents = `<${tag}${atr}>${children}</${tag}>`;

        } 

        const getContents = () => contents;

        return [getContents, setContents, addContents];
    }
```

    순서대로 get, set, add 함수를 반환합니다.
    내용을 가져올 때는 get함수를 호출하고, 내용을 덮어 씌울 때는 set함수를, 내용을 추가할 때는 add함수를 사용합니다.

    