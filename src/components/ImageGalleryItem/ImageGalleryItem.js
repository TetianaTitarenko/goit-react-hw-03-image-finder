export const ImageGalleryItem = ({img}) => {
    return <li key={img.id} className="gallery-item">
    <img src={img.webformatURL} alt="" />
  </li>}