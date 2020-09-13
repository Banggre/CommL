const middleware = (data) => {
    data.id = data.id != undefined ? ` id=${data.id}`: "";
    data.Class = data.Class != undefined ? ` class=${data.Class}`: "";
    data.action = data.action != undefined ? ` action=${data.action}`: "";
    data.method = data.method != undefined ? ` method=${data.method}`: "";
    data.children = data.children != undefined ? data.children : "";
    data.name = data.name != undefined ? `name=${data.name}` : "";
    data.type = data.type != undefined ? `type=${data.type}` : "";
    data.placeholder = data.placeholder != undefined ? `placeholder=${data.placeholder}` : "";
    data.src = data.src != undefined ? `src=${data.src}` : "";
    data.width = data.width != undefined ? `width=${data.width}` : "";
    data.height = data.height != undefined ? `height=${data.height}` : "";
    return data;
}

const input = (data) => {
    const { type, name, placeholder, Class, id} = middleware(data);
    return `<input ${type} ${name} ${placeholder} ${Class} ${id}>`;
}

const button = (data) => {
    const{ name, id, Class, value } = middleware(data);
    data.type = data.type === 'type=submit' ? ` ${data.type}` : ` type="button"` 
    return `<button ${name} ${data.type} ${id} ${Class}> ${value} </button>`;
}

const img = (data) => {
    const { src, width, height, id, Class } = middleware(data);
    return `<img ${src} ${width} ${height} ${id} ${Class}>`;
}

const select = (data) => {
    let { children, selected, name, id, Class } = middleware(data);
    children = children.map(element => `<option ${element}>${element}</option>`)
                                 .reduce((acc,val) => acc += val, '');
    children = `<option ${selected} selected="selected">${selected}</option>` + children;
    return `<select ${name} ${id} ${Class}> ${children} </select>`;
}

const form = (data) => {
    let { action, method, id, Class, children} = middleware(data);
    let contents = `<form ${action} ${method} ${id} ${Class}> ${children} </form>`;

    const setContents = (...child) => {
        children += child.reduce((acc,val) => acc += val,'');
        contents = `<form ${action} ${method} ${id} ${Class}> ${children} </form>`;
    }

    const getContents = () => contents;

    return [getContents, setContents];
}

const header = (data) => {
    let { id, Class, children} = middleware(data);
    console.log('header', Class, id, children);
    let contents = `<header ${id} ${Class}> ${children} </header>`;

    const setContents = (...child) => {
        children += child.reduce((acc,val) => acc += val,'');
        contents = `<header ${id} ${Class}> ${children} </header>`;
    }

    const getContents = () => contents;

    return [getContents, setContents];
}

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

const component = (data) => {
    let{ component, id, Class, children } = middleware(data);
    let contents = `<${component}${id}${Class}>${children}</${component}>`;

    const setContents = (...child) => {
        children += child.reduce((acc,val) => acc += val,'');
        contents = `<${component}${id}${Class}>${children}</${component}>`;
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