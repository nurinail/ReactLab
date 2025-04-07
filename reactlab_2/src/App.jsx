import styleApp from './app.module.scss';
import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';

function App() {

  return (
    <div className={styleApp.app_component}>
      <Header/>
      <AppRouter/>
    </div>
  )
}

export default App
