import { useState } from "react";


export default function usePostBody(){
    const [ postBody, setPostBody ] = useState<string>('')
    
    function changeBody(s: string){
        setPostBody(s)
    }
    
    return {postBody, changeBody}
}