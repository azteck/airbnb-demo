import { format } from 'date-fns';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import data from '../data/data.js';

/* TODO - Replace data.js and retrieve searchResults from server (server side rendering) and pass as props
function Search({searchResults}) {
*/
function Search() {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), 'dd MMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const searchResults = data.searchResults;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />

      <main className="flex bg-white text-gray-800">
        <section className="flex-grow pt-4 px-6">
          <p className="text-xs mt-4">
            300+ Stays - {range} - for {numOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            {' '}
            Stays in {location}
          </h1>

          <div className="hidden sm:inline-flex px-4 space-x-3 mb-2 text-xs whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms & Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img} //TODO - use an ID
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

// Server Side Rendering - Rendered on each page load
/* export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
} */
