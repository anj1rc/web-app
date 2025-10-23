import React from 'react'

function Navbar({ onNavigate }) {
	return (
		 <header className="site-header" role="navigation">
			<div className="site-title">Rico Cars</div>
			<nav className="site-nav" aria-label="Main navigation">
			<button aria-label="Go to Home" onClick={() => onNavigate('home')}>Home</button>
			<button aria-label="Go to Cars listing" onClick={() => onNavigate('listing')}>Cars</button>
			<button aria-label="Go to Order" onClick={() => onNavigate('order')}>Order</button>
			</nav>
		 </header>
	)
}

export default Navbar
