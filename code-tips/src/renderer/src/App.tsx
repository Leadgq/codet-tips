import { Search } from "./components/search"
import { useEffect } from "react"
import useIgnoreMouseEvents from "./hook"



function App(): React.JSX.Element {
   useEffect(() => {
    const { setIgnoreMouseEvents } = useIgnoreMouseEvents()
    setIgnoreMouseEvents()
   })
  return (
    <>
        <Search />
    </>
  )
}

export default App
