
import { useEditorData } from '../context/EditorContext'

const Preview = () => {
    const [value] = useEditorData();

    const tempVal = value.fullName ? value : {fullName: "Danyal Asif", jobTitle: "Frontend Developer", profileInput: "Hi, I like Stuff"}
  return (
    <div className='border border-black w-1/2 p-6 rounded m-2'>
        <div className='text-center p-2 border rounded bg-slate-50'>
            <h2 className='text-3xl mb-3'>{tempVal.fullName}</h2>
            <h2 className='text-2xl'>{tempVal.jobTitle}</h2>
        </div>

        <div className='my-4 p-2 bg-slate-100 rounded border'>
            <h3 className='text-2xl mb-3'>Profile</h3>
            <p className='whitespace-pre-wrap'>{tempVal.profileInput}</p>
        </div>

        <div className='my-4 p-2 bg-slate-100 rounded border'>
            <h3 className='text-2xl mb-3'>Skills</h3>
            <div className='flex flex-row'>
            {tempVal.skills.map(skill => {
              return <div key={skill.id} className='border rounded p-1 m-2 first:ml-0 w-1/3 bg-blue-100'>
              <p className='p-2 text-md font-semibold hover:text-cyan-800'>{skill.name} </p>
              <p className='p-2 text-md font-mono'>{skill.desc}</p></div>
            })}
            </div>
        </div>

    </div>
  )
}

export default Preview
