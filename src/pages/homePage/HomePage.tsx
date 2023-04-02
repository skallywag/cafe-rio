import { HomeCarousel } from "../../components/homeCarousel/HomeCarousel";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <div style={{ marginBottom: "40px" }}>
        <HomeCarousel />
      </div>
      <div className="test"></div>
    </div>
  );
};

export default HomePage;
