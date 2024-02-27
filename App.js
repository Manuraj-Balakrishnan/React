import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";


const Layout = () =>
    (
    <div className="main-container">
        <Header />
        <Body />
    </div>
    )

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Layout/>);