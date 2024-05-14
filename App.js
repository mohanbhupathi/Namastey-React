// div > div > h1 h2

const nestedElement = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"},
    [React.createElement("h1", {id: "heading", key: 1}, "h1 element"), React.createElement("h2", {id: "heading2", key: 2}, "h2 tag")]
    )
)

const element = React.createElement(
    "h1",
    {id: "heading", xyz: "abc"},
    "Hello World"
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(nestedElement)