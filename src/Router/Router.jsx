import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from '../Loader/Loader';

const MusicPlayer = React.lazy(() => import('../MusicPlayer/MusicPlayer'));
const PinterestGrid = React.lazy(() => import('../PinterestGrid/PinterestGrid'));
const SortingVisualizer = React.lazy(() => import('../SortingVisualizer/SortingVisualizer'));
const ProgressBars = React.lazy(() => import('../ProgressBars/ProgressBars'));

function Router() {
    return (
        <React.Suspense fallback={<Loader />} >
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
        </React.Suspense>
    )

}


export default Router;