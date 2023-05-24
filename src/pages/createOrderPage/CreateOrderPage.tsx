import { useState, Dispatch, SetStateAction, useRef } from "react";
import { OptionCard } from "../../components/orderOptionCard/OrderOptionCard";
import { tortillaItems } from "../../fakeData/orderOptions/tortillaItems";
import { riceItems } from "../../fakeData/orderOptions/riceItems";
import { beansItems } from "../../fakeData/orderOptions/beansItems";
import { enchiladaItems } from "../../fakeData/orderOptions/enchiladaItems";
import { sauceItems } from "../../fakeData/orderOptions/sauceItems";
import { proteinItems } from "../../fakeData/orderOptions/proteinItems";
import { SideBar } from "./sideBar/SideBar";
import themes from "../../styles/themes.module.scss";
import "./CreateOrderPage.scss";
import { Category } from "../../models";

const CreateOrderPage: React.FC = () => {
  const [options, setOptions] = useState<Record<Category, string | null>>({
    tortilla: null,
    protein: null,
    rice: null,
    beans: null,
    sauce: null,
    enchilada: null,
  });

  const tortillaRef = useRef<null | HTMLHeadingElement>(null);
  const proteinRef = useRef<null | HTMLHeadingElement>(null);
  const riceRef = useRef<null | HTMLDivElement>(null);
  const beansRef = useRef<null | HTMLDivElement>(null);
  const sauceRef = useRef<null | HTMLHeadingElement>(null);
  const enchiladaRef = useRef<null | HTMLDivElement>(null);

  function handleOptionSelect(optionCategory: Category, optionId: string) {
    setOptions((prevOptions) => {
      const previousOption = prevOptions[optionCategory];

      return {
        ...prevOptions,
        [optionCategory]: previousOption === optionId ? null : optionId,
      };
    });
  }

  function handleAddToBag(options: {}) {}

  function handleRefScroll(ref: React.RefObject<HTMLElement>) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="createOrderPage">
      <div className="optionBar">
        <h4 onClick={() => handleRefScroll(tortillaRef)} className="refLink">
          TORTILLA
        </h4>
        <h4 onClick={() => handleRefScroll(proteinRef)} className="refLink">
          PROTEIN
        </h4>
        <h4 onClick={() => handleRefScroll(riceRef)} className="refLink">
          RICE
        </h4>
        <h4 onClick={() => handleRefScroll(beansRef)} className="refLink">
          BEANS
        </h4>
        <h4 onClick={() => handleRefScroll(sauceRef)} className="refLink">
          SAUCE
        </h4>
        <h4 onClick={() => handleRefScroll(enchiladaRef)} className="refLink">
          ENCHILADA STYLE
        </h4>
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
                isSelected={options[item.category] === item.id}
                onClick={() => handleOptionSelect(item.category, item.id)}
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
                isSelected={options[item.category] === item.id}
                onClick={() => handleOptionSelect(item.category, item.id)}
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
                isSelected={options[item.category] === item.id}
                onClick={() => {
                  const doubleRiceNoBeansItem = riceItems.find(
                    (riceItem) => riceItem.saleItem === "DOUBLE RICE, NO BEANS"
                  );

                  const noBeansItem = beansItems.find(
                    (beanItem) => beanItem.saleItem === "NO BEANS"
                  );

                  if (!noBeansItem || !doubleRiceNoBeansItem) return;

                  if (item.id === doubleRiceNoBeansItem.id) {
                    handleOptionSelect("beans", noBeansItem.id);
                  }

                  handleOptionSelect(item.category, item.id);
                }}
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
                isSelected={options[item.category] === item.id}
                onClick={() => handleOptionSelect(item.category, item.id)}
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
                isSelected={options[item.category] === item.id}
                onClick={() => handleOptionSelect(item.category, item.id)}
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
                isSelected={options[item.category] === item.id}
                onClick={() => handleOptionSelect(item.category, item.id)}
              />
            );
          })}
        </div>
        <SideBar
          options={options}
          setOptions={setOptions}
          items={[
            ...tortillaItems,
            ...sauceItems,
            ...beansItems,
            ...riceItems,
            ...enchiladaItems,
            ...proteinItems,
          ]}
        />
      </div>
    </div>
  );
};

export { CreateOrderPage };
