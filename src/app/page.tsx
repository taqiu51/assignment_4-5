// src/app/page.tsx
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'Breaking the Chains',
    description: 'Inspiring Stories of Overcoming Drug Addiction  ',
    image: 'https://img.freepik.com/premium-photo/concept-health-red-medicine-hospital-background-care-stethoscope_1022026-53143.jpg',
  },
  {
    id: 2,
    title: 'The Science of Addiction',
    description: 'How Drugs Affect the Brain and Body ',
    image: 'https://insightssuccess.com/wp-content/uploads/2024/09/How-Long-Does-It-Take-to-Rewire-the-Brain-After-Addiction.jpg',
  },
  {
    id: 3,
    title: 'Prevention Starts Early',
    description: 'How to Talk to Teens About Drug Use ',
    image: 'https://www.shutterstock.com/image-vector/no-drugs-say-poster-banner-260nw-2253712431.jpg',
  },
  {
    id: 4,
    title: 'The Role of Mental Health',
    description: 'The Role of Mental Health in Addiction Recovery',
    image: 'https://images.pexels.com/photos/6136085/pexels-photo-6136085.jpeg',
  },
  {
    id: 5,
    title: 'Community Support ',
    description:  'The Power of Group Therapy and Rehab Programs',
    image: 'https://www.shutterstock.com/image-photo/hands-doctor-teamwork-below-hospital-260nw-2211550181.jpg',
  },
  {
    id: 6,
    title: 'Myths and Facts',
    description: ' Debunking Common Misconceptions About Drug Addiction',
    image: 'https://platinumtherapylights.com/cdn/shop/articles/Myths_About_Red_Light_Therapy.png?v=1719688130&width=1100',
  },
];

export default function HomePage() {
  return (
    <div className="container   mx-auto px-4 py-8">
      <h2 className="text-3xl  font-bold text-center text-red-500 capitalize mb-8">ANTI DRUG ADDICTION</h2>
      <div className="grid  text-red-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div 
            key={blog.id}
            className="border bg-red-400 text-center text-black rounded-lg overflow-hidden transform hover:scale-105 shadow-lg hover:shadow-xl  transition-transform duration-300"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-black font-bold">{blog.title}</h3>
              <p className="mt-2  text-y" >{blog.description}</p>
              <Link href={`/blog/${blog.id}`}>
                <div className="text-white text-center p-4 rounded-3xl transition mt-4 block hover:bg-red-300 hover:text-black bg-red-500">Read More</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
