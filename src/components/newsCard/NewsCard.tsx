import "./NewsCard.scss";
import themes from "../../styles/themes.module.scss";

interface NewsCardProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = (props) => {
  return (
    <div className="newsCard">
      <img width={"100%"} height="auto" src={props.imageUrl} />

      <div className="content">
        <h1 style={{ marginBottom: "16px", color: themes.primaryRed }}>
          {props.title}
        </h1>
        <h2 color={themes.primaryBlue}>{props.description}</h2>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
};

export { NewsCard };
