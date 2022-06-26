import { useEffect, useState } from "react";
/* import { format } from "date-fns";
import { ar, enUS } from "date-fns/locale"; */
import Toast from "react-bootstrap/Toast";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
/* import RefreshIcon from "../RefreshIcon"; */
import logo from "../gold-prices/gold.png";
import { useTranslation } from "react-i18next";
/* import sysUpdate from "../../assets/system-update.png"; */

const InterGoldPrices = ({ title, color, border, abbriviation }) => {
  const { t, i18n } = useTranslation();
  /* const [date, setDate] = useState(
    format(new Date(), "eeee dd/MM/yyyy - hh:mm ", {
      locale: i18n.dir() === "ltr" ? enUS : ar,
    })
  );

  const refreshDate = (e) => {
    e.preventDefault();
    setDate(
      format(new Date(), "eeee dd/MM/yyyy - hh:mm ", {
        locale: i18n.dir() === "ltr" ? enUS : ar,
      })
    );
  }; */

  const [interGold, setInterGold] = useState();
  useEffect(() => {
    async function getInterGold() {
      const request = fetch(
        "https://syria-exchange.com/panel/v1/api/international-gold.php"
      );
      const response = await request;
      const parsed = await response.json();
      setInterGold(parsed);
    }
    getInterGold();
  }, []);
  if (interGold === undefined) {
    return null;
  }
  const GetGoldPrices = interGold.gold_prices.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      return [key, value];
    }
    return GetGoldPrices;
  });

  let goldPrices = GetGoldPrices.filter((item) => item[0] === abbriviation);
  let toastEnClass = i18n.dir() === "ltr" ? "toastEN" : "";
  return (
    <section className="cer">
      <nav className="cerNav">
        <ul>
          <li>
            <img src={logo} alt="Syria Exchange" className="img" />
            <span style={{ color: color }}>
              {i18n.dir() === "ltr"
                ? `${title}
              ${t("description.GoldRate")}`
                : `${t("description.GoldRate")}
              ${title}`}
            </span>
          </li>
          {/* <li ></li> */}
          {/* <li style={{ color: color }} className="font-number date">
            {date}
            <Button className="btn-refresh" onClick={refreshDate}>
              <RefreshIcon
                anchotText=""
                icon={
                  <img
                    src={sysUpdate}
                    className="refresh"
                    alt="sysUpdateIcon"
                  />
                }
                iconStatus={true}
                liClass="refresh"
              />
            </Button>
          </li> */}
        </ul>
      </nav>
      <div className="goldPricesToast">
        <div className="cerToastFirstRow" style={{ backgroundColor: border }}>
          <p className="cerToastHeader grid-col-span-2">
            {t("description.MetalType")}
          </p>
          <p className="cerToastHeader">{abbriviation}</p>
          <p className="cerToastHeader">{t("description.USD")}</p>
          <p className="cerToastHeader grid-col-span-2">
            {t("description.MetalType")}
          </p>
          <p className="cerToastHeader">{abbriviation}</p>
          <p className="cerToastHeader">{t("description.USD")}</p>
        </div>
        {goldPrices.length !== 0
          ? goldPrices[0][1].map((item, index) => (
              <Toast className={`grid-col-span-4 ${toastEnClass}`} key={index}>
                <Toast.Body className="toastBody">
                  <div className=" toastFirstFragment grid-col-span-2">
                    <img src={logo} alt="Syria Exchange" className="img" />
                    <div>
                      <p>{i18n.dir() === "rtl" ? item.gold_name : item.gold_name_en}</p>
                    </div>
                    <div className="toastArrowDiv">
                      {item.gold_status < "0" ? (
                        <RiArrowDownSLine className="toastArrowDown" />
                      ) : (
                        <RiArrowUpSLine className="toastArrowUp" />
                      )}
                      <small
                        className={
                          item.gold_status < "0"
                            ? "font-number red"
                            : "font-number green"
                        }
                      >
                        {item.gold_status}
                      </small>
                    </div>
                  </div>
                  <p className="toastPara font-number">{item.gold_any}</p>
                  <p className="toastPara font-number">{item.gold_usd}</p>
                </Toast.Body>
              </Toast>
            ))
          : ""}
      </div>
    </section>
  );
};

export default InterGoldPrices;
