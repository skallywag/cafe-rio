import { BsCheckCircle } from "react-icons/bs";
import { ProgressBar } from "../../../components/progressBar/ProgressBar";
import themes from "../../../styles/themes.module.scss";
import { Category } from "../../../models";
import "./SideBar.scss";

interface SideBarProps {
  options: Record<Category, string | null>;
  items: (
    | TortillaItem
    | SauceItem
    | BeansItem
    | RiceItem
    | EnchiladaItem
    | ProteinItem
  )[];
  setOptions: React.Dispatch<
    React.SetStateAction<Record<Category, string | null>>
  >;
}

const SideBar: React.FC<SideBarProps> = ({ options, items, setOptions }) => {
  const selectedTortilla = items.find((item) => item.id === options.tortilla);
  const selectedProtein = items.find((item) => item.id === options.protein);
  const selectedRice = items.find((item) => item.id === options.rice);
  const selectedBeans = items.find((item) => item.id === options.beans);
  const selectedSauce = items.find((item) => item.id === options.sauce);
  const selectedEnchilada = items.find((item) => item.id === options.enchilada);

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
        <ProgressBar width={60} height={60} percentage={60} strokeWidth={10} />
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
            color={options.tortilla ? themes.primaryGreen : ""}
            size={20}
          />
          <div>
            <span>Tortilla</span>
          </div>
        </div>
        {options.tortilla && (
          <div className="selectedItem">
            <span>{selectedTortilla.saleItem}</span>
            <span
              onClick={() =>
                setOptions((prevOptions: Record<Category, string | null>) => {
                  return { ...prevOptions, tortilla: null };
                })
              }
            >
              x
            </span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle
            color={options.protein ? themes.primaryGreen : ""}
            size={20}
          />
          <span>Protein</span>
        </div>
        {options.protein && (
          <div className="selectedItem">
            <span>{selectedProtein.saleItem}</span>
            <span
              onClick={() =>
                setOptions((prevOptions: Record<Category, string | null>) => {
                  return { ...prevOptions, protein: null };
                })
              }
            >
              x
            </span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle
            color={options.rice ? themes.primaryGreen : ""}
            size={20}
          />
          <span>Rice</span>
        </div>
        {options.rice && (
          <div className="selectedItem">
            <span>{selectedRice.saleItem}</span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                setOptions((prevOptions: Record<Category, string | null>) => {
                  return { ...prevOptions, rice: null };
                })
              }
            >
              x
            </span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle
            color={options.beans ? themes.primaryGreen : ""}
            size={20}
          />
          <span>Beans</span>
        </div>
        {options.beans && (
          <div className="selectedItem">
            <span>{selectedBeans.saleItem}</span>
            <span
              onClick={() =>
                setOptions((prevOptions: Record<Category, string | null>) => {
                  return { ...prevOptions, beans: null };
                })
              }
            >
              x
            </span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle
            color={options.sauce ? themes.primaryGreen : ""}
            size={20}
          />
          <span>Sauce</span>
        </div>
        {options.sauce && (
          <div className="selectedItem">
            <span>{selectedSauce.saleItem}</span>
            <span
              onClick={() =>
                setOptions((prevOptions: Record<Category, string | null>) => {
                  return { ...prevOptions, sauce: null };
                })
              }
            >
              x
            </span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle
            color={options.enchilada ? themes.primaryGreen : ""}
            size={20}
          />
          <span>Enchilada Style</span>
        </div>
        {options.enchilada && (
          <div className="selectedItem">
            <span>{selectedEnchilada.saleItem}</span>
            <span
              onClick={() =>
                setOptions((prevOptions: Record<Category, string | null>) => {
                  return { ...prevOptions, enchilada: null };
                })
              }
            >
              x
            </span>
          </div>
        )}

        <button>Add to Bag</button>
      </div>
    </div>
  );
};

export { SideBar };
