import { Search } from "./components/search"
import { Result } from "./components/result"
import { useRegisterShortCut } from "./hook"
import { Error } from "./components/error"


function App(): React.JSX.Element {
  useRegisterShortCut()
  return (
    <>
      <Error />
      <Search />
      <Result />
    </>
  )
}

export default App
