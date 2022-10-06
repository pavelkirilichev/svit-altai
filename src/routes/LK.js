import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMob from "../components/FooterMob";
import LK_1 from "../components/LK_1";
import LK_2 from "../components/LK_2";
import LK_3 from "../components/LK_3";
import LK_4 from "../components/LK_4";

function LK() {
  return (
    <div className="wrapper">
      <Header cartPrice={2120} />
      <section className="lk__section">
        <LK_4 />
        <LK_3 />
        <LK_1 />
        <LK_2 />
      </section>
      <Footer />
      <FooterMob cartPrice={212000} />
    </div>
  );
}

export default LK;
