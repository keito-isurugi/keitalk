import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

async function getData() {
  const res = await fetch('http://localhost:8088/api/articles')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export const Page = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((d: {
        id: ReactNode; 
        title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
        eye_catch_image: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined
}) => (
        <div>
          {d.id}: { d.title }
          <img src={`http://localhost:8088/${d.eye_catch_image}`}/>
        </div>
      ))}
    </div>
  )
}

export default Page