export default function FamilyDesign() {
    return (
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white text-center mb-24">
          Designed for the
          <br />
          whole family
        </h1>
  
        {/* Content Container */}
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-4">
          {/* Family Figures */}
          <div className="relative aspect-square">
            <div className="absolute inset-0 flex items-end justify-center">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="mx-2 transform-gpu"
                  style={{
                    transform: `translateY(${-20 * index}px)`,
                  }}
                >
                  <div
                    className="w-12 md:w-16 aspect-[1/2] rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #ffd700 0%, #b8860b 50%, #ffd700 100%)',
                      boxShadow: '0 10px 30px -10px rgba(255, 215, 0, 0.3)',
                    }}
                  >
                    <div
                      className="w-full aspect-square rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #ffd700 0%, #b8860b 50%, #ffd700 100%)',
                      }}
                    />
                  </div>
                </div>
              ))}
              {/* Reflection */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent opacity-50" />
            </div>
            <p className="absolute bottom-0 left-0 text-neutral-600 text-xs">
              Add cardholders of any age, no minimum age limit.
            </p>
          </div>
  
          {/* Keys */}
          <div className="relative aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative w-48 h-48 transform rotate-45"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(255, 215, 0, 0.2))',
                }}
              >
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      transform: `rotate(${index * 30}deg)`,
                    }}
                  >
                    <div
                      className="w-32 h-2 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #ffd700 0%, #b8860b 50%, #ffd700 100%)',
                      }}
                    />
                    <div
                      className="w-8 h-8 rounded-full ml-32"
                      style={{
                        background: 'linear-gradient(135deg, #ffd700 0%, #b8860b 50%, #ffd700 100%)',
                      }}
                    />
                  </div>
                ))}
              </div>
              {/* Reflection */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent opacity-50" />
            </div>
            <p className="absolute bottom-0 right-0 text-neutral-600 text-xs text-right">
              Effortlessly track family spending, set spending limits, and lock lost cards instantly.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  