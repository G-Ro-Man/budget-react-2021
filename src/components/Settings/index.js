import { useContext } from "react";

import { AppContext } from "../../providers/context";
import { useBooleanToggle } from "../../hooks";
import { LOCALES } from "../../providers/i18n";
import { saveToStorage } from "../../utils/sessionStoreage";

const Settings = () => {
  const { state, dispatch } = useContext(AppContext);
  const { status, handleStatusChange } = useBooleanToggle();
  // const [isAdvancedSettings, setIsAdvancedSettings] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "changeCurrency", currency: value });
    saveToStorage("currency", value);
  };

  const onChangeLocale = (e) => {
    const { value } = e.target;
    dispatch({ type: "setLocale", locale: value });
    saveToStorage("locale", value);
  };

  return (
    <>
      <h1>Настройки</h1>
      <div>
        <form>
          <label htmlFor="currency">Currency</label>
          <select
            name="currency"
            id="currency"
            value={state.currency}
            onChange={onChange}
          >
            <option value="UAH">грн</option>
            <option value="USD">долар</option>
            <option value="EUR">евро</option>
          </select>

          <label htmlFor="locale">Locale</label>
          <select
            name="locale"
            id="locale"
            value={state.locale}
            onChange={onChangeLocale}
          >
            <option value={LOCALES.ENGLISH}>Engilsh</option>
            <option value={LOCALES.UKRAINIAN}>Ukrainian</option>
          </select>
        </form>
      </div>
      <div>
        <button onClick={handleStatusChange}>Advanced</button>
        {status ? (
          <div>
            <h2>Advanced Settings</h2>
            <p>...</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Settings;
