import "./OrderOptionCard.scss";

interface OptionCardProps {
  id: number;
  imageUrl: string;
  saleItem: string;
  isSelected: boolean;
  onClick?: () => void;
}

const OptionCard: React.FC<OptionCardProps> = (props) => {
  return (
    <div key={props.id} className="optionCard" onClick={props.onClick}>
      <img src={props.imageUrl} alt="tortilla" />
      {props.isSelected && (
        <img src="https://www.caferio.com/svg/item-select.svg" />
      )}

      <h4 style={{ textAlign: "center" }}>{props.saleItem}</h4>
    </div>
  );
};
export { OptionCard };
