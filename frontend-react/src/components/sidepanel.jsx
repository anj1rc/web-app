import React, { useEffect } from 'react'
import PrimaryButton from './primarybutton'

export default function Sidepanel({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="sidepanel-overlay" onClick={onClose}>
      <aside className="sidepanel" role="complementary" onClick={(e) => e.stopPropagation()}>
        <button className="sidepanel-close" onClick={onClose} aria-label="Close panel">×</button>
        <h3 style={{marginTop: 4}}>Sidepanel</h3>
        <p className="text-sm text-gray-600">This is a side panel.</p>
        <div style={{marginTop: 12, display: 'flex', justifyContent: 'flex-end'}}>
          <PrimaryButton onClick={onClose}>Close</PrimaryButton>
        </div>
        {children}
      </aside>
    </div>
  )
}
