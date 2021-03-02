import React from 'react';
import ReactDom from 'react-dom';

const obj = { name : 'tom'};

const value1 = 123;
const value2 = 456;
const value3 = value1 === value2;

console.log('12');

function List() {
    const items = [1, 2, 3];
    return items.map((item) => <li key={item}>{item}</li>);
}

function App() {
    const condition = true;
    return (
        <div>
            <List />
            {value3}
            {condition ? 1 : 2}
        </div>
    );
}

ReactDom.render(<App />, '#root');
