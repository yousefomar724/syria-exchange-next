import Toast from 'react-bootstrap/Toast'

import { useTranslation } from 'react-i18next'
import useSWR from 'swr'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import useState from 'react-usestateref'

const iter_curr_array = [
  ['7', 'USD', 'USA Dollad', 'دولار امريكي'],
  ['7', 'AED', 'Emirati Dirham', 'درهم إماراتي'],
  ['15', 'AUD', 'Australian Dollar', 'دولاراسترالي'],
  ['11', 'BHD', 'Bahraini Dinar', 'دينار بحريني'],
  ['26', 'BRL', 'Brazilian Real', 'ريال برازيلي'],
  ['12', 'CAD', 'Canadian Dollar', 'دولار كندي'],
  ['13', 'CHF', 'Swiss Franc', 'فرنك سويسري'],
  ['29', 'CNY', 'Chinese Renminbi', 'يوان صيني'],
  ['38', 'COP', 'Colombian Pesos', 'بيزو كولومبي'],
  ['36', 'DJF', 'Djibouti Franc', 'فرنك جيبوتي'],
  ['25', 'DKK', 'Danish Krone', 'كرونة دنماركية'],
  ['20', 'DZD', 'Algerian Dinar', 'دينار جزائري'],
  ['17', 'EGP', 'Egyptian Pound', 'جنيه مصري'],
  ['3', 'EUR', 'Euro', 'يورو'],
  ['14', 'GBP', 'Pound Sterling', 'جنيه إسترليني'],
  ['27', 'IDR', 'Indonesian Rupiah', 'روبية إندونيسية'],
  ['18', 'IQD', 'Iraqi Dinar', 'دينار عراقي '],
  ['30', 'IRR', 'Iranian Rial', 'ريال إيراني'],
  ['8', 'JOD', 'Jordanian Dinar', 'دينار أردني'],
  ['28', 'JPY', 'Japanese Yen', 'ين ياباني'],
  ['6', 'KWD', 'Kuwaiti Dinar', 'دينار كويتي'],
  ['32', 'LBP', 'Lebanese Pound', 'ليرة لبنانية'],
  ['16', 'LYD', 'Libyan Dinar', 'دينار ليبي'],
  ['19', 'MAD', 'Moroccon Dirham', 'درهم مغربي'],
  ['35', 'MRU', 'Mauritanian Ouguiya', 'أوقية موريتانية'],
  ['40', 'MYR', 'Malaysian Ringgit', 'رينغيت ماليزي'],
  ['24', 'NOK', 'Norwegian Krone', 'كرونة نرويجية'],
  ['41', 'NZD', 'New Zealand Dollar', 'دولار نيوزيلندي'],
  ['9', 'OMR', 'Omani Riyal', 'ريال عماني'],
  ['10', 'QAR', 'Qatari Riyal', 'ريال قطري'],
  ['23', 'RUB', 'Russian Ruble', 'روبل روسي'],
  ['5', 'SAR', 'Saudi Riyal', 'ريال سعودي'],
  ['33', 'SDG', 'Sudanese Pound', 'جنيه سوداني'],
  ['22', 'SEK', 'Swedish Krona', 'كرون سويدي'],
  ['39', 'SGD', 'Singapore Dollar', 'دولار سنغافوري'],
  ['2', 'SYP', 'Syrian pound', 'ليرة سورية'],
  ['21', 'TND', 'Tunisian Dinar', 'دينار تونسي'],
  ['4', 'TRY', 'Turkish Lira', 'ليرة تركية'],
  ['31', 'VES', 'Venezuelan Bolivare', 'بوليفار فنزويلي'],
  ['37', 'XAF', 'Chad Franc', 'فرنك تشاد'],
  ['34', 'YER', 'Yemen Rial', 'ريال يمني'],
  ['42', 'ZAR', 'zuid-afrikaanse rand', 'راند أفريقي'],
]

const CurrencyConverter = ({ sectionClass }) => {
  const { t, i18n } = useTranslation()

  const { data: coins } = useSWR('/international-coins.php')

  const [convertFrom, setConvertFrom, convertFromRef] = useState({
    currAbbreviation: 'SYP',
    currName: i18n.dir() === 'ltr' ? 'Syrian Pound' : 'ليرة سورية',
  })

  const [convertTo, setConvertTo, convertToRef] = useState({
    currAbbreviation: 'USD',
    currName: i18n.dir() === 'ltr' ? 'USA Dollad' : 'دولار امريكي',
  })

  /* const [currBuy, setCurrBuy] = useState(""); */

  const [valueToTransfer, setValueToTransfer, valueToTransferRef] = useState('')

  const [result, setResult, resultRef] = useState('')

  const curr1 = coins?.inter_coins.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      return [key, value]
    }
    /* return curr1; */
  })

  const handleChange = (event) => {
    /* setCurrBuy(""); */
    setConvertFrom({
      currAbbreviation: event.slice(0, 3),
      currName: event.slice(4),
    })
    if (valueToTransferRef != ' ') {
      setValueOnChange()
    }
    if (
      convertFromRef.current.currAbbreviation ===
      convertToRef.current.currAbbreviation
    ) {
      setResult(
        i18n.dir() === 'ltr'
          ? 'Please Select Another Currency'
          : 'يرجى اختيار عملة اخرى'
      )
    }
  }

  const handleChangeTo = (event) => {
    /* setCurrBuy(""); */
    setConvertTo({
      currAbbreviation: event.slice(0, 3),
      currName: event.slice(4),
    })
    if (valueToTransferRef != ' ') {
      setValueOnChange()
    }
    if (
      convertFromRef.current.currAbbreviation ===
      convertToRef.current.currAbbreviation
    ) {
      setResult(
        i18n.dir() === 'ltr'
          ? 'Please Select Another Currency'
          : 'يرجى اختيار عملة اخرى'
      )
    }
  }
  const changeValue = (e) => {
    setValueToTransfer(e.target.value)
    const setValue = () => {
      let vv
      const getCurrBuy = () => {
        curr1?.map((item) => {
          if (item[0] === convertFrom.currAbbreviation) {
            item[1].map((currBuy) => {
              if (currBuy.curr_abbreviation === convertTo.currAbbreviation) {
                vv = currBuy.curr_sell
                /* setCurrBuy(currBuy.curr_buy); */
              }
            })
          }
        })
      }
      getCurrBuy()
      let resulMultiply = multiply(e.target.value, vv)
      setResult(resulMultiply)
    }
    setValue()
  }

  const multiply = (num1, num2) => {
    return num1 * num2
  }

  /* let resulMultiply = multiply(valueToTransfer, num2);
    setResult(resulMultiply); */

  /* list of options */
  const options = [
    {
      currName: i18n.dir() === 'ltr' ? 'Syrian Pound' : 'ليرة سورية',
      currAbbreviation: 'SYP',
    },
  ]

  curr1?.map((item, index) =>
    options.push({
      currName:
        i18n.dir() === 'ltr'
          ? iter_curr_array[index][2]
          : iter_curr_array[index][3],
      currAbbreviation: item[0],
    })
  )
  const changeValues = () => {
    let temp = convertFrom
    setConvertFrom(convertTo)
    setConvertTo(temp)
    setValueOnChange()
  }

  const setValueOnChange = () => {
    let vv
    const getCurrBuy = () => {
      curr1.map((item) => {
        if (item[0] === convertFromRef.current.currAbbreviation) {
          item[1].map((currBuy) => {
            if (
              currBuy.curr_abbreviation ===
              convertToRef.current.currAbbreviation
            ) {
              vv = currBuy.curr_sell
              /* setCurrBuy(currBuy.curr_buy); */
            }
          })
        }
      })
    }
    getCurrBuy()
    let resulMultiply = multiply(valueToTransferRef.current, vv)
    setResult(String(resulMultiply))
  }
  let floatTo = i18n.dir() === 'ltr' ? 'float-left' : 'float-right'
  let floatFrom = i18n.dir() === 'ltr' ? 'float-right' : 'float-left'
  let textAlign = i18n.dir() === 'ltr' ? 'text-left' : 'text-right'
  let imageAlign = i18n.dir() === 'ltr' ? 'text-right' : 'text-left'

  return (
    <section className={sectionClass}>
      <nav className='CurrencyConverterNav'>
        <ul>
          <li>
            <img src='/logo.svg' alt='Syria Exchange' className='img' />
            {t('description.CurrConverterTitle')}
          </li>
          <li>
            <input
              type='text'
              name='CurrencyConverterInput'
              className='CurrencyConverterInput'
              placeholder={t('description.CurrConverterPlaceHolder1')}
              value={valueToTransfer}
              disabled={!coins}
              onChange={changeValue}
            />
          </li>
        </ul>
      </nav>
      <div className='CurrencyConverterToast'>
        <div></div>
        <p
          className={`ToastCurrencyConverterPara grid-row-start-2 ${floatFrom}`}
        >
          {t('description.CurrConverterFrom')}
        </p>
        <Toast className='grid-col-span-5 ToastCurrencyConverter  grid-row-start-2 ToastCurrencyConverterBg-color'>
          <Toast.Body className='CurrencyConverterToastBody'>
            <div className='toastFirstFragmentCurrencyConverter grid-col-span-2 ToastCurrencyConverterBorder-bg'>
              <DropdownButton
                title={convertFrom.currName}
                id='dropdown-menu-align-right'
                onSelect={handleChange}
                disabled={!coins}
                /*  className="converterDropdown" */
              >
                {options.map((option, index) => (
                  <Dropdown.Item
                    eventKey={[option.currAbbreviation, option.currName]}
                    key={index}
                    className={
                      convertToRef.current.currAbbreviation ===
                      option.currAbbreviation
                        ? 'displayNone '
                        : ' '
                    }
                  >
                    <div className='toastFirstFragmentDropdownDiv scrollbar scrollbar-lady-lips'>
                      <span
                        className={`fint-size-dropdown force-overflow ${textAlign}`}
                      >
                        {option.currName}
                      </span>
                      <img
                        src={`/currIcons/${option.currAbbreviation}.png`}
                        className={` currConverterCurrIcon ${imageAlign}`}
                        alt={option.currAbbreviation}
                      />
                    </div>
                  </Dropdown.Item>
                ))}
              </DropdownButton>

              <div className='ToastCurrencyConverter1Div'>
                <small className='CurrencyConverterSmall'>
                  {convertFrom.currAbbreviation}
                </small>
                <img
                  src={`/currIcons/${convertFrom.currAbbreviation}.png`}
                  alt={convertFrom.currAbbreviation}
                  className='CurrencyConverterFlag'
                />
              </div>
            </div>
            <div className='equal'>
              <a onClick={changeValues}>
                <img src='/res.png' alt='' className='CurrencyConverterRes' />
              </a>
            </div>
            <div className='toastSecondFragmentCurrencyConverter grid-col-span-2 ToastCurrencyConverterBorder-bg'>
              <DropdownButton
                title={convertTo.currName}
                id='dropdown-menu-align-right'
                disabled={!coins}
                onSelect={handleChangeTo}
              >
                {options.map((option, index) => (
                  <Dropdown.Item
                    eventKey={[option.currAbbreviation, option.currName]}
                    key={index}
                    className={
                      convertFromRef.current.currAbbreviation ===
                      option.currAbbreviation
                        ? 'displayNone '
                        : ' '
                    }
                  >
                    <div className='toastFirstFragmentDropdownDiv'>
                      <span className={`fint-size-dropdown ${textAlign}`}>
                        {option.currName}
                      </span>
                      <img
                        src={`/currIcons/${option.currAbbreviation}.png`}
                        className={` currConverterCurrIcon ${imageAlign}`}
                        alt={option.currAbbreviation}
                      />
                    </div>
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              <div className='ToastCurrencyConverter1Div'>
                <small className='CurrencyConverterSmall'>
                  {convertTo.currAbbreviation}
                </small>
                <img
                  src={`/currIcons/${convertTo.currAbbreviation}.png`}
                  alt={convertTo.currAbbreviation}
                  className='CurrencyConverterFlag'
                />
              </div>
            </div>
          </Toast.Body>
        </Toast>
        <p className={`ToastCurrencyConverterPara grid-row-start-2 ${floatTo}`}>
          {t('description.CurrConverterTo')}
        </p>
        <p className='grid-col-start-4 grid-row-start-3'>
          {t('description.change')}
        </p>
        <div className='ToastCurrencyConverterResult grid-row-start-4'>
          <input
            type='text'
            name='CurrencyConverterInput'
            className='CurrencyConverterInput'
            placeholder={t('description.CurrConverterPlaceHolder2')}
            value={result}
            readOnly
          />
        </div>
      </div>
    </section>
  )
}

export default CurrencyConverter
