import React from 'react'

export default function SiderBar() {
    return (
        <div className="sidebar shadow">
            <div className="main-bar">
                <div className="logo"></div>
                <div className="m-icons">
                    <ul>
                        <li>
                            <a href="javascript:void(0);" className="active"><img src="assets/img/ico-1.svg" alt="" /></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><img src="assets/img/ico-2.svg" alt="" /></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><img src="assets/img/ico-3.svg" alt="" /></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><img src="assets/img/ico-4.svg" alt="" /></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><img src="assets/img/ico-5.svg" alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="det-bar">
                <div className="main-title">
                    <span className="float-start mt-5 pr-10 pl-5"><img src="assets/img/pro-1.svg" /></span>
                    <h1>Product Name</h1>
                </div>

                <ul>
                    <li></li>
                </ul>
                <ul>
                    <li>
                        <a className="nav-link collapsed sub" href="#demo" data-bs-toggle="collapse" data-target="#demo">
                            <span>Dashboard</span>
                        </a>

                        <ul className="list-group collapse show" id="demo">
                            <li className="list-group-item"><a href="">Menu </a></li>
                            <li className="list-group-item"><a href="">Menu </a></li>
                            <li className="list-group-item"><a href="">Menu </a></li>
                        </ul>
                    </li>
                </ul>
                <li> <a className="nav-link collapsed" href="#demo" data-bs-toggle="collapse" data-target="#demo">
                    <span>User Board</span>
                </a></li>
                <li> <a className="nav-link collapsed" href="#demo" data-bs-toggle="collapse" data-target="#demo">
                    <span>Masters</span>
                </a></li>
                <li> <a className="nav-link collapsed" href="#demo" data-bs-toggle="collapse" data-target="#demo">
                    <span>Reports</span>
                </a></li>
                <li> <a className="nav-link collapsed" href="#demo" data-bs-toggle="collapse" data-target="#demo">
                    <span>Menu item</span>
                </a></li>
                <li> <a className="nav-link collapsed" href="#demo" data-bs-toggle="collapse" data-target="#demo">
                    <span>User Board</span>
                </a></li>
                <li> <a className="nav-link collapsed" href="#demo" data-bs-toggle="collapse" data-target="#demo">
                    <span>Masters</span>
                </a></li>
                <li> <a className="nav-link collapsed" href="#demo" data-bs-toggle="collapse" data-target="#demo">
                    <span>Reports</span>
                </a></li>
                <li> <a className="nav-link collapsed" href="#demo" data-bs-toggle="collapse" data-target="#demo">
                    <span>Menu item</span>
                </a></li>
            </div>

        </div >
    )
}
