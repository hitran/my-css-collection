import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Grid from '../Grid/Grid';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

function Router() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/resposive-grid" exact>
                <Grid />
            </Route>
            <Route path="/music-player" exact>
                <MusicPlayer />
            </Route>
        </Switch>
    )

}


export default Router;