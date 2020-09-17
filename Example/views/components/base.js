const getAttribute = (data) => {
    let result = '';
    for (const [key, value] of Object.entries(data)) {
        result = key === value? result + ` ${key}` : result + ` ${key}=${value}`;
    }
    return result;
}

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


module.exports = component;