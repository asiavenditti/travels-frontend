import React from 'react';

export default function Footer() {
    return (
        <footer
            className="text-center text-white py-3"
            style={{ backgroundColor: '#003366' }}
        >
            <div className="container">
                &copy; {new Date().getFullYear()} Tutti i diritti riservati.
            </div>
        </footer>
    );
}
