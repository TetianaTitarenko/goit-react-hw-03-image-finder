const BASE_URL = `https://pixabay.com/api/`
const KEY = `33016808-d330fe94469becbda09795ec3`
export const getImg = (searchText) => fetch(`${BASE_URL}?q=${searchText}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)