'use client';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Page = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  return (
    <div>
      <h1>Quill</h1>
      <TextField 
        id="filled-basic" 
        label="title" 
        variant="filled" 
        // onChange={setTitle} 
      />
      <ReactQuill 
        theme="snow" 
        value={content} 
        onChange={setContent} 
        modules={modules}
        formats={formats}
      />
    </div>
  )
}

export default Page