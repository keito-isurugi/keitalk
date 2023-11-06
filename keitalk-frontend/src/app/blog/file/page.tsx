'use client';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, useState } from "react";

export const Page = () => {
  const [file, setFile] = useState<File | null>(null)

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files[0]) {
      setFile(files[0])
    }
  }

  const onClickSubmit = async () => {
    if (!file) {
      return
    }
    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch('http://localhost:8088/api/file', {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()
    console.log("data", data)
    alert(file.name + "をアップロードします！")
  }

  return (
    <div>
      <h1>ファイルアップロード</h1>
      <div className="App-form">
        <input
          name="file"
          type="file"
          accept="image/*"
          onChange={onChangeFile}
        />
        <button disabled={!file} onClick={onClickSubmit}>送信</button>
      </div>
    </div>
  )
}

export default Page