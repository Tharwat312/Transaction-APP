import React from 'react'

export default function Search({ searchByName,searchByAmount}) {
    return (
        <div className="d-flex align-items-center justify-content-between my-4">
            <div className="form-floating w-48">
                <input
                    type="text"
                    className="form-control border-0 my-1"
                    id="floatingInput1"
                    placeholder="Ahmed Ali"
                    onChange={(e) => searchByName(e.target.value)}
                />
                <label htmlFor="floatingInput1">Search by name</label>
            </div>
            <div className="form-floating w-48">
                <input
                    type="number"
                    className="form-control border-0 my-1"
                    id="floatingInput2"
                    placeholder="5000"
                    onChange={(e) => searchByAmount(e.target.value)}
                />
                <label htmlFor="floatingInput2">Search by amount</label>
            </div>
        </div>
    )
}
