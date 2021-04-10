import React from 'react'
import '../styles/Footer.css';

function Footer() {
    return (
        <div>
            <footer className="page-footer">
                <nav className="navbar fixed-bottom navbar-light bg-light">
                    <div className="container-fluid">
                        <p>&copy; Bryan Krauss 2021 | <a href="https://www.bryankrauss.ca" target="_blank" rel="noopener noreferrer">Website</a> | <a href="https://github.com/BryanGK" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://www.linkedin.com/in/bryan-krauss-556b3a200/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </p>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer