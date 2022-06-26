import React from "react";
import { useState } from "react";
import './Calculator.css'

const Calculator = () => {

    const [box1, setBox1] = useState('')
    const [box2, setBox2] = useState('')
    const [operator, setOperator] = useState('+')
    const [answer, setAnswer] = useState('0')

    const calculate = (num1, num2, op) => {
        switch (op) {
            case '+':
                setAnswer(num1 + num2)
                break
            case '-':
                setAnswer(num1 - num2)
                break
            case 'x':
                setAnswer(num1 * num2)
                break
            case '/':
                setAnswer(num1 / num2)
                break
            default:
                setAnswer(null)
        }
        if (num1 === 0 && num2 === 0 && op === '/') {
            setAnswer('Not a number')
        }
    }

    const onClick = () => {
        if ((box1 || box1 === 0) && (box2 || box2 === 0)) {
            calculate(Number(box1), Number(box2), operator)
        } else {
            setAnswer('')
        }
    }

    return (
        <div className='calculatorContainer'>
            <input type='text' name='box1' className='textBox' onChange={(event) => { setBox1(event.target.value) }}/>
            <select name='operator' className='operator' onChange={(event) => { setOperator(event.target.value) }}>
                <option>+</option>
                <option>-</option>
                <option>x</option>
                <option>/</option>
            </select>
            <input type='text' name='box2' className='textBox' onChange={(event) => { setBox2(event.target.value) }} />
            <button name='equals' className='equals' onClick={() => onClick() }>=</button>
            <input type='text' name='answer' className='textBox' value={answer || answer === 0 ? answer : ''}/>
            {answer || answer === 0 ? null : <div className='errorMessage'>Hmm. Try using a number, silly!</div>}
        </div>
    )
}

export default Calculator