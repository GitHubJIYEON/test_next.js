import Image from 'next/legacy/image'

export default function ProjectItem({ data }) {
  const projectTitle = data.properties.Name.title[0].plain_text
  const date = data.properties.Date.date.start
  const descriiption = data.properties.Description.rich_text[0].plain_text
  const tags = data.properties.Tags.multi_select[0].name
  const ImgSrc = data.cover.file?.url || data.cover.external?.url
  //   const aa = data.cover
  //   console.log(aa)

  return (
    <>
      <div className="flex flex-col m-3 bg-slate-700 rounded-xl">
        <Image className="rounded-t-xl" src={ImgSrc} alt="cover image" width="50%" height="10%s" layout="responsive" objectFit="none" quality={100} />

        <h1>{projectTitle}</h1>
        <h3>{descriiption}</h3>
        <span>{date}</span>
        <div>{tags}</div>
      </div>
    </>
  )
}
