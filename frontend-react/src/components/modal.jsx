import React, { useEffect } from 'react'
import PrimaryButton from './primarybutton'

export default function Modal({ open, onClose, children }) {
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        <h2 style={{marginTop: 4, marginBottom: 8}}>Welcome to Rico Cars</h2>
        <p className="text-sm text-gray-600">This is a modal.</p>
        <div style={{marginTop: 12, display: 'flex', justifyContent: 'flex-end'}}>
          <PrimaryButton onClick={onClose}>Close</PrimaryButton>
        </div>
        {children}
      </div>
    </div>
  )
}
