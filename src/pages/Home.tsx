import Aboutus from "../components/Aboutus";
import Category from "../components/Category";
import Header from "../components/Header";
import Seeproduct from "../components/Seeproduct";
function Home() {
  return (
    <div>
      <Header />
      <Seeproduct></Seeproduct>
      <Category></Category>
      <Aboutus></Aboutus>
    </div>
  );
}

export default Home;
