import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { DOMAttributes, FocusEventHandler } from 'react'
import { useEditorData } from '../context/EditorContext'
import styles from '../styles/Home.module.css'

const FIELDS = [
    {
        label: "Full name",
        camelizedLabel: "fullName",
        type: "text",
        styles: "",
        placeholder: "John Doe"
    },
    {
        label: "Job Title",
        camelizedLabel: "jobTitle",
        type: "text",
        styles: "",
        placeholder: "Starship Trooper"
    }
]

const Editor = () => {
    const [value, setValue] = useEditorData();
    const onBlur = (event: any) => {
        setValue({...value, [event.target.name]: event.target.value})
    }
  return (
    <div className='border border-black rounded w-1/2 p-6 m-2'>
        <div className='flex flex-col'>
            {FIELDS.map(field => {
                return <div className='m-2 flex items-center'>
                <label htmlFor={field.camelizedLabel} className='pr-4 text-xl font-light w-1/6'>{field.label}</label> <input onBlur={onBlur} placeholder={field.placeholder} type={field.type} id={field.camelizedLabel} name={field.camelizedLabel} className={`border border-black rounded p-2 ${field.styles}`}/></div>
            })}


        </div>
        
    </div>
  )
}

export default Editor
