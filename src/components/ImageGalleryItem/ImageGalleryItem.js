import css from "components/ImageGalleryItem/ImageGalleryItem.module.css"

export const ImageGalleryItem = ({imgs}) => {
    return <ul className={css.ImageGallery}> {imgs.map(img => {
      return <li key={img.id} className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src={img.webformatURL} alt="" />
    </li>})}
</ul>}