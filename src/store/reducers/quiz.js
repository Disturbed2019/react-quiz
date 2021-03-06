import {
    FETCH_QUIZES_ERROR,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS,
    QUIZ_SET_STATE,
    FETCH_QUIZ_ERROR,
    FETCH_QUIZ_SUCCESS,
    FINISH_QUIZ,
    QUIZ_NEXT_QUESTION,
    QUIZ_RETRY
} from "../actions/actionsTypes";

const initialState = {
    quizes:[],
    loading: false,
    error:null,
    results: {},
    isFinished: false,
    activeQuestion:0,
    answerState:null,
    quiz: null,
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUIZES_START:
            return {
                ...state,loading: true
            }
        case FETCH_QUIZES_SUCCESS:
            return {
                ...state, loading: false, quizes: action.quizes
            }
        case FETCH_QUIZES_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        case FETCH_QUIZ_SUCCESS:
            return {
                ...state, loading: false, quiz: action.quiz
            }
        case FETCH_QUIZ_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        case QUIZ_SET_STATE:
            return {
                ...state, answerState: action.answerState, results: action.results
            }

        case QUIZ_NEXT_QUESTION:
            return {
                ...state, activeQuestion: action.number, answerState: null
            }
        case FINISH_QUIZ:
            return {
                ...state, isFinished: true
            }
        case QUIZ_RETRY:
            return {
                ...state, activeQuestion:0, answerState: null, isFinished: false, results:{}
            }




        default:
            return state
    }
}