import { useState } from "react"
import { AddTask } from "./AddTask"
import { Button } from "./Button"

export const Main = () => {
    const [isVisible,setIsVisible] = useState(true);
    const handleVisibility = (e) => {
        setIsVisible(e)
    }
  return (
    <main>
        <Button handleVisibility={handleVisibility}/>
        <AddTask isVisible={isVisible}/>
    </main>
  )
}
