import "./App.css";
import "./styles/themes/default/theme.scss";
import Homepage from "./pages/homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MotoPage from "./pages/MotoPage";
import HistoryPage from "./pages/HistoryPage";
import CodingPage from "./pages/CodingPage";
import TechPage from "./pages/TechPage";
import CulturePage from "./pages/CulturePage";
import ShowTheQuests from "./components/ShowTheQuests";
import { quests } from "./components/Questions";
import historia from './assets/historia_ikona.png';
import technologia from './assets/technologia_ikona_.png';
import kultura from './assets/kultura_ikona.png';
import motoryzacja from './assets/motoryzacja_ikona.png';
import programowanie from './assets/programowanie_ikona.png'

function App() {
  return (
    <div className="main__wrapper">
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Homepage />} />
          <Route path="/home" render={(props) => <Homepage />} />
          <Route exact path="/tech" component={TechPage} />
          <Route exact path="/moto" component={MotoPage} />
          <Route exact path="/history" component={HistoryPage} />
          <Route exact path="/coding" component={CodingPage} />
          <Route exact path="/culture" component={CulturePage} />
        </Switch>
        <Switch>
          <Route
            path="/history/one"
            render={(props) => (
              <ShowTheQuests
                classProp={"history"}
                question={quests.history}
                isMe={"HISTORIA"}
                image={historia}
                title={'historia'}
                {...props}
              />
            )}
          />
          <Route
            path="/moto/one"
            render={(props) => (
              <ShowTheQuests
                question={quests.moto}
                classProp="moto"
                isMe={"MOTORYZACJA"}
                image={motoryzacja}
                title={'motoryzacja'}
              />
            )}
          />
          <Route
            path="/tech/one"
            render={(props) => (
              <ShowTheQuests
                classProp="tech"
                question={quests.technology}
                isMe={"TECHNOLOGIA"}
                image={technologia}
                title={'technologia'}
              />
            )}
          />
          <Route
            path="/coding/one"
            render={(props) => (
              <ShowTheQuests
                classProp="coding"
                question={quests.coding}
                isMe={"PROGRAMOWANIE"}
                image={programowanie}
                title={'programowanie'}
              />
            )}
          />
          <Route
            path="/culture/one"
            render={(props) => (
              <ShowTheQuests
                classProp= "culture"
                question={quests.culture}
                isMe={"KULTURA"}
                image={kultura}
                title={'kultura'}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
