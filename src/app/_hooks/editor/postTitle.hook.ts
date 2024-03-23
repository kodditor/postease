import { useState } from "react";


export default function usePostTitle(){
    const [postTitle,  setTitle] = useState<string>('')

    function changeTitle(s: string){
        setTitle(s)
    }

    return {postTitle, changeTitle}

}