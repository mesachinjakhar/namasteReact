const reactHeading = React.createElement("h1", {
    id: "heading",
    style: {
        color: "red"
    }
}, "Hello World from React")


console.log(reactHeading);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"))

reactRoot.render(reactHeading)


const reactDiv = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [React.createElement("h1", {}, "Hello from h1 tag"),  React.createElement("h2", {}, "hello from h2 tag")]))


reactRoot.render(reactDiv)