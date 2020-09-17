const layout = require("./components/layout");
const comp = require('./components/base');

const home = (data) => {

    const [header, setHeader] = comp({tag:'header',atr : {class:'header'}});
    const [title] = comp({tag:'h1', children: 'CommL로 만든 회원가입 창'});
    setHeader(title());

    const [centerBox, setCenterBox] = comp({tag: 'div', atr: {class:'centerBox'}});
    const [signupForm, setSignupForm] = comp({tag: 'form',atr: {class: 'signupForm'}});
    const [firstName] = comp({tag: 'input', atr: {type: 'text', name: 'firstName', placeholder: '"아이디를 입력하세요."'}})
    const [secondName] = comp({tag: 'input',atr: {type: 'text', name: 'secondName', placeholder: '"아이디를 다시 입력하세요."'}})
    const [submitButton] = comp({tag: 'input',atr: {type: 'submit', value: '제출'}})
    //placeholder와 같이 문자를 넘겨줄때는 '" "' 안에 문자열을 넣습니다. 데이터로 넘겨줄 때에도 `'${}'`와 같이 전달합니다.

    setSignupForm(firstName(), secondName(), submitButton());
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

module.exports = home;