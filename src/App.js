import './App.css';

import CakeView from './app/features/cake/CakeView'
import  IcecreamView  from './app/features/icecream/icecreamView'
import  UserView  from './app/features/user/userView'



function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
