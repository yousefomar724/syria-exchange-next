import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            headerHome: "Home",
            headerSYP: "Syrian Pound",
            headerGold: "Gold",
            headerTRY: "Turkish Lira",
            headerIterCoins: "International Coins",
            headerNews: "News",
            headerDownload: "Download App",
            headerReload: "Reload",
            headerCERTitle: "Currency Exchange Rate",
            headerCERCurr: "Currency",
            headerCERCurrBuy: "Buy",
            headerCERCurrSell: "Sell",
            headerCERSeeMore: "See More +",
            CentralbankTitle: "Official Rates In The Central Bank",
            CurrConverterTitle: "Currency Converter",
            CurrConverterPlaceHolder1: "Enter Amount Here ....",
            CurrConverterFrom: "From",
            CurrConverterTo: "To",
            CurrConverterPlaceHolder2: "Result",
            GoldPricesTitle: "Gold Prices",
            MetalType: "Metal Type",
            SYP: "SYP",
            USD: "USD",
            SyriaNews: "Syria News",
            AllNews: "All News",
            AdvertiseWithUs: "Advertise With Us",
            GetApi: "Get API",
            AboutUs: "About Us",
            copyRights: "All rights reserved to the site",
            internationalCoinsTitle: "International Coins",
            TRYHeaderCERTitle:
              "Currency Exchange Rate Against The Turkish Lira",
            TRYGoldTitle: "Gold and Metal Prices in Turkey",
            TurkeyNews: "Turkey News",
            exchangeRate: "Exchange Rate",
            GoldRate: "Gold Rate",
            financialAdvices: "Financial Advices",
            chooseCategory: "Choose Category",
            ApiService: "API Service",
            ApiServiceParagraph:
              "On our Syria Exchange website, we offer an API service, which provides you with our website data for use within your projects.",
            ApiOurService: "Why our service is the best?",
            ApiOurServiceParagraph1:
              "Because we offer reliable and accurate exchange rates for the Syrian pound for more than 15 Syrian cities",
            ApiOurServiceParagraph2:
              "We offer exchange rates for 42 Arab and international currencies with instant and accurate change according to any currency",
            ApiOurServiceParagraph3:
              "And also the international gold and silver prices and their pricing against each currency, which are updated according to the global market.",
            FeaturesOfOurServices: "Features of our services",
            FeaturesOfOurServicesParagraph1:
              "Access to the exchange rates of the Syrian pound against 42 currencies in more than 15 Syrian cities",
            FeaturesOfOurServicesParagraph2:
              "Access to the exchange rates of Arab and international currencies",
            FeaturesOfOurServicesParagraph3:
              "Access to gold and silver prices according to any currency",
            FeaturesOfOurServicesParagraph4:
              "Easily integrate data into your website",
            FeaturesOfOurServicesParagraph5:
              "Reliable prices and updated in real time",
            FeaturesOfOurServicesParagraph6:
              "Various packages to suit your business needs",
            FeaturesOfOurServicesParagraph7:
              "A special page for each customer, through which he can see the size of the package and the amount of daily exchange",
            FeaturesOfOurServicesParagraph8:
              "Multiple payment methods to suit everyone",
            FeaturesOfOurServicesParagraph9:
              "The API is accessed via HTTP GET in JSON format.",
            contactUs: "You can contact us via the website mail",
            contactUsOr: "Or by sending us a message on Messenger",
            adWithUs: "Advertise with us",
            adWithUsIntro:
              "At the outset, we would like to thank you for your desire to advertise with us, as the Syria Exchange website is one of the largest Arab and Syrian websites specialized in publishing Arab and international exchange rates at the level of Syrian governorates and cities, as well as publishing gold and silver prices, as well as publishing posts that are concerned with economic conditions, financial advice and local news. On a daily basis.",
            WhyAdWithUs: "Why advertise with us?",
            WhyAdWithUsParagraph:
              "Syria Exchange is one of the best sites that get daily visits significantly, which gives the opportunity to display your ads more to visitors, so the return The investment will be special, God willing.",
            TypeOfAds: "Types of ads",
            TypeOfAdsPara1:
              "On our site, we provide specific packages to display your ads in different sizes",
            TypeOfAdsPara2: "Banner ad size 1052*618",
            TypeOfAdsPara3: "Banner ad size 320*250",
            TypeOfAdsPara4:
              "It is prohibited to display advertisements that contain women, alcohol, franks, or chat sites. We reserve the right to reject any advertisement",
            AboutUsPara1:
              "Syria Exchange is a non-profit organization that provides its services to the Arab public in all countries of the world to know the rates of international and Arab currencies and link them with gold prices and follow up on all news and global markets moment by moment in order to facilitate financial transactions and manage them correctly and properly with the aim in the end to serve the Arab public and increase investment opportunities Improving the lives of citizens",
            AboutUsPara2:
              "We do not have any centers or offices for money transfer or money exchange services in any country, we provide currency rates with high accuracy through global markets, moment by moment only.",
            AboutUsPara3:
              "At Syria Exchange, we seek, through the news blog service, to provide financial advice, present new ideas, and increase cooperation between countries by knowing the cultures of different peoples, spreading financial awareness and enriching knowledge in the Arab world, which in turn contribute to creating new job opportunities in the field of financial transactions, business and investment.",
            AboutUsPara4:
              "It aims to serve people and help them in providing currency data for all the most traded Arab and international countries and finding solutions to facilitate financial transactions between countries and create a world full of cooperation and love in financial and commercial transactions to achieve the highest return for all.",
            AboutUsPara5:
              "Through our team, we seek to facilitate financial and investment services and provide all data for any currency without effort or trouble, while providing access to all information and answers to all inquiries.. In order to provide the best services always",
            news: "News",
            readMore: "Read More",
            change: "Change",
            PrivacyPolicy: {
              title: "Privacy Policy",
              introText1: "At (Syria Exchange), we understand that the privacy of your personal information is important to you and us.",
              introText2: "Below is information about the types of personal information we receive and collect when you visit https://syria-exchange.com, How we protect your personal information. Log files As with most different websites, we collect and use the data contained in log files. The information in log files includes your Internet Protocol (IP) address, your Internet service provider (ISP), the browser you used to visit our site, The time you visited and the pages you visited on our website.",
              cookies: {
                title: "Cookies:",
                text: " We use cookies to give you the best possible experience on a simple website, for more information about cookies, Visit: http://www.allaboutcookies.org/."
              },
              essentialCookies: {
                title: "Essential Cookies:",
                text: " Essential cookies are essential for you to navigate and navigate around the site, It does not store any information that can be used for advertising purposes, without essential cookies our website will not function properly."
              },
              customCookies: {
                title: "Custom cookies:",
                text: " These cookies store information, such as your personal preferences, and use it to customize a unique experience for you. This may include displaying a popup once only one per your visit, save your language preferences, or allow you to automatically sign in to some of our features."
              },
              analyticalCookies: {
                title: "Analytics Cookies:",
                text: " Analytics cookies capture anonymous data so that we can see trends and improve our website experience. These allow us to test different designs, And help us identify a break if part of our site isn't working."
              },
              advertisingCookies: {
                title: "Advertising Cookies:",
                terms: [
                  "Some third party advertisers may use cookies or web beacons when advertising on our site. They will send information to these advertisers (such as Google through Google AdSense) including your IP address, ISP, and the browser you used to visit our site, and in some cases information about whether you have Flash installed.",
                  "Third party vendors, including Google, use cookies to serve ads based on a user's previous visits to our website or other websites.",
                  "By using advertising cookies, Google and its partners will be able to serve ads to your users based on their visits to our site and/or other sites on the Internet.",
                  " Users can disable the use of personalized advertising by going to Ads Settings."
                ]
              },
              outroText1: "If you have not opted out from displaying third-party advertisements, cookies from other third-party ad networks or vendors may also be used to display advertisements on our site. This is generally used for geo-targeting purposes eg (showing SEO ads in Germany to someone in Germany) or showing specific ads based on specific locations Visited (eg showing real estate ads to someone who frequents real estate websites).",
              outroText2: "By continuing to use our website, you agree to the placement of cookies on your device. You can choose to disable or turn off cookies or third party cookies The third is selectively in your browser settings. However, this can affect how you interact with our site as well as with other websites. If you have any questions or if there is any problem here, Our data usage policy, please contact us through the contact us page ",
              emailContact: "or Contact Us at"
            },
            UserAgreement: {
              title: "User Agreement",
              introText: "By using the Syria Exchange website, you agree to be bound by the stipulated terms and conditions, so you should read and take these provisions into consideration:",
              condition1: {
                title: "Accept the Agreement",
                terms: [
                  "By your use of this website, this indicates your complete acceptance of all terms and conditions stated here",
                  "You should not use this website if you do not agree to any of these standard terms and conditions.",
                  "Our Terms and Conditions are created in the Terms and Conditions form and Privacy Policy form.",
                  "The use of this site is prohibited for persons under the age of 18 years.",
                ]
              },
              condition2: {
                title: "Sole Proprietorship Rights",
                terms: [
                  "All trademarks displayed on this website are the property of it. Also, all content displayed on this site, including images, music, graphics, and others, are the exclusive property of the site and cannot be used without obtaining permission from the site owner.",
                  "We provide you with the authority to browse the site and reuse some content for personal purposes only. It is not permissible in any way to use the site for commercial purposes or to integrate the site with another site except after agreement with us and a partnership contract with us. In the event that one of the persons or sites does it, he will be subject to legal accountability.",
                ]
              },
              condition3: {
                title: "Limitations",
                text: "If you use this website, you are prohibited from doing the following:",
                terms: [
                  "Using the website in an illegal manner or violating the privacy policy.",
                  "Doing any behavior that would disrupt, damage or damage the Site and interfere with the work or private content of the Site or with the use of any other person.",
                  "Using this site for the purpose of advertising, marketing or publicity without prior permission from the site owner.",
                  "Spreading hate, racism, obscene speech, or defamation of a person or a site where this exposes you to legal accountability.",
                  "Removing one of the copyright notices or any other notices of intellectual property rights from the site or content available on or through the site. Your conduct of any of the previous activities in violation of the site's policy exposes you to legal issues."
                ]
              },
              condition4: {
                title: "Disclaimer",
                text: "Your access to the Site and your use of its content is at your own risk. The information we provide is for general information purposes only. All information on the website is provided in good faith. However, we make no representation or warranty of any kind, express or implied, as to the accuracy, adequacy, correctness, reliability, availability or completeness of any information on the Site.",
              },
              condition5: {
                title: "Your privacy",
                text: "Please read the privacy policy and your content must be an individual right provided that it does not violate the rights of the site. The site also has the authority to remove any of your content without prior notice.",
              },
            },
          },
        },
      },
      ar: {
        translation: {
          description: {
            headerHome: "الرئيسية",
            headerSYP: "الليرة السورية",
            headerGold: "الذهب",
            headerTRY: "الليرة التركية",
            headerIterCoins: "عملات عالمية",
            headerNews: "الأخبار",
            headerDownload: "حمل التطبيق",
            headerReload: "تحديث",
            headerCERTitle: "سعر صرف العملات",
            headerCERCurr: "العملة",
            headerCERCurrBuy: "شراء",
            headerCERCurrSell: "مبيع",
            headerCERSeeMore: " + مشاهدة المزيد",
            CentralbankTitle: " الأسعار الرسمية في البنك المركزي",
            CurrConverterTitle: "محول العملات ",
            CurrConverterPlaceHolder1: "أدخل قيمة المبلغ هنا....",
            CurrConverterFrom: "من",
            CurrConverterTo: "إلى",
            CurrConverterPlaceHolder2: "الناتج",
            GoldPricesTitle: "أسعار الذهب ",
            MetalType: "نوع المعدن ",
            SYP: "ل.س",
            USD: "دولار",
            SyriaNews: "أخبار سورية",
            AllNews: "كل الأخبار",
            AdvertiseWithUs: "أعــلـــن لــديــنــا",
            GetApi: "احصل على API",
            AboutUs: "مـــــن نـــــحــــــن",
            copyRights: "جميع الحقوق محفوظة لموقع",
            internationalCoinsTitle: "عملات عالمية",
            TRYHeaderCERTitle: "سعر صرف العملات مقابل الليرة التركية",
            TRYGoldTitle: "أسعار الذهب والمعادن في تركيا",
            TurkeyNews: "أخبار تركيا",
            exchangeRate: "سعر صرف",
            GoldRate: "سعر ذهب",
            financialAdvices: "نصائح مالية",
            chooseCategory: "اختر فئة",
            ApiService: "خدمة API",
            ApiServiceParagraph:
              "نقدم في موقعنا سوريا للصرافة خدمة API والتي توفر لكم بيانات موقعنا لاستخدامها ضمن مشاريعكم.",
            ApiOurService: "لماذا خدمتنا هي الأفضل ؟",
            ApiOurServiceParagraph1:
              "لأننا نقدم أسعار صرف الليرة السورية موثوقة وبشكل دقيق لأكثر من 15 مدينة سورية",
            ApiOurServiceParagraph2:
              "نقدم أسعار صرف ل 42 عملة عربية وعالمية وبتغيير لحظي ودقيق حسب أي عملة",
            ApiOurServiceParagraph3:
              "وأيضاً أسعار الذهب والفضة العالمية وتسعيرها مقابل كل عملة والتي يتم تحديثها حسب السوق العالمية",
            FeaturesOfOurServices: "مميزات خدماتنا",
            FeaturesOfOurServicesParagraph1:
              "الوصول لأسعار صرف الليرة السورية مقابل 42 عملة في أكثر من 15 مدينة سورية",
            FeaturesOfOurServicesParagraph2:
              "الوصول لأسعار صرف العملات العربية والعالمية",
            FeaturesOfOurServicesParagraph3:
              "الوصول لأسعار الذهب والفضة حسب أي عملة",
            FeaturesOfOurServicesParagraph4: "دمج البيانات في موقعكم بسهولة",
            FeaturesOfOurServicesParagraph5:
              "اسعار موثوقة ويتم تحديثها بشكل لحظي",
            FeaturesOfOurServicesParagraph6:
              "باقات متنوعة تناسب احتياجات أعمالك",
            FeaturesOfOurServicesParagraph7:
              "صفحة خاصة لكل عميل يمكنه من خلالها الاطلاع على حجم الباقة ومقدار الصرف اليومي",
            FeaturesOfOurServicesParagraph8: "طرق دفع متعددة تناسب الجميع",
            FeaturesOfOurServicesParagraph9:
              "يتم الوصول إلى API عبر HTTP GET بتنسيق JSON .",
            contactUs: "يمكن التواصل معنا عبر بريد الموقع",
            contactUsOr: "أو عبر مراسلتنا على ماسنجر",
            adWithUs: "أعلن لدينا",
            adWithUsIntro:
              "في البداية نود أن نشكركم على رغبتكم في الإعلان معنا،حيث يعتبر موقعسوريا للصرافة من أكبر المواقع العربية والسورية المتخصصة في نشر أسعار صرف العملات العربية والعالمية على مستوى المحافظات والمدن السورية وأيضاً نشر أسعار الذهب والفضة وأيضاً يتم نشر التدوينات التي تهتم بالأوضاع الاقتصادية والنصائح المالية والأخبار المحلية بشكل يومي.",
            WhyAdWithUs: "لماذا تعلن لدينا ؟ ",
            WhyAdWithUsParagraph:
              " يعتبر موقع سوريا للصرافة من أفضل المواقع التي تحصل على زيارات يومية بشكل كبير مما يتيح الفرصة لعرض إعلاناتكم بشكل أكبر للزائرين لذا العائد الاستثماري سيكون مميزاً بإذن الله تعالى.",
            TypeOfAds: "أنواع الإعلانات",
            TypeOfAdsPara1:
              "نوفر في موقعنا باقات محددة لعرض إعلاناتكم وبمقاسات مختلفة",
            TypeOfAdsPara2: "إعلان بنر بمقاس 1052*618",
            TypeOfAdsPara3: "إعلان بنر بمقاس 320*250",
            TypeOfAdsPara4:
              "يمنع عرض الإعلانات التي تحتوى على النساء او الخمور او الفروكس او مواقع الدردشة. ونحتفظ بحقنا في رفض أي إعلان",
            AboutUsPara1:
              "سوريا للصرافة هي مؤسسة غير ربحية تقدم خدماتها إلى الجمهور العربي في جميع دول العالم لمعرفة أسعار العملات العالمية والعربية وربطها مع أسعار الذهب ومتابعة جميع الأخبار والأسواق العالمية لحظة بلحظة من أجل تسهيل المعاملات المالية وإدارتها بشكل صحيح وسليم بما يهدف في النهاية لخدمة الجمهور العربي وزيادة الفرص الاستثمارية وتحسين أشكال الحياة للمواطنين",
            AboutUsPara2:
              "ليس لدينا أي مراكز أو مكاتب لخدمات تحويل الأموال أو اصريف الأموال في أي دولة، نحن نوفر أسعار العملات بدقة عالية من خلال الأسواق العالمية لحظة بلحظة فقط.",
            AboutUsPara3:
              "نسعى في مؤسسة سوريا للصرافة من خلال خدمة المدونة الإخبارية إلى تقديم النصائح المالية وطرح أفكار جديدة وزيادة التعاون بين الدول من خلال معرفة ثقافات الشعوب المختلفة ونشر الوعي المالي وإثراء المعرفة في العالم العربي والتي تساهم بدورها في خلق فرص عمل جديدة في مجال المعاملات المالية والأعمال التجارية والاستثمار.",
            AboutUsPara4:
              "وتهدف إلى خدمة الناس ومساعدتهم في توفير بيانات العملات لجميع الدول العربية والعالمية الأكثر تداولاً وإيجاد حلول لتسهيل المعاملات المالية بين البلدان وخلق عالم مليء بالتعاون والمحبة في المعاملات المالية والتجارية بما يحقق اعلى عائد للجميع.",
            AboutUsPara5:
              "نسعى عبر فريق عملنا إلى تسهيل الخدمات المالية والاستثمارية وتوفير جميع البيانات لأي عملة دون جهد أو عناء مع إتاحة الوصول إلى كافة المعلومات والإجابات على جميع الاستفسارات.. حرصاً منا على تقديم أفضل الاخدمات دائماً",
            news: "الأخبار",
            readMore: "قراءة المزيد",
            change: "تبديل",
            PrivacyPolicy: {
              title: "سياسة الخصوصية",
              introText1: "في موقع (سوريا للصرافة )، ندرك أن خصوصية معلوماتك الشخصية هامة لك ولنا. ",
              introText2: "فيما يلي معلومات حول أنواع المعلومات الشخصية التي نتلقاها ونقوم بجمعها عند زيارات https://syria-exchange.com ، وكيف نقوم بحماية معلوماتك الشخصية. ملفات السجل كما هو الحال مع معظم مواقع الويب المختلفة، نقوم بجمع واستخدام البيانات الموجودة في ملفات السجل.  تشمل المعلومات الموجودة في ملفات السجل عنوان بروتوكول الإنترنت (IP) الخاص بك، ومزود خدمة الإنترنت (ISP)، والمتصفح الذي استخدمته لزيارة موقعنا، والوقت الذي قمت فيه بالزيارة، والصفحات التي قمت بزيارتها عبر موقعنا. ",
              cookies: {
                title: "ملفات تعريف الارتباط:",
                text: "نحن نستخدم ملفات تعريف الارتباط لنمنحك أفضل تجربة أستخدام ممكنة على موقع بسيط، لمزيد من المعلومات حول ملفات تعريف الارتباط ، تفضل بزيارة: http://www.allaboutcookies.org. "
              },
              essentialCookies: {
                title: "ملفات تعريف الارتباط الأساسية:",
                text: "تعد ملفات تعريف الارتباط الأساسية ضرورية لك للتنقل والتنقل في جميع أنحاء الموقع، ولا تخزن أي معلومات يمكن استخدامها لأغراض الدعاية، بدون ملفات تعريف الارتباط الأساسية لن يعمل موقعنا بشكل صحيح."
              },
              customCookies: {
                title: "ملفات تعريف الارتباط المخصصة:",
                text: " تخزن ملفات تعريف الارتباط هذه المعلومات ، مثل تفضيلاتك الشخصية ، وتستخدمها لتخصيص تجربة فريدة لك. قد يشمل ذلك عرض نافذة منبثقة مرة واحدة فقط في زيارتك ، أو حفظ تفضيلات اللغة الخاصة بك ، أو السماح لك بتسجيل الدخول تلقائيًا إلى بعض ميزاتنا. "
              },
              analyticalCookies: {
                title: "ملفات تعريف الارتباط في Analytics:",
                text: "تلتقط ملفات تعريف الارتباط من Analytics بيانات مجهولة المصدر حتى نتمكن من رؤية الاتجاهات وتحسين تجربة موقعنا على الويب. هذه تتيح لنا اختبار تصميمات مختلفة ،وتساعدنا على تحديد الكسر إذا كان جزء من موقعنا لا يعمل."
              },
              advertisingCookies: {
                title: "ملفات تعريف الارتباط للإعلانات:",
                terms: [
                  "قد يستخدم بعض المعلنين من الجهات الخارجية ملفات تعريف الارتباط أو إشارات الويب عند الإعلان على موقعنا. سيقوم هؤلاء بإرسال معلومات إلى هؤلاء المعلنين (مثل Google من خلال برنامج Google AdSense) بما في ذلك عنوان IP الخاص بك ، ومزود خدمة الإنترنت ، والمتصفح الذي استخدمته لزيارة موقعنا ، وفي بعض الحالات معلومات حول ما إذا كنت قد قمت بتثبيت Flash.",
                  " يستخدم موردو الجهات الخارجية، بمن فيهم Google، ملفات تعريف ارتباط لعرض الإعلانات بناءً على زيارات المستخدم السابقة لموقعنا الإلكتروني أو لمواقع أخرى على الويب.",
                  "ستتمكّن Google وشركاؤها، باستخدام ملفات تعريف الارتباط للإعلانات، من عرض الإعلانات للمستخدمين لديك استنادًا إلى زياراتهم لموقعنا و/أو مواقع أخرى عبر الإنترنت.",
                  "يمكن للمستخدمين تعطيل استخدام الإعلانات المخصصة عن طريق الانتقال إلى إعدادات الإعلانات.",
                ]
              },
              outroText1: " إذا لم يتم اختيار تعطيل عرض إعلانات الأطراف الثالثة، فقد يتم استخدام ملفات تعريف ارتباط موردي أو شبكات إعلانات الأطراف الثالثة الأخرى أيضًا لعرض الإعلانات في موقعنا. يستخدم هذا بشكل عام لأغراض الاستهداف الجغرافي على سبيل المثال (عرض الإعلانات SEO في ألمانيا لشخص ما في ألمانيا ) أو عرض إعلانات معينة بناءً على مواقع محددة تمتزيارتها (مثل عرض إعلانات العقارات لشخص يرتاد مواقع العقارات).",
              outroText2: "من خلال الاستمرار في استخدام موقعنا ، فإنك توافق على وضع ملفات تعريف الارتباط على جهازك. يمكنك اختيار تعطيل أو إيقاف تشغيل ملفات تعريف الارتباط أو ملفات تعريف ارتباط الطرف الثالث بشكل انتقائي في إعدادات المتصفح الخاص بك. ومع ذلك ، يمكن أن يؤثر هذا على كيفية تفاعلك مع موقعنا وكذلك مع مواقع الويب الأخرى. اذا كان لديك اى سؤال او كان هنا اى مشكلة فى  سياسة أستخدام البيانات الخاصة بنا الرجاء المراسلة ع من خلال صفحة الأتصال بنا ",
              emailContact: " او عبر الايميل"
            },
            UserAgreement: {
              title: "اتفاقية المستخدم",
              introText: "من خلال استخدامك لموقع سوريا للصرافة فإنك توافق على الالتزام بالشروط والأحكام المنصوص عليها لذا يجب عليك الاطلاع على هذه الأحكام وأخدها بعين الاعتبار:",
              condition1: {
                title: "قبول الاتفاقية",
                terms: [
                  "من خلال استخدامك لهذا الموقع، فهذا يشير الى موافقتك الكاملة على قبول جميع الشروط والأحكام الواردة هنا.",
                  "يجب عدم استخدام هذا الموقع في حال كنت غير موافق على أي من هذه الشروط والأحكام القياسية.",
                  "تم إنشاء الشروط والأحكام الخاصة بنا في نموذج الشروط والأحكام ونموذج سياسة الخصوصية.",
                  "يمنع استخدام هذا الموقع لمن تقل أعمارهم عن 18 عام.",
                ]
              },
              condition2: {
                title: "حقوق الملكية الفردية",
                terms: [
                  "جميع العلامات التجارية التي تعرض على ها الموقع هي ملك خاص له. وأيضا كافة المحتوى المعروض على هذا الموقع من صور وموسيقى ورسوم وغيرها هي ملك حصري للموقع لا يمكن استخدامها قبل الحصول على اذن من مالك الموقع.",
                  "نحن نقدم لك صلاحية تصفح الموقع واعادة استخدام بعض المحتوى لأغراض شخصية فقط ولا يجوز بأي شكل من الأشكال استخدام الموقع لأغراض تجارية أو دمج الموقع مع موقع أخر إلا بعد الاتفاق معنا وعقد شراكة معنا وفي حال قيام أحد الأشخاص أو المواقع بها فانه سيتعرض للمساءلة القانونية.",
                ]
              },
              condition3: {
                title: "القيود",
                text: "في حال استخدامك لهذا الموقع يمنع عليك أن تقوم بما يلي:",
                terms: [
                  "استخدام الموقع بطريقة غير قانونية أو مخالفة سياسة الخصوصية.",
                  "القيام بأي سلوك من شأنه تعطيل أو اتلاف أو الحاق الضرر بالموقع والتداخل مع العمل أو المحتوى الخاص للموقع أو مع استخدام أي شخص آخر.",
                  "استخدام ها الموقع لغرض الاعلان أو التسويق أو الدعاية دون أخ اذن مسبق من مالك الموقع.",
                  "نشر الكراهية أو العنصرية أو كلام بذيء أو التشهير بشخص أو بموقع حيث هذا يعرضك للمساءلة القانونية.",
                  "إزالة احدى الاشعارات الخاصة بحقوق الطبع والنشر أو أي اشعارات أخرى خاصة بحقوق الملكية الفكرية من الموقع أو بمحتوى متاح على الموقع أو عبره. ان قيامك بأي من النشاطات السابقة المخالفة لسياسة الموقع يعرضك للمسائل القانونية."
                ]
              },
              condition4: {
                title: "اخلاء المسؤولية",
                text: "ان وصولك الى الموقع واستخدامك للمحتوى الخاص به يقع على مسؤوليك الخاصة. حيث أن المعلومات التي نقدمها هي لأغراض المعلومات العامة فقط. ويتم توفير جميع المعلومات على الموقع بحسن نية. ومع ذلك، فإننا لا نقدم أي تعهد أو ضمان من أي نوع، صريحًا أو ضمنيًا، فيما يتعلق بدقة أو كفاية أو صحة أو موثوقية أو توفر أو اكتمال أي معلومات على الموقع.",
              },
              condition5: {
                title: "خصوصيتك",
                text: "الرجاء قراءة سياسية الخصوصية ويجب أن يكون المحتوى الخاص بك حق فردي بشرط ان لا ينتهك الحقوق الخاصة بالموقع. ويمتلك الموقع أيضاً صلاحية لازالة أي محتوى خاص بك دون سابق انذار.",
              },
            },            
          },
        },
      },
    },
  });

export default i18n;

//    {t("description.change")}
