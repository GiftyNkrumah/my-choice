import LoginContextProvider from './contexts/LoginContext';
import PollContextProvider from './contexts/PollContext'
import MyChoice from './MyChoice';


function App() {
  return (
    <LoginContextProvider>
      <PollContextProvider>
        <MyChoice/>
      </PollContextProvider>
    </LoginContextProvider>
  )
}

export default App;
