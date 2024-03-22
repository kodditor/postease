import { Resizable, ResizableBox } from 'react-resizable'

export default function AppEditorModule(){


    return(
        <>
            <div className='flex gap-4 w-full h-full'>
                {/* Editor */}
                <ResizableBox 
                    width={500} 
                    height={100}
                    minConstraints={[100, 100]}
                    maxConstraints={[800, 800]}
                    resizeHandles={['e', 'w']}
                   
                >
                    <div className='w-full h-full bg-gray-100 rounded-md'>
                    Hello
                    </div>
                </ResizableBox>
                {/* Preview */}
                <ResizableBox 
                    width={500} 
                    height={100}
                    minConstraints={[100, 100]}
                    maxConstraints={[800, 800]}
                    resizeHandles={['e','w']}
                    >
                    <div className='w-full h-full bg-gray-100 rounded-md'>
                        World
                    </div>
                </ResizableBox>
            </div>
        </>
    )
}