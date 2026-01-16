import { Search } from "./components/search"
import { Result } from "./components/result"
import { useRegisterShortCut } from "./hook"


function App(): React.JSX.Element {
  useRegisterShortCut()
  return (
    <>
      <Search />
      <Result />
    </>
  )
}

export default App
