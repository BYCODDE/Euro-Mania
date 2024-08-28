import Aboutus from "../components/Aboutus";
import Category from "../components/Category";
import Fotter from "../components/Fotter";
import Header from "../components/Header";
import Seeproduct from "../components/Seeproduct";
function Home() {
  return (
    <div>
      <Header />
      <Seeproduct></Seeproduct>
      <Category></Category>
      <Aboutus></Aboutus>
      <Fotter></Fotter>
    </div>
  );
}

export default Home;
