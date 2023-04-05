import { OptionCard } from "../../components/orderOptionCard/OrderOptionCard";
import { tortillaItems } from "../../fakeData/orderOptions/tortillaItems";
import { riceItems } from "../../fakeData/orderOptions/riceItems";
import { beansItems } from "../../fakeData/orderOptions/beansItems";
import { enchiladaItems } from "../../fakeData/orderOptions/enchiladaItems";
import { sauceItems } from "../../fakeData/orderOptions/sauceItems";
import { proteinItems } from "../../fakeData/orderOptions/proteinItems";
import "./CreateOrderPage.scss";

const CreateOrderPage: React.FC = () => {
  return (
    <div className="createOrderPage">
      <div className="pageWrapper">
        <h5 style={{ marginBottom: "20px" }}>Tortilla</h5>
        <div className="optionSection">
          {tortillaItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isSelected
                onClick={() => {}}
              />
            );
          })}
        </div>
        <h5 style={{ marginBottom: "20px" }}>PROTEIN</h5>
        <div className="optionSection">
          {proteinItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isSelected
                onClick={() => {}}
              />
            );
          })}
        </div>
        <h5 style={{ marginBottom: "20px" }}>RICE</h5>
        <div className="optionSection">
          {riceItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isSelected
                onClick={() => {}}
              />
            );
          })}
        </div>
        <h5 style={{ marginBottom: "20px" }}>BEANS</h5>
        <div className="optionSection">
          {beansItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isSelected
                onClick={() => {}}
              />
            );
          })}
        </div>
        <h5 style={{ marginBottom: "20px" }}>SAUCE</h5>
        <div className="optionSection">
          {sauceItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isSelected
                onClick={() => {}}
              />
            );
          })}
        </div>
        <h5 style={{ marginBottom: "20px" }}>ENCHILADA STYLE</h5>
        <div className="optionSection">
          {enchiladaItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isSelected
                onClick={() => {}}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { CreateOrderPage };
