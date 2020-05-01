import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from '../Loader/Loader';

const MusicPlayer = React.lazy(() => import('../MusicPlayer/MusicPlayer'));
const PinterestGrid = React.lazy(() => import('../PinterestGrid/PinterestGrid'));
const SortingVisualizer = React.lazy(() => import('../SortingVisualizer/SortingVisualizer'));
const ProgressBars = React.lazy(() => import('../ProgressBars/ProgressBars'));
const CalendarModal = React.lazy(() => import('../CalendarModal/CalendarModal'));

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
                {/* <Route path="/drag-and-drop">
                    <DragAndDrop />
                </Route> */}
                <Route path="/calendar">
                    <CalendarModal />
                </Route>
            </Switch>
        </React.Suspense>
    )

}


export default Router;