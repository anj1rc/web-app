import React, { useState } from 'react'
import PrimaryButton from '../components/primarybutton'

function Order({ car, onBack }) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
		const [quantity, setQuantity] = useState(1)
		const [address, setAddress] = useState('')
		const [phone, setPhone] = useState('')

	if (!car) {
		return (
			<div className="app-container">
				<p>No car selected.</p>
				<PrimaryButton onClick={onBack}>Back to listings</PrimaryButton>
			</div>
		)
	}

		function submit(e) {
			e.preventDefault()
			if (!name || !email || !address || !phone || quantity < 1) {
				alert('Please fill out all required fields')
				return
			}
			const total = (Number(car.price) * Number(quantity)).toLocaleString(undefined, {style: 'currency', currency: 'PHP'})
			alert(`Order placed:\n- Car: ${car.make} ${car.model}\n- Qty: ${quantity}\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}\n- Address: ${address}\n- Total: ${total}`)
			onBack()
		}

	return (
		<div className="app-container">
			<div style={{marginBottom: 12}}>
				<PrimaryButton onClick={onBack}>Back</PrimaryButton>
			</div>

			<div className="order-grid">
				<div className="order-image card-media" style={{height: 280, borderRadius: 8}}>
					{car.image ? (
						<img src={car.image} alt={`${car.make} ${car.model}`} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8}} />
					) : (
						<div className="centered text-sm text-gray-500">No image</div>
					)}
				</div>

				<div className="order-form">
					<h2 className="text-2xl font-semibold">Order: {car.make} {car.model}</h2>
					<p className="text-sm text-gray-600">Price: ${car.price}</p>
					<div style={{marginTop: 6}}>
						<span style={{marginRight: 8}} className="text-sm">Color:</span>
						<span
							className="color-swatch"
							title={car.color}
							style={{
								backgroundColor: (car.color || '').toLowerCase(),
								display: 'inline-block',
								width: 14,
								height: 14,
								borderRadius: '50%',
								verticalAlign: 'middle',
								marginRight: 8,
								border: ['white', '#fff', 'lightyellow'].includes((car.color || '').toLowerCase()) ? '1px solid #d1d5db' : '1px solid transparent'
							}}
						/>
						<span className="text-sm">{car.color}</span>
					</div>

					<form onSubmit={submit} style={{display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12}}>
									<label>
										<div className="text-sm">Your name</div>
										<input className="w-full" value={name} onChange={e => setName(e.target.value)} required />
									</label>

									<label>
										<div className="text-sm">Email</div>
										<input className="w-full" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
									</label>

									<label>
										<div className="text-sm">Phone</div>
										<input className="w-full" type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
									</label>

									<label>
										<div className="text-sm">Quantity</div>
										<input className="w-full" type="number" min="1" value={quantity} onChange={e => setQuantity(Math.max(1, Number(e.target.value) || 1))} />
									</label>

									<label>
										<div className="text-sm">Delivery address</div>
										<textarea className="w-full" rows={3} value={address} onChange={e => setAddress(e.target.value)} required />
									</label>

									<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
										<div className="text-sm">Total: <strong>{(Number(car.price) * Number(quantity)).toLocaleString(undefined, {style: 'currency', currency: 'PHP'})}</strong></div>
										<PrimaryButton type="submit">Place Order</PrimaryButton>
									</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Order
