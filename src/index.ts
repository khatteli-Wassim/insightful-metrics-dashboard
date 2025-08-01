import BaseWidget from './components/Widget';

const widget = new BaseWidget('widget1', 'chart', { width: 300, height: 150 });
console.log(widget.render());