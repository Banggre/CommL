const makeAttribute = (data) => {
    delete data.children
    delete data.component
    delete data.selected
    return Object.keys(data).map(key => ` ${key} = ${data[key]} `)
}
// children, component는 속성이 아니기 때문에 키 값을 제거해줍니다.
// 만약 children, component가 필요한 경우는 호출하기 전에 따로 저장해주세요.
// 아래 예시 참고..

const input = (data) => {
    return `<input ${makeAttribute(data)}>`;
}

const button = (data) => {
    const { value } = data
    return `<button ${makeAttribute(data)}> ${value} </button>`;
}

const img = (data) => {
    return `<img ${makeAttribute(data)}>`;
}

const select = (data) => {
    let {children=[], selected=children[0]} = data
    const attribute = makeAttribute(data)
    children = children.map(element => `<option value=${element} ${element===selected?'selected':''}>${element}</option>`).join('')
    return `<select ${attribute}> ${children} </select>`;
}

const form = (data) => {
    let {children=''} = data
    const attribute = makeAttribute(data)
    let contents = `<form ${attribute}> ${children} </form>`;
    const setContents = (...child) => {
        children += child.reduce((acc,val) => acc += val,'');
        contents = `<form ${attribute}> ${children} </form>`;
    }

    const getContents = () => contents;

    return [getContents, setContents];
}

const header = (data) => {
    let {children=''} = data
    const attribute = makeAttribute(data)
    console.log('header', attribute);
    let contents = `<header ${attribute}> ${children} </header>`;

    const setContents = (...child) => {
        children += child.reduce((acc,val) => acc += val,'');
        contents = `<header ${attribute}> ${children} </header>`;
    }

    const getContents = () => contents;

    return [getContents, setContents];
}

const div = (data) => {
    let {children=''} = data
    const attribute = makeAttribute(data)
    let contents = `<div${attribute}>${children}</div>`;

    const setContents = (...child) => {
        children += child.reduce((acc,val) => acc += val,'');
        contents = `<div${attribute}>${children}</div>`;
    }

    const getContents = () => contents;

    return [getContents, setContents];
}

const component = (data) => {
    let {component, children=''} = data
    const attribute = makeAttribute(data)
    let contents = `<${component}${attribute}>${children}</${component}>`;

    const setContents = (...child) => {
        children += child.reduce((acc,val) => acc += val,'');
        contents = `<${component}${attribute}>${children}</${component}>`;
    }

    const getContents = () => contents;

    return [getContents, setContents];
}


module.exports = {
    input,
    button,
    img,
    select,
    form,
    div,
    header,
    component,
}
