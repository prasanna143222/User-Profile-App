const Icons = {
  Heart: ({ filled = false }) => (
    <svg className="info-icon" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeWidth="2"/>
    </svg>
  ),
  Edit: () => (
    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeWidth="2"/>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeWidth="2"/>
    </svg>
  ),
  Delete: () => (
    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <polyline points="3,6 5,6 21,6" strokeWidth="2"/>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeWidth="2"/>
    </svg>
  ),
  Mail: () => (
    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2"/>
      <polyline points="22,6 12,13 2,6" strokeWidth="2"/>
    </svg>
  ),
  Phone: () => (
    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2"/>
    </svg>
  ),
  Globe: () => (
    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
      <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2"/>
    </svg>
  ),
  Building: () => (
    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M3 21h18" strokeWidth="2"/>
      <path d="M5 21V7l8-4v18" strokeWidth="2"/>
      <path d="M19 21V11l-6-4" strokeWidth="2"/>
    </svg>
  ),
  Home: () => (
    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeWidth="2"/>
      <polyline points="9,22 9,12 15,12 15,22" strokeWidth="2"/>
    </svg>
  )
};

export default Icons;