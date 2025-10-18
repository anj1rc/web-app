import React from 'react'

function Card({ car, onClick }) {
	return (
		<div onClick={() => onClick(car)} className="card">
			<div className="card-media centered" style={{height: 140, backgroundColor: '#f3f4f6', borderRadius: 6}}>
					{car.image ? (
						<img src={car.image} alt={`${car.make} ${car.model}`} loading="lazy" />
					) : (
						<span className="text-sm text-gray-500">Image</span>
					)}
			</div>
			<div className="mt-3">
				{car.make && car.model && (
					<span className="text-sm text-gray-500">{car.make} {car.model}</span>
				)}
				<h3 className="text-lg font-semibold text-gray-900">{car.make} {car.model}</h3>
				<p className="text-sm text-gray-600">
					{car.year} •{' '}
					<span
						className="color-swatch"
						title={car.color}
						style={{
							backgroundColor: (car.color || '').toLowerCase(),
							display: 'inline-block',
							width: 12,
							height: 12,
							borderRadius: '50%',
							verticalAlign: 'middle',
							marginRight: 8,
							border: ['white', '#fff', 'lightyellow'].includes((car.color || '').toLowerCase()) ? '1px solid #d1d5db' : '1px solid transparent'
						}}
					/>
					<span className="color-label">{car.color}</span>
				</p>
				<p className="mt-2 font-medium">${car.price}</p>
			</div>
		</div>
	)
}

export default Card
