import './App.css';
import Header from './components/Header';
import NotesListPages from './pages/NotesListPages';
import NotesListPage from './pages/NotesListPage';
import {HashRouter,Route,Routes} from "react-router-dom"

function App() {
  return (  
    <HashRouter>
      <div className="container dark">
        <div className='App'>
        <Header/>
        <Routes>
          <Route path='/' exact Component={NotesListPages} />
          <Route path='notes/:id' Component={NotesListPage} />
        </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;