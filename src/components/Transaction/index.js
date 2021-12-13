import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../../providers/context";
import { Wrapper, Icon } from "./styles";
import Star from "../../assets/img/star.svg";
import StarFiled from "../../assets/img/star-filed.svg";

const Transaction = ({
  transaction: {
    id,
    label = "some action",
    value = 0,
    date = new Date().toISOString().substring(0, 10),
    comment = label,
    isStarred,
  },
  onDelete,
  onStarClick,
}) => {
  const { state } = useContext(AppContext);
  const deleteItem = () => onDelete(id);

  return (
    <Wrapper value={value}>
      <Icon onClick={() => onStarClick(id)}>
        <img src={isStarred ? StarFiled : Star} />
      </Icon>
      {id} : {date} : {label} : {value.toFixed(2)} {state.currency} : {comment}{" "}
      : <button onClick={deleteItem}>del</button>
    </Wrapper>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
    date: PropTypes.string,
    comment: PropTypes.string,
  }),
  onDelete: PropTypes.func,
  onStarClick: PropTypes.func,
};

export default Transaction;
