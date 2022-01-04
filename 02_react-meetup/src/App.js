import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <Helmet>
        <link
          href="//amp.azure.net/libs/amp/2.3.8/skins/amp-default/azuremediaplayer.min.css"
          rel="stylesheet"
        />
        <script src="//amp.azure.net/libs/amp/2.3.8/azuremediaplayer.min.js"></script>
      </Helmet>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </>
  );
};

export default App;
