import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";

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
        category: any;
        article_images: any;
        id: ReactNode; 
        title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
        eye_catch_image: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined
}) => (
        <div>
          {d.id}: { d.title } { d.category.name }
          <img src={`http://localhost:8088/${d.eye_catch_image}`}/>
          { d.title }のリレーション画像の表示
          { d.article_images.length && 
            d.article_images.map((image: { image_path: any; }, index: Key | null | undefined) => {
              return <img key={index} src={`http://localhost:8088/storage/${image.image_path}`}/>
            })
          }
        </div>
      ))}
    </div>
  )
}

export default Page