export const ImageGalleryItem = ({imgs}) => {
    return <ul> {imgs.map(img => {
      return <li key={img.id} className="gallery-item">
      <img src={img.webformatURL} alt="" />
    </li>})}
</ul>}