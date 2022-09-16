import React from 'react'

export default function NavBar() {
    return (
        <div className="d-flex border-bottom pb-15 pt-15">
            <div className="me-auto ">
                <h2 className="page-title">Dashboard</h2>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb  m-0">
                        <li className="breadcrumb-item"><a href="#">breadcrumb 01</a></li>
                        <li className="breadcrumb-item"><a href="#">breadcrumb 02</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}
