import React, { useMemo, useState } from 'react'
import Card from '../components/card'
import PrimaryButton from '../components/primarybutton'

const cars = [
	{ id: 1, make: 'Toyota', model: 'Corolla', year: 2020, color: 'White', price: 18000, image: new URL('../assets/car-gallery/toyota-corolla.png', import.meta.url).href },
	{ id: 2, make: 'Honda', model: 'Civic', year: 2019, color: 'Black', price: 17000, image: new URL('../assets/car-gallery/honda-civic.jpg', import.meta.url).href },
	{ id: 3, make: 'Ford', model: 'Focus', year: 2018, color: 'Blue', price: 15000, image: new URL('../assets/car-gallery/ford-focus.jpg', import.meta.url).href },
	{ id: 4, make: 'BMW', model: '3 Series', year: 2021, color: 'Gray', price: 32000, image: new URL('../assets/car-gallery/bmw-3series.jpg', import.meta.url).href },
	{ id: 5, make: 'Audi', model: 'A4', year: 2022, color: 'Red', price: 35000, image: new URL('../assets/car-gallery/audi-a4.jpg', import.meta.url).href },
	{ id: 6, make: 'Tesla', model: 'Model 3', year: 2023, color: 'White', price: 42000, image: new URL('../assets/car-gallery/tesla-model3.jpg', import.meta.url).href },
]

function Listing({ onSelect }) {
	const [query, setQuery] = useState('')
	const [page, setPage] = useState(1)
	const pageSize = 6 
	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase()
		if (!q) return cars
		return cars.filter(c => {
			return (
				c.make.toLowerCase().includes(q) ||
				c.model.toLowerCase().includes(q) ||
				String(c.year).includes(q) ||
				(c.color && c.color.toLowerCase().includes(q))
			)
		})
	}, [query])

	const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
	const current = useMemo(() => {
		const start = (page - 1) * pageSize
		return filtered.slice(start, start + pageSize)
	}, [page, filtered])

	function goto(p) {
		setPage(Math.min(Math.max(1, p), totalPages))
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className="app-container">
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12}}>
				<h2 className="text-2xl font-semibold">Car Listings</h2>
				<div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
					<input aria-label="Search cars" placeholder="Search make, model, year, color" value={query} onChange={e => { setQuery(e.target.value); setPage(1) }} style={{padding: '0.5rem 0.75rem', borderRadius: 8, border: '1px solid #e5e7eb'}} />
				</div>
			</div>

			<div className="listing-grid">
				{current.map(car => (
					<Card key={car.id} car={car} onClick={onSelect} />
				))}
			</div>

			
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 16}}>
				<PrimaryButton onClick={() => goto(page - 1)} disabled={page === 1}>Prev</PrimaryButton>
				{Array.from({length: totalPages}, (_, i) => (
					<button key={i} onClick={() => goto(i + 1)} style={{padding: '0.4rem 0.6rem', borderRadius: 6, border: page === i+1 ? '1px solid var(--color-primary)' : '1px solid transparent', background: page === i+1 ? 'rgba(100,108,255,0.08)' : 'transparent'}}>
						{i + 1}
					</button>
				))}
				<PrimaryButton onClick={() => goto(page + 1)} disabled={page === totalPages}>Next</PrimaryButton>
			</div>
		</div>
	)
}

export default Listing
