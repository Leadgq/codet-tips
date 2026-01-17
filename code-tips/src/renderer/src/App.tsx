import { Search } from "./components/search"
import { Result } from "./components/result"
import { setIgnoreMouseEvents, useRegisterShortCut } from "./hook"
import { Error } from "./components/error"
import { useEffect } from "react"


function App(): React.JSX.Element {
  useRegisterShortCut()
  useEffect(() => {
    setIgnoreMouseEvents()
  }, [])
  return (
    <>
      <main className=" relative p-5 " id="main">
        <Error />
        <Search />
        <Result />
      </main>
    </>
  )
}

export default App
