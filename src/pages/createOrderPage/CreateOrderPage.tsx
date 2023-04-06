import { useState, Dispatch, SetStateAction } from "react";
import { OptionCard } from "../../components/orderOptionCard/OrderOptionCard";
import { tortillaItems } from "../../fakeData/orderOptions/tortillaItems";
import { riceItems } from "../../fakeData/orderOptions/riceItems";
import { beansItems } from "../../fakeData/orderOptions/beansItems";
import { enchiladaItems } from "../../fakeData/orderOptions/enchiladaItems";
import { sauceItems } from "../../fakeData/orderOptions/sauceItems";
import { proteinItems } from "../../fakeData/orderOptions/proteinItems";
import themes from "../../styles/themes.module.scss";
import "./CreateOrderPage.scss";

const CreateOrderPage: React.FC = () => {
  const [tortillaOption, setTortillaOption] = useState("");
  const [proteinOption, setProteinOption] = useState("");
  const [riceOption, setRiceOption] = useState("");
  const [beansOption, setBeansOption] = useState("");
  const [sauceOption, setSauceOption] = useState("");
  const [enchiladaOption, setEnchiladaOption] = useState("");

  function handleOptionSelect(
    option: string,
    currentOption: string,
    setOption: Dispatch<SetStateAction<string>>
  ) {
    if (option === currentOption) {
      setOption("");

      return;
    }
    setOption(option);
  }
  return (
    <div className="createOrderPage">
      <div className="pageWrapper">
        <h5 style={{ marginBottom: "20px", color: themes.secondaryBlue }}>
          Tortilla
        </h5>
        <div className="optionSection">
          {tortillaItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isSelected={tortillaOption === item.saleItem}
                onClick={() =>
                  handleOptionSelect(
                    item.saleItem,
                    tortillaOption,
                    setTortillaOption
                  )
                }
              />
            );
          })}
        </div>
        <h5 style={{ marginBottom: "20px", color: themes.secondaryBlue }}>
          PROTEIN
        </h5>
        <div className="optionSection">
          {proteinItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isSelected={proteinOption === item.saleItem}
                onClick={() =>
                  handleOptionSelect(
                    item.saleItem,
                    proteinOption,
                    setProteinOption
                  )
                }
              />
            );
          })}
        </div>
        <h5 style={{ marginBottom: "20px", color: themes.secondaryBlue }}>
          RICE
        </h5>
        <div className="optionSection">
          {riceItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isSelected={riceOption === item.saleItem}
                onClick={() =>
                  handleOptionSelect(item.saleItem, riceOption, setRiceOption)
                }
              />
            );
          })}
        </div>
        <h5 style={{ marginBottom: "20px", color: themes.secondaryBlue }}>
          BEANS
        </h5>
        <div className="optionSection">
          {beansItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isSelected={beansOption === item.saleItem}
                onClick={() =>
                  handleOptionSelect(item.saleItem, beansOption, setBeansOption)
                }
              />
            );
          })}
        </div>
        <h5 style={{ marginBottom: "20px", color: themes.secondaryBlue }}>
          SAUCE
        </h5>
        <div className="optionSection">
          {sauceItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isSelected={sauceOption === item.saleItem}
                onClick={() =>
                  handleOptionSelect(item.saleItem, sauceOption, setSauceOption)
                }
              />
            );
          })}
        </div>
        <h5 style={{ marginBottom: "20px", color: themes.secondaryBlue }}>
          ENCHILADA STYLE
        </h5>
        <div className="optionSection">
          {enchiladaItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isSelected={enchiladaOption === item.saleItem}
                onClick={() =>
                  handleOptionSelect(
                    item.saleItem,
                    enchiladaOption,
                    setEnchiladaOption
                  )
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { CreateOrderPage };
