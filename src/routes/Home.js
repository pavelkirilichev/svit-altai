import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMob from "../components/FooterMob";
import RegForm from "../components/RegForm";
import LoginForm from "../components/LoginForm";
import RecChoise from "../components/RecChoise";
import RecMail from "../components/RecMail";

function Home() {
  return (
    <div className="wrapper">
      <Header cartPrice={2120} />
      <div className="home__main">
        <RegForm />
        <LoginForm />
        <RecChoise />
        <RecMail />
      </div>
      <Footer />
      <FooterMob cartPrice={212000} />
    </div>
  );
}

export default Home;
