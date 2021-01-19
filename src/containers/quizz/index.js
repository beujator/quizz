import React, { useState } from 'react'

const Example = () => {
    const [selectedOption, setSelectedOption] = useState('a')
    const [listQuestions] = useState([{
        id: 1,
        question: 'Question 1',
        reponses: [
            { name: 'Réponse a', value: 'a' },
            { name: 'Réponse b', value: 'b' },
            { name: 'Réponse c', value: 'c' }]
    },
        {
            id: 1,
            question: 'Question 2',
            reponses: [
                { name: 'Réponse a', value: 'a' },
                { name: 'Réponse b', value: 'b' },
                { name: 'Réponse c', value: 'c' }]
        },
        {
            id: 1,
            question: 'Question 3',
            reponses: [
                { name: 'Réponse a', value: 'a' },
                { name: 'Réponse b', value: 'b' },
                { name: 'Réponse c', value: 'c' }]
        }])
    const [step, setStep] = useState(0);

    const handleOptionChange = (changeEvent) => {
        console.log('change event: ', changeEvent);
        setSelectedOption(changeEvent.target.value)
        if (step < listQuestions.length - 1) {
            setStep(step+1)
        }

    }

    const getRadioButton = ({ name, value }) => {
        return (
            <div className="form-check">
                <label>
                    <input type="radio"
                           name={name}
                           value={value}
                           checked={selectedOption === value}
                           onChange={handleOptionChange}/>
                    {value}
                </label>
            </div>
        )
    }

    const makeForm = (question) => {
        return (
            <div>
                <label>
                    {question.question}
                </label>
                {question.reponses.map(x => getRadioButton(x))}
            </div>
        )
    }

    return makeForm(listQuestions[step])
}

export default Example
