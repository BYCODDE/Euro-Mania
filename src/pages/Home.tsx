import Aboutus from "../components/Aboutus";
import Category from "../components/Category";
import Fotter from "../components/Fotter";
import Header from "../components/Header";
import Headerproduct from "../components/Headerproduct";
function Home() {
  return (
    <div>
      <Header />
      <Headerproduct></Headerproduct>
      <Category></Category>
      <Aboutus></Aboutus>
      <Fotter></Fotter>
    </div>
  );
}

export default Home;
