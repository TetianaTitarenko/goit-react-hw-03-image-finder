import css from "components/ImageGalleryItem/ImageGalleryItem.module.css"

export const ImageGalleryItem = ({ imgs, onOpen }) => {
  return (    
    <ul className={css.ImageGallery}>
      {imgs.map(img => {
        return (
          <li
            key={img.id}
            className={css.ImageGalleryItem}
            onClick={() => onOpen(img)}
          >
            <img
              className={css.ImageGalleryItemImage}
              src={img.webformatURL}
              alt=""
            />
          </li>
        );
      })}
    </ul>
  );
};
