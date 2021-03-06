import { useState } from "react";
import { STATUSES } from "../../constants";
import { useData } from "../../hooks";

import Balance from "../Balance";
import { ChangeBalance } from "../ChangeBalance";
import ErrorBoundary from "../ErrorBoundary";
import Transactions from "../Transactions";

import { Wrapper } from "./styles";

const Home = () => {
  const [balance, setBalance] = useState(0);

  const {
    transactions,
    status,
    pushTransaction,
    onDelete,
    onStarClick,
  } = useData();

  const onChange = (transaction) => {
    pushTransaction(transaction);
    setBalance(balance + Number(transaction.value));
  };

  return (
    <ErrorBoundary>
      <Wrapper>
        <Balance balance={balance} />
        <ChangeBalance onChange={onChange} />

        <hr />
        {status === STATUSES.PENDING ? <div>Loading...</div> : null}

        {status === STATUSES.SUCCESS ? (
          <Transactions
            transactions={transactions}
            onDelete={onDelete}
            onStarClick={onStarClick}
          />
        ) : null}
      </Wrapper>
    </ErrorBoundary>
  );
};

export default Home;
