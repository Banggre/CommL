const layout = require("./layout");
const base = require('./base');

const example = (data) => {

    const [layoutBox, setLayoutBox] = base.div({Class: '클래스명'});

    const body = [
        layoutBox(),
    ];
    const css = [

    ];
    const js = [

    ];

    return layout(body, css, js);
}

module.exports = example;