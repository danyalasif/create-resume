import { useState } from 'react'
import { useEditorData } from '../context/EditorContext'

const FIELDS = [
    {
        label: "Full name",
        camelizedLabel: "fullName",
        type: "text",
        styles: "",
        placeholder: "John Doe",
        inputParams: "",
    },
    {
        label: "Job Title",
        camelizedLabel: "jobTitle",
        type: "text",
        styles: "",
        placeholder: "Starship Trooper",
        inputParams: "",
    }
]

const Skills = () => {
    const [value, setValue] = useEditorData();
    const skills = value.skills ?? []
    const [currentSkill, setCurrentSkill] = useState("")
    const [currentDesc, setCurrentDesc] = useState("")

    const addSkill = () => {
        setValue({...value, skills: [...skills, {id: skills.length + 1, name: currentSkill, desc: currentDesc}]});
        setCurrentSkill("")
        setCurrentDesc("")
    }

    const deleteSkill = (skillId: number) => {
        console.log({skillId, skills})
        setValue({...value, skills: skills.filter(skill => skill.id !== skillId)})
    }
    
    return <>
        <div className='m-2 flex items-center'>
        <label htmlFor="skillInput" className='pr-4 text-xl font-light w-1/6'>Skills</label> 
        <div className='flex flex-col'>
            <input
                placeholder="Add a skill"
                type="text"
                id="skillInput" 
                name="skills"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                className={`border border-black rounded border-b-0 rounded-b-none p-2`}/>
            <textarea
                placeholder="Maybe a description?"
                id="skillInput" 
                name="skills"
                value={currentDesc}
                onChange={(e) => setCurrentDesc(e.target.value)}
                className={`border border-black border-t-red-100 rounded rounded-t-none p-2`}/>
        </div>

        <button className="border rounded border-pink-300 hover:bg-pink-200 p-2 m-2 h-full disabled:bg-gray-200 disabled:border-gray-300" disabled={currentSkill.length == 0} onClick={addSkill}>+</button>
        </div>
        <div className='m-2 flex flex-row flex-wrap justify-center'>
            {skills?.filter(Boolean).map(skill => {
                return <div key={skill.id} className='border rounded p-1 m-1 w-1/3'>
                    <button className='ml-auto w-full' onClick={() => deleteSkill(skill.id)}>X</button>
                    <p className='p-2 text-md font-semibold hover:text-cyan-800'>{skill.name} </p>
                    <p className='p-2 text-md font-mono'>{skill.desc}</p></div>
            })}
        </div>
    </>
}


const Editor = () => {
    const [value, setValue] = useEditorData();

    const onBlur = (event: any) => {
        setValue({...value, [event.target.name]: event.target.value})
    }
  return (
    <div className='border border-black rounded w-1/2 p-6 m-2'>
        <div className='flex flex-col'>
            {FIELDS.map(field => {
                return <div key={field.camelizedLabel} className='m-2 flex items-center'>
                <label htmlFor={field.camelizedLabel} className='pr-4 text-xl font-light w-1/6'>{field.label}</label> 
                <input onBlur={onBlur} 
                    placeholder={field.placeholder} 
                    type={field.type} 
                    id={field.camelizedLabel} 
                    name={field.camelizedLabel} 
                    className={`border border-black rounded p-2 ${field.styles}`}/>
                </div>
            })}

            <div className='m-2 flex items-center'>
                <label htmlFor="profileInput" className='pr-4 text-xl font-light w-1/6'>Profile</label> 

                <textarea name="profileInput" placeholder='Tell something about yourself' onBlur={onBlur} className='border border-black rounded p-2 w-2/3'></textarea>
            </div>



                <Skills />





        </div>
        
    </div>
  )
}

export default Editor
