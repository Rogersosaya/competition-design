import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./features/home/ui/pages/home.page";
import MainLayout from "./common/ui/layouts/main-layout";
import ActivitiesPage from "./features/activities/ui/pages/activities.page";
import PositionsPage from "./features/positions/ui/pages/positions.page";
import TeamsPage from "./features/teams/ui/pages/teams.page";
import TeamPage from "./features/teams/ui/pages/team.page";
import ActivityPage from "./features/activities/ui/pages/activity.page";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="activities" element={<ActivitiesPage />} />
            <Route path="positions" element={<PositionsPage />} />
            <Route path="teams" element={<TeamsPage />} />
            <Route path="teams/:id" element={<TeamPage />} />
            <Route path="activities/:id" element={<ActivityPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
