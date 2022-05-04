import React from 'react'
import CrudAdd from './CrudAdd';
import CrudEdit from './CrudEdit';
function Crud({testData, createOrUpdateCard, deleteCard}){
    return (
        <section>
            <h1>Alert List</h1>
            {Object.keys(testData).map(key => (
                <CrudEdit 
                    key={key}
                    testData={testData[key]}
                    createOrUpdateCard={createOrUpdateCard}
                    deleteCard={deleteCard}
                />
            ))}
            <CrudAdd createOrUpdateCard={createOrUpdateCard} />
        </section>
    )
}

export default Crud;