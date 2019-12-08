import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PinterestGrid from '../PinterestGrid/PinterestGrid';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

function Router() {
    return (
        <Switch>
            <Route path="/" exact>
                <MusicPlayer />
            </Route>
            <Route path="/pinterest-grid" exact>
                <PinterestGrid />
            </Route>
        </Switch>
    )

}


export default Router;