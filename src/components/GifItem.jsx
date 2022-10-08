
export const GifItem = ({ title, url, id }) => {
  
  // console.log({ title, url, id })
  
  return (
    <div className="card">
      <a href={url} target="_blank">
      <img src={ url } alt={ title } title={title} />
      </a>
    </div>
  )
}
