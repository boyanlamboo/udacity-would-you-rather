import {
    _getQuestions,
    _getUsers,
    //_saveQuestionAnswer,
    //_saveQuestion
} from './_DATA.js'


export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}