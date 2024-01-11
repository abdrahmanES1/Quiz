export default function isResponsesCorrect(correctAnswers, userResponses) {
    return correctAnswers.sort().toString() === userResponses.sort().toString();

}