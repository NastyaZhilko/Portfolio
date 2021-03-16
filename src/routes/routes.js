import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Main from "../Pages/Main";
import Skills from "../Pages/Skills/Skills";
import Jobs from "../Pages/Jobs/Jobs";
import Contact from "../Pages/Contact/Contact";

export const PATH = {
    MAIN: "/main",
    SKILLS: "/skills",
    PROJECT: "/project",
    CONTACT: "/contacts",

}
const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.MAIN}/>}/>
                <Route path={PATH.MAIN} render={() => <Main/>}/>
                <Route path={PATH.SKILLS} render={() => <Skills/>}/>
                <Route path={PATH.PROJECT} render={() => <Jobs/>}/>
                <Route path={PATH.CONTACT} render={() => <Contact/>}/>
            </Switch>
        </React.Fragment>
    );
};

export default Routes;