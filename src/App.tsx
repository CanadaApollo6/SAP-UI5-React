import React from "react";
import "./App.css";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/add.js";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { useHistory } from "react-router-dom";

const App = () => {
    const history = useHistory();
    const handleLogoClick = () => {
        history.push("./");
    };
    return (
        <>
            <ShellBar
                primaryTitle="My App"
                logo={<img src="reactLogo.png" alt="The React Logo" />}
                profile={<Avatar image="profilePictureExample.png" />}
                onLogoClick={handleLogoClick}
            >
                <ShellBarItem icon="add" text="Add" />
            </ShellBar>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/detail" component={Detail} />
                <Redirect from="/" to="/home" />
            </Switch>
        </>
    );
};

export default App;
