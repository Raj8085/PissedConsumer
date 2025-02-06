export default function GoldCard() {
    return (
      <div className="min-h-screen bg-neutral-200 flex flex-col items-center justify-center p-4">
        {/* Card Container with perspective */}
        <div className="perspective-1000 mb-16 w-full max-w-lg">
          {/* Card with 3D rotation */}
          <div 
            className="relative w-full aspect-[1.586/1] rounded-2xl transform rotate-y-[-5deg] rotate-x-[5deg]"
            style={{
              background: 'linear-gradient(135deg, #e5c476 0%, #c5a44c 50%, #e5c476 100%)',
              boxShadow: '0 50px 100px -20px rgba(0,0,0,0.25), 0 30px 60px -30px rgba(0,0,0,0.3)',
            }}
          >
            {/* Chip */}
            <div className="absolute left-12 top-32 w-12 h-10 rounded-md bg-neutral-300/90" />
            
            {/* Logo */}
            <div className="absolute top-8 right-8 w-10 h-10 opacity-30">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
        </div>
  
        {/* Text Content */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif">
            Earn more than ever
          </h1>
          
          <div className="space-y-4">
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium">
              Reserve your spot
            </button>
            <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
              <span className="w-1 h-1 rounded-full bg-neutral-400" />
              <span>Terms apply</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // Add required CSS
  const styles = `
    .perspective-1000 {
      perspective: 1000px;
    }
    
    .rotate-y-\\[-5deg\\] {
      transform: rotateY(-5deg);
    }
    
    .rotate-x-\\[5deg\\] {
      transform: rotateX(5deg);
    }
  `
  
  // Add the styles to the document
  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style')
    styleSheet.textContent = styles
    document.head.appendChild(styleSheet)
  }
  
  