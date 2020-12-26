import LoginContextProvider from "./contexts/LoginContext";
import MyChoice from "./MyChoice";


function App() {
  return (
    <LoginContextProvider>
      <MyChoice/>
    </LoginContextProvider>
  )
}

export default App;
