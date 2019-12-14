import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PinterestGrid from '../PinterestGrid/PinterestGrid';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';

function Router() {
    return (
        <Switch>
            <Route path="/" exact>
                <MusicPlayer />
            </Route>
            <Route path="/pinterest-grid" exact>
                <PinterestGrid />
            </Route>
            <Route path="/sorting-visualizer" exact>
                <SortingVisualizer />
            </Route>
        </Switch>
    )

}


export default Router;