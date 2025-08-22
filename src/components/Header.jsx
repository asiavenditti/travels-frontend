import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#007BFF' }}>
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4" to="/">
                    <i className="bi bi-airplane-fill me-2"></i>
                </Link>

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link fw-semibold fs-5">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
