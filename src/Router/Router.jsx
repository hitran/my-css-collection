import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PinterestGrid from '../PinterestGrid/PinterestGrid';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';
import ProgressBars from '../ProgressBars/ProgressBars';

function Router() {
    return (
        <Switch>
            <Route path="/" exact>
                <MusicPlayer />
            </Route>
            <Route path="/pinterest-grid">
                <PinterestGrid />
            </Route>
            <Route path="/sorting-visualizer">
                <SortingVisualizer />
            </Route>
            <Route path="/progress-bars">
                <ProgressBars />
            </Route>
        </Switch>
    )

}


export default Router;