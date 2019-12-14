import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PinterestGrid from '../PinterestGrid/PinterestGrid';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import AlgorithmVisualizer from '../AlgorithmVisualizer/AlgorithmVisualizer';

function Router() {
    return (
        <Switch>
            <Route path="/" exact>
                <MusicPlayer />
            </Route>
            <Route path="/pinterest-grid" exact>
                <PinterestGrid />
            </Route>
            <Route path="/algorithm-visualizer" exact>
                <AlgorithmVisualizer />
            </Route>
        </Switch>
    )

}


export default Router;