import React, { createContext, useState } from 'react'
export const store = createContext()

const StudentsList = (props) => {
    const [data, SetData] = useState([
        {
            "id": 1,
            "name": "Ace",
            "age": "22",
            "course": "FSD",
            "batch": "May",
        },


    ])
    return (
        <div>
            <store.Provider value={[data, SetData]}>
                {
                    props.children
                }
            </store.Provider>
        </div>
    )
}

export default StudentsList;