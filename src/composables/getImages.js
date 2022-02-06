import { ref } from 'vue';
import Swal from 'sweetalert2'
const error = ref(null)

const getImages = async (searchTerm) => {
    error.value = null

    try {
        const data = await fetch(`https://api.pexels.com/v1/search/?page=2&per_page=4&query=${searchTerm}&locale=es-ES`,{
            headers: {  Authorization: '563492ad6f91700001000001d665965cba5d4cfb86f707c9eea6dcdf' }
        })
        const images = await data.json()
        const { photos } = images
        const imageSource = []
        photos.forEach(pic => {
            imageSource.push(pic.src.medium)
        })
        if (photos.length < 4) {
            error.value = 'no se encontraron resultados para tu busqueda, intenta con otra palabra'
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.value,
            })
        }
       return imageSource
    } catch (e) {
        error.value = e.message;
    }
}


const useGetImage = () => {
  return { error, getImages};
}

export default useGetImage