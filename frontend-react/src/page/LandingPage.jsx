import React, { useState } from 'react'
import PrimaryButton from '../components/primarybutton'
import Modal from '../components/modal'
import Sidepanel from '../components/sidepanel'

const icons = [
  {
    key: 'quality',
    title: 'Quality Checked',
    desc: 'Every vehicle undergoes a multi-point inspection.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2l3 2 4 .5v5.5c0 4-3 7-7 9-4-2-7-5-7-9V4.5L9 4 12 2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: 'price',
    title: 'Transparent Pricing',
    desc: 'No hidden fees — what you see is what you pay.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M9 10h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'finance',
    title: 'Easy Financing',
    desc: 'Flexible plans tailored to your budget.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M7 10h.01M11 10h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
]

function LandingPage({ onBrowse }) {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isPanelOpen, setPanelOpen] = useState(false)
  const heroImage = new URL('../assets/car-gallery/car-shop.jpg', import.meta.url).href

  return (
    <div>
      <div className="app-container">
        <section className="landing-hero">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">Rico Cars</h1>
              <p className="hero-sub">Premium used cars and trusted service. Quick searches, transparent pricing, and flexible financing to get you on the road quickly.</p>
              <div style={{marginTop: 16}}>
                <PrimaryButton onClick={onBrowse}>Browse Cars</PrimaryButton>
                <PrimaryButton onClick={() => setModalOpen(true)} style={{marginLeft: 12}}>Modal</PrimaryButton>
                <PrimaryButton onClick={() => setPanelOpen(true)} style={{marginLeft: 12}}>Side Panel</PrimaryButton>
              </div>
            </div>

            <div className="hero-image">
              <img src={heroImage} alt="Rico Cars selection" />
            </div>
          </div>
        </section>
      </div>

      <div className="app-container">
        <section style={{padding: '2rem 0'}}>
          <h2 className="text-2xl font-semibold mb-4">Why choose Rico Cars?</h2>
          <div className="why-grid">
            {icons.map(i => (
              <div key={i.key} className="card why-card">
                <div className="why-icon" aria-hidden>
                  {i.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{i.title}</h3>
                  <p className="text-sm text-gray-600">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer style={{padding: '2rem 0', borderTop: '1px solid #e5e7eb', marginTop: 24}}>
        <div className="app-container">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Rico Cars — All rights reserved.</p>
        </div>
      </footer>
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        {/* Empty by design */}
      </Modal>
      <Sidepanel open={isPanelOpen} onClose={() => setPanelOpen(false)}>
        {/* Empty by design */}
      </Sidepanel>
    </div>
  )
}

export default LandingPage
