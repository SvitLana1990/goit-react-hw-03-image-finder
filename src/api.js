import axios from "axios";

const API_KEY = '39758797-2603f3af911ae2369cae9d72d';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (valueSearch) => {
const response = await axios.get(`?key=${API_KEY}&q=${valueSearch}`);
    return response.data;
}

// export async function fetchImages(valueForm,page) {
//     try {
//         const response = await axios.get('https://pixabay.com/api/', {
//             params: {
//                 key: API_KEY,
//                 q: valueForm,
//                 image_type: 'photo',
//                 orientation: 'horizontal',
//                 safesearch: true,
//                 per_page: 12,
//                 page: page,
//             },
//         });
//         return await response.data;
//     } catch (error) {
//         return Notiflix.Report.failure(
//         'Oops! Something went wrong! Try reloading the page!',
//       );
//     }
// }