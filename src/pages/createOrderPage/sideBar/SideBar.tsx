import { BsCheckCircle } from "react-icons/bs";
import "./SideBar.scss";

interface SideBarProps {
  orderStep?: number;
  itemTotal?: number;
  tortillaOption: string;
  proteinOption: string;
  riceOption: string;
  beansOption: string;
  sauceOption: string;
  enchiladaOption: string;
  setTortillaOption: (option: string) => void;
  setProteinOption: (option: string) => void;
  setRiceOption: (option: string) => void;
  setBeansOption: (option: string) => void;
  setSauceOption: (option: string) => void;
  setEnchiladaOption: (option: string) => void;
  handleAddToBag: () => void;
}

const SideBar: React.FC<SideBarProps> = (props) => {
  return (
    <div className="sideBar">
      <div className="infoContainer">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            height={81}
            src="https://cdn.caferio.com/905180.jpg"
            alt="burrito"
          />
          <span>Burrito</span>
          <span>$10.99</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          padding: "24px",
        }}
      >
        <div className="orderStep">
          <BsCheckCircle
            color={props.tortillaOption ? "green" : ""}
            size={20}
          />
          <div>
            <span>Tortilla</span>
          </div>
        </div>
        {props.tortillaOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{props.tortillaOption}</span>
            <span onClick={() => props.setTortillaOption("")}>x</span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle color={props.proteinOption ? "green" : ""} size={20} />
          <span>Protein</span>
        </div>
        {props.proteinOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{props.proteinOption}</span>
            <span>x</span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle color={props.riceOption ? "green" : ""} size={20} />
          <span onClick={() => props.setRiceOption("")}>Rice</span>
        </div>
        {props.riceOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{props.riceOption}</span>
            <span>x</span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle color={props.beansOption ? "green" : ""} size={20} />
          <span>Beans</span>
        </div>
        {props.beansOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{props.beansOption}</span>
            <span onClick={() => props.setBeansOption("")}>x</span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle color={props.sauceOption ? "green" : ""} size={20} />
          <span>Sauce</span>
        </div>
        {props.sauceOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{props.sauceOption}</span>
            <span onClick={() => props.setSauceOption("")}>x</span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle
            color={props.enchiladaOption ? "green" : ""}
            size={20}
          />
          <span>Enchilada Style</span>
        </div>
        {props.enchiladaOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{props.enchiladaOption}</span>
            <span onClick={() => props.setEnchiladaOption("")}>x</span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle size={20} />
          <span>Customize Further</span>
        </div>
        <button onClick={props.handleAddToBag}>Add to Bag</button>
      </div>
    </div>
  );
};

export { SideBar };
