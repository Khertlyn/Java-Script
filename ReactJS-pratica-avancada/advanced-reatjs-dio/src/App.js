import React, { Fragment } from 'react';

const store = ['', '', '']

function Column() {
    return (
        <tr>
            <td> Tênis </td>
            <td> Roupa </td>
        </tr>
    )
}

function App(){

    const renderColumns = (element, key) => {
        <Fragment key={`Column-${key}`}>
            <Column />
        </Fragment>
    }
    return (
        <>
        <h1>teste</h1>
        <table>
            {store.map(renderColumns)}
        </table>
        </>
    )
}

export default App