import React from "react"
import ReactDOM from "react-dom/client"


const reactHeading = React.createElement("h1", {
    id: "heading",
    style: {
        color: "red"
    }
}, "Hello World from React")


// JSX

const jsxHeading = <h1>Hello from JSX</h1>

console.log(jsxHeading);

const HeadingComponent0 = () => { 
    return <h1>Hello from react functional component 0</h1>
}

const HeadingComponent = () => { 
    return <div>
    <HeadingComponent0/>
    <h1>Hello from react functional component</h1>
    </div>
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"))


reactRoot.render(<HeadingComponent/>)