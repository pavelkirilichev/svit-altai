import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMob from "../components/FooterMob";
import LK_1 from "../components/LK_1";
import LK_2 from "../components/LK_2";
import LK_3 from "../components/LK_3";
import LK_4 from "../components/LK_4";
import { useState } from "react";

function LK() {
  const [chapter, setChapter] = useState(2);
  let section;
  if (chapter == 1) {
    section = <LK_1 setChapter={setChapter} />;
  }
  if (chapter == 2) {
    section = <LK_2 setChapter={setChapter} />;
  }
  if (chapter == 3) {
    section = <LK_3 setChapter={setChapter} />;
  }
  if (chapter == 4) {
    section = <LK_4 setChapter={setChapter} />;
  }

  return (
    <div className="wrapper">
      <Header cartPrice={2120} />
      <section className="lk__section">{section}</section>
      <Footer />
      <FooterMob cartPrice={212000} />
    </div>
  );
}

export default LK;
