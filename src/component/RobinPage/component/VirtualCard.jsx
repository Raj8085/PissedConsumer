export default function VirtualCards() {
    return (
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4">
        {/* Text Content */}
        <div className="text-center mb-16 space-y-2 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
            Take control with
            <br />
            virtual cards
          </h1>
          <p className="text-neutral-400 text-sm">
            Pay with disposable card numbers for smarter, more private spending.
          </p>
        </div>
  
        {/* Cards Stack */}
        <div className="mr-28 w-[20rem] relative max-w-lg aspect-[1.586/1] perspective-1000">
          {/* Generate multiple cards with different positions */}
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="absolute inset-0 w-full h-full rounded-2xl transition-transform duration-500"
              style={{
                transform: `
                  rotateY(-20deg)
                  rotateX(20deg)
                  translateX(${index * 20}px)
                  translateY(${index * -10}px)
                `,
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
          ))}
        </div>
      </div>
    )
  }
  
  // Add required CSS
  const styles = `
    .perspective-1000 {
      perspective: 1000px;
    }
  `
  
  // Add the styles to the document
  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style')
    styleSheet.textContent = styles
    document.head.appendChild(styleSheet)
  }
  
  