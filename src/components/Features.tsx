export default function Features() {
  const features = [
    {
      icon: '🚌',
      title: 'Comfort on board',
      description: 'Our modern buses are equipped with large and comfortable reclining seats, toilets, Wi-Fi and power outlets.',
      subtext: 'USB plugs & A/C'
    },
    {
      icon: '🛡️',
      title: 'Safety & Trust',
      description: 'Less worries with real time GPS tracking modern buses & host supervision.',
      subtext: ''
    },
    {
      icon: '💳',
      title: 'Travel made easy',
      description: 'Hassle free booking & secure payment system.',
      subtext: ''
    },
    {
      icon: '🌍',
      title: 'Largest global bus brand',
      description: 'Trusted by 400+ million travelers around the world, discover India with Flixbus.',
      subtext: ''
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
              {feature.subtext && (
                <p className="text-sm text-gray-500 mt-1">
                  {feature.subtext}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
