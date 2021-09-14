import axios from "axios";

export default axios.create({
    baseURL: 'https://firebase-react-quiz-default-rtdb.europe-west1.firebasedatabase.app/'
})