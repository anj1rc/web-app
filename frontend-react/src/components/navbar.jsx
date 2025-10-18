import React from 'react'

function Navbar({ onNavigate }) {
	return (
		 <header className="site-header">
			<div className="site-title">Rico Cars</div>
			<nav className="site-nav" aria-label="Main navigation">
			<button onClick={() => onNavigate('home')}>Home</button>
			<button onClick={() => onNavigate('listing')}>Cars</button>
			<button onClick={() => onNavigate('order')}>Order</button>
			</nav>
		 </header>
	)
}

export default Navbar
