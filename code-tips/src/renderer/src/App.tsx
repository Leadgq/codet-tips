import { Search } from "./components/search"
import { Result } from "./components/result"
import { CodeProvider } from "./CodeContext/context"


function App(): React.JSX.Element {
  return (
    <>
      <CodeProvider>
        <Search />
        <Result />
      </CodeProvider>
    </>
  )
}

export default App
