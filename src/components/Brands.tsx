export default function Brands() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
          Top travel choice for <span className="text-flixbus-green">9+ crore</span> people in 2024.
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          <div className="text-2xl font-bold text-gray-900">FLiXBUS</div>
          <div className="text-2xl font-bold text-gray-900">FLiXTRAiN</div>
          <div className="text-2xl font-bold text-gray-900" style={{fontFamily: 'cursive'}}>greyhound</div>
          <div className="text-2xl font-bold text-gray-900">KAMiLKOÇ</div>
        </div>
      </div>
    </section>
  );
}
