import React from 'react'

const Mapfilter = () => {
    const arr = ["React", "node", "mongo", "express", "React js"];

    const filtered = arr.filter((name) => name.includes("R"));

    const arrObj = [{id:1, title: 'react'}, {id:2, title: 'node'}, {id:3, title: 'mongo'}]
    return (
        <div>
            <center>
                {
                    arr.map((value, index) => <li key={index}>{value}</li>)
                }
                {
                    arrObj.map((value) => <li key={value.id}>{value.id}</li>)
                }
                {
                    filtered.map((item, index) => <li key={index}>{item}</li>)
                }
            </center>
        </div>
    )
}

export default Mapfilter
