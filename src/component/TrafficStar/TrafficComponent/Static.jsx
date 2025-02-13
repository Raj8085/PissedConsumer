const stats = [
    { number: '7+', label: 'Billion Impressions Daily' },
    { number: '200+', label: 'Countries' },
    { number: '1,000+', label: 'Advertisers' }
  ]
  
  export default function StatisticsSection() {
    return (
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  