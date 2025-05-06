import Hero from '../components/Hero' ;
import HeroCard from '../components/HeroCard';
import JobListing from '../components/JobListing';
import ViewAll from '../components/ViewAll'
const Home = () => {
    return (
        <>
            <Hero />
            <HeroCard />
            <JobListing isHome={true} />
            <ViewAll />
        </>
    )
}

export default Home
