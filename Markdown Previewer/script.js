const { useState } = React;

const initialState = '# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n#### Created by:\n[Nguy3n](https://www.facebook.com/nguyen.fit.hcmus \"Nguy3n\'s Website\")';

const UserInput = props => {

  const [md, setMd] = useState(initialState);

  const updateMd = e => {
    setMd(e.target.value);
  };

  return (
    React.createElement("div", { className: "row" },
    React.createElement("div", { className: "col-md-6" },
    React.createElement("h3", { className: "text-center" }, "Enter the Markdown"),
    React.createElement("textarea", {
      id: "editor",
      type: "text",
      className: "md-input",
      value: md,
      onChange: updateMd })),

    React.createElement("div", { className: "col-md-6" },
    React.createElement("h3", { className: "text-center" }, "Preview"),
    React.createElement(MarkdownPreview, { markDown: md }))));



};

const MarkdownPreview = props => {

  const createMarkDown = () => {
    return { __html: marked(props.markDown) };
  };

  return (
    React.createElement("div", {
      type: "text",
      id: "preview",
      className: "preview",
      dangerouslySetInnerHTML: createMarkDown() }));


};

const Footer = () => {
  return (
    React.createElement("footer", { class: "page-footer font-small" },
    React.createElement("div", { class: "footer-copyright text-center py-3" }, "\xA9 2020 Code by",
    React.createElement("a", { href: "https://github.com/nguy3n47" }, " Nguy3n"))));



};

class App extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "container" },
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-md-12" },
      React.createElement("h1", { className: "text-center" }, "Markdown Previewer"),
      React.createElement("hr", null))),


      React.createElement(UserInput, null),
      React.createElement(Footer, null)));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));