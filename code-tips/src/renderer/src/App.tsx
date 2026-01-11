import { Search } from "./components/search"
import { Result } from "./components/result"
import { codeContext } from "./CodeContext/context"
import { ResultDataInterFace } from "./Data"
import { useImmer } from "use-immer"


function App(): React.JSX.Element {
  const [resultData, setResultData] = useImmer<ResultDataInterFace[]>([])
  return (
    <>
      <codeContext.Provider value={{ resultData, setResultData }}>
        <Search />
        <Result />
      </codeContext.Provider>
    </>
  )
}

export default App
