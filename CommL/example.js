const layout = require("./layout");
const base = require('./base');

const example = (data) => {

    const [layoutBox, setLayoutBox] = base({tag: 'div', atr:{class: '클래스명'}});

    const body = [
        layoutBox(),
    ];
    const css = [

    ];
    const js = [

    ];

    return layout('CommL', body, css, js);
}

module.exports = example;