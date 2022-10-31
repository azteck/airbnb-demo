import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import LargeCard from '../components/cards/LargeCard';
import MediumCard from '../components/cards/MediumCard';
import SmallCard from '../components/cards/SmallCard';
import data from '../data/data.js';

/* TODO - Replace data.js and retrieve exploreData, cardsData from server (server side rendering) and pass as props
export default function Home({exploreData, cardsData}) {
 */
export default function Home() {
  const exploreData = data.exploreNearby;
  const cardsData = data.cardsData;

  return (
    <div className=" bg-white">
      <Head>
        <title>Airbnb - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <Banner />

      <main className="max-w-5xl mx-auto px-8 sm:px-16 bg-white">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 text-gray-900">
            Explore Nearby
          </h2>
          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img} //ideally use a unique identifier
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8 text-gray-900">
            Live Anywhere
          </h2>
          {/* Pull some data from a server - API endpoints */}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard
                key={img} //ideally use a unique identifier
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

// Server Side Rendering - Rendered on server "One Time" -- Not working -- Using data.js now
/* export async function getStaticProps() {
  try {
    const exploreData = await fetch('https://links.papareact.com/pyp').then(
      (res) => res.json
    );

    const cardsData = await fetch('https://links.papareact.com/zp1').then(
      (res) => res.json
    );

    return {
      props: {
        exploreData,
        cardsData,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        exploreData: null,
        cardsData: null,
      },
    };
  }
} */
