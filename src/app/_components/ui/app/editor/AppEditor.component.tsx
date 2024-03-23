import type { VFile } from 'node_modules/remark-rehype/lib'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify, {}  from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import usePostBody from '~/app/_hooks/editor/postBody'
import usePostTitle from '~/app/_hooks/editor/postTitle.hook'
import {useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import previewStyles from '~/styles/preview.module.css'

export default function AppEditorModule(){
    
    const { postTitle, changeTitle } = usePostTitle()
    const { postBody, changeBody } = usePostBody()
    const debouncedTitle = useDebounce(postTitle, 300)
    const debouncedBody = useDebounce(postBody, 300)

    return(
        <>
            <div className='flex gap-4 w-full h-full relative'>
                <div className="w-1/2 rounded-md p-4 bg-white h-full">
                    <Editor changeTitle={changeTitle} changeBody={changeBody} />
                </div>
                <div className="w-1/2 rounded-md p-4 bg-white h-full">
                    <LivePreview postTitle={debouncedTitle} postBodyDebounced={debouncedBody} />
                </div>             
            </div>
        </>
    )
}

function Editor({changeTitle, changeBody}: {changeTitle: (s: string)=>void, changeBody: (s: string)=>void}){

    return (
        <>
            <div className="flex flex-col gap-4 w-full h-full">
                <input className="border-b-[1.5px] border-blue p-2 text-xl w-fit min-w-[450px] max-w-[100%] focus:bg-slate-50 focus:border-0" placeholder="Post Title" onChange={(e) => {changeTitle(e.target.value); console.log('hi')}} type="text" required />
                <textarea className="border-b-[1.5px] border-blue p-2 text-xl w-full h-full focus:bg-slate-50 focus:border-0"  placeholder='Post Body' onChange={(e) => {changeBody(e.target.value)}} />
            </div>
        </>
    )

}

function LivePreview({postTitle, postBodyDebounced}: {postTitle: string, postBodyDebounced: string}){

    const [ postBodyHtml, setPostBodyHtml ] = useState<VFile['value']>('')
    
    useEffect(() => {
        parseMD(postBodyDebounced).then((data) =>{
            setPostBodyHtml(data.value)
        })
        .catch((e) =>{
            console.log(e)
        })
    }, [postBodyDebounced])

    return (
        <>
            <div className="flex flex-col gap-4" style={previewStyles}>
                <h1 className='text-3xl font-semibold'>{postTitle}</h1>
                <div className={`preview w-full overflow-x-hidden max-w-[calc(100%-70px)] overflow-y-auto`}>{parse(postBodyHtml.toString())}</div>
            </div>
        </>
    )
}

function parseMD(markdown: string): Promise<VFile>{
    const req = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify, {allowDangerousHtml: true})
    .process(markdown)
    
    return req
}