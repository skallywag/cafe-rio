import { useState, Dispatch, SetStateAction, useRef } from "react";
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

  const tortillaRef = useRef<null | HTMLHeadingElement>(null);
  const proteinRef = useRef<null | HTMLHeadingElement>(null);
  const riceRef = useRef<null | HTMLDivElement>(null);
  const beansRef = useRef<null | HTMLDivElement>(null);
  const sauceRef = useRef<null | HTMLHeadingElement>(null);
  const enchiladaRef = useRef<null | HTMLDivElement>(null);

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
      <div className="optionBar">
        <h4 className="refLink">TORTILLA</h4>
        <h4 className="refLink">PROTEIN</h4>
        <h4 className="refLink">RICE</h4>
        <h4 className="refLink">BEANS</h4>
        <h4 className="refLink">SAUCE</h4>
        <h4 className="refLink">ENCHILADA STYLE</h4>
        <h4 className="refLink">CUSTOMIZE FURTHER</h4>
      </div>
      <div className="pageWrapper">
        <h3
          ref={tortillaRef}
          style={{ marginBottom: "20px", color: themes.secondaryBlue }}
        >
          Tortilla
        </h3>
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
        <h3
          ref={proteinRef}
          style={{ marginBottom: "20px", color: themes.secondaryBlue }}
        >
          PROTEIN
        </h3>
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
        <h3
          ref={riceRef}
          style={{ marginBottom: "20px", color: themes.secondaryBlue }}
        >
          RICE
        </h3>
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
        <h3
          ref={beansRef}
          style={{ marginBottom: "20px", color: themes.secondaryBlue }}
        >
          BEANS
        </h3>
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
        <h3
          ref={sauceRef}
          style={{ marginBottom: "20px", color: themes.secondaryBlue }}
        >
          SAUCE
        </h3>
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
        <h3 style={{ marginBottom: "20px", color: themes.secondaryBlue }}>
          ENCHILADA STYLE
        </h3>
        <div ref={enchiladaRef} className="optionSection">
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
