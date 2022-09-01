
import { useEditorData } from '../context/EditorContext'

const Preview = () => {
    const [value] = useEditorData();
  return (
    <div className='border border-black w-1/2 text-center p-6 rounded m-2'>
        <h2 className='text-3xl mb-3'>{value.fullName}</h2>
        <h2 className='text-2xl'>{value.jobTitle}</h2>
    </div>
  )
}

export default Preview
