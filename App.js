const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div",{id: "child"},React.createElement("h1",{},"Hello I'm h1 Tag")
));

const heading = React.createElement("h1",{id: "heading"},"Hello World from Manu in React");
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);