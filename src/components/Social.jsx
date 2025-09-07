import rect9 from '../assets/cups/Rectangle 9.png';
import rect10 from '../assets/cups/Rectangle 10.png';
import rect11 from '../assets/cups/Rectangle 11.png';
import rect12 from '../assets/cups/Rectangle 12.png';
import rect13 from '../assets/cups/Rectangle 13.png';
import rect14 from '../assets/cups/Rectangle 14.png';
import rect15 from '../assets/cups/Rectangle 15.png';
import rect16 from '../assets/cups/Rectangle 16.png';

const cups = [rect9, rect10, rect11, rect12, rect13, rect14, rect15, rect16];

export default function FollowUs() {
  return (
    <section className="px-[8%] py-16 px-6 bg-[#ECEAE3] text-center">
      <h1 className='pt-5 text-gray-700 text-center'>--- Follow us Now ---</h1>
      <h1 className='pt-5 text-gray-700 text-center font-rancho text-4xl'>Follow on Instagram</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {cups.map((cup, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow hover:scale-105 transition-transform duration-300">
            <img src={cup} alt={`Coffee Cup ${idx + 9}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
