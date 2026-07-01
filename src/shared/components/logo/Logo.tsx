import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* Isotipo: The Monogram inside a rounded square */}
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="90" height="90" rx="20" stroke="url(#logoGradient)" strokeWidth="6" fill="transparent" />
        
        {/* Simplified modern YR interconnecting path */}
        <path 
          d="M 25 25 L 25 55 C 25 65 35 75 45 75 L 55 75 C 65 75 75 65 75 55 L 75 25" 
          stroke="url(#logoGradient)" 
          strokeWidth="8" 
          strokeLinecap="round" 
        />
        <path 
          d="M 75 45 L 75 55 C 75 70 60 70 50 70 C 40 70 25 70 25 55 L 25 25" 
          stroke="url(#logoGradient)" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeDasharray="10 5"
          style={{ opacity: 0.8 }}
        />
        <path 
          d="M 25 45 L 75 45" 
          stroke="url(#logoGradient)" 
          strokeWidth="8" 
          strokeLinecap="round" 
        />

        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f5af19" />
            <stop offset="1" stopColor="#f12711" />
          </linearGradient>
        </defs>
      </svg>

      {/* Logotipo: The Text */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ 
          fontSize: '22px', 
          fontWeight: 800, 
          letterSpacing: '1px', 
          color: 'var(--secondary-color)', 
          lineHeight: '1.1',
          fontFamily: 'var(--primary-font)'
        }}>
          INGENIEROS <span style={{ color: 'var(--primary-color)' }}>EIRL</span>
        </span>
        <span style={{ 
          fontSize: '9px', 
          fontWeight: 600, 
          letterSpacing: '0.5px', 
          color: 'var(--text-secondary-color)', 
          textTransform: 'uppercase',
          marginTop: '2px'
        }}>
          Diseño • Supervisión • Gestión • Construcción
        </span>
      </div>
    </div>
  );
};

export default Logo;
