const layout = require("./components/layout");
const base = require('./components/base');

const signUp = (data) => {

    const [header, setHeader] = base.header({Class:'header'});
    const [title] = base.component({component:'h1', children: 'CommL로 만든 회원가입 창'});
    setHeader(title());
    // 위 내용은 다음과 같습니다.
    // 1.
    // const [title, setTitle] = base.component({component:'h1', children: 'CommL로 만든 회원가입 창'});
    // const [header, setHeader] = base.div({Class:'header', children: title()});
    // 2. 
    // const [header, setHeader] = base.div({Class:'header', children: '<h1>CommL로 만든 회원가입 창</h1>'});
    // 3.
    // <header>
    //     <h1>CommL로 만든 회원가입 창</h1>
    // </header>

    const [centerBox, setCenterBox] = base.div({Class:'centerBox'});
    const [signupForm, setSignupForm] = base.form({Class: 'signupForm'});
    const firstName = base.input({type: 'text', name: 'firstName', placeholder: '"아이디를 입력하세요."'})
    const secondName = base.input({type: 'text', name: 'secondName', placeholder: '"아이디를 다시 입력하세요."'})
    const submitButton = base.input({type: 'submit', value: '제출'})
    //div는 get함수와 set함수를 반환합니다. (주로 div와 같이 엘리먼트 내부에 다른 엘리먼트를 넣는 것들은 두 함수를 반환합니다.)
    //input과 버튼과 같은 것들은 엘리먼트 자체를 반환합니다.
    //placeholder와 같이 문자를 넘겨줄때는 '" "' 안에 문자열을 넣습니다. 데이터로 넘겨줄 때에도 `'${}'`와 같이 전달합니다.

    setSignupForm(firstName, secondName, submitButton);
    //form 태그 내부에 세 인풋을 넣습니다.

    setCenterBox(signupForm());
    //세터박스 내부에 싸인업 폼을 넣습니다.

    const body = [
        header(),
        centerBox(),
    ];
    // 만들어둔 컴포넌트를 body 배열 안에서 호출합니다.
    const css = [
        'home.css',
    ];
    //css는 파일명을 넣습니다.
    const js = [

    ];
    //js도 css와 마찬가지로 파일명을 넣습니다.

    return layout(body, css, js);
}

module.exports = signUp;