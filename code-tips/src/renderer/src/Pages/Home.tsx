import { Search } from "@renderer/components/search"
import { Result } from "@renderer/components/result"
import { setIgnoreMouseEvents, useRegisterShortCut } from "@renderer/hook"
import { Error } from "@renderer/components/error"  
import { useEffect } from "react"


function Home(): React.JSX.Element {
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

export default Home
