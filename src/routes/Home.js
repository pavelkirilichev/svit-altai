import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="wrapper">
      <Header cartPrice={2120} />
      <div className="home__main"></div>
      <Footer />
    </div>
  );
}

export default Home;
