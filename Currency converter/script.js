

const currency_list = [
    ["AED", "United Arab Emirates Dirhams"],
    ["AFN", "Afghan Afghani"],
    ["ALL", "Albanian Lek"],
    ["AMD", "Armenian Dram"],
    ["ANG", "Netherlands Antillean Guilder"],
    ["AOA", "Angolan Kwanza"],
    ["ARS", "Argentine Peso"],
    ["AUD", "Australian Dollar"],
    ["AWG", "Aruban Florin"],
    ["AZN", "Azerbaijani Manat"],
    ["BAM", "Bosnia Herzegovina Convertible Mark"],
    ["BBD", "Barbadian Dollar"],
    ["BGN", "Bulgarian Lev"],
    ["BHD", "Bahraini Dinar"],
    ["BIF", "Burundian Franc"],
    ["BMD", "Bermudan Dollar"],
    ["BOB", "Bolivian Boliviano"],
    ["BRL", "Brazilian Real"],
    ["BSD", "Bahamian Dollar"],
    ["BWP", "Botswanan Pula"],
    ["BYN", "Belarusian Ruble"],
    ["BZD", "Belize Dollar"],
    ["CDF", "Congolese Franc"],
    ["CHF", "Swiss Franc"],
    ["CLP", "Chilean Peso"],
    ["CNY", "Chinese Yuan"],
    ["COP", "Colombian Peso"],
    ["CRC", "Costa Rican Colón"],
    ["CUP", "Cuban Peso"],
    ["CZK", "Czech Koruna"],
    ["DJF", "Djiboutian Franc"],
    ["DKK", "Danish Krone"],
    ["DOP", "Dominican Peso"],
    ["DZD", "Algerian Dinar"],
    ["EGP", "Egyptian Pound"],
    ["ERN", "Eritrean Nakfa"],
    ["EUR", "Euro"],
    ["FJD", "Fijian Dollar"],
    ["FKP", "Falkland Islands Pound"],
    ["GBP", "British Pound"],
    ["GEL", "Georgian Lari"],
    ["GHS", "Ghanaian Cedi"],
    ["GIP", "Gibraltar Pound"],
    ["GMD", "Gambian Dalasi"],
    ["GNF", "Guinean Franc"],
    ["GTQ", "Guatemalan Quetzal"],
    ["GYD", "Guyanaese Dollar"],
    ["HKD", "Hong Kong Dollar"],
    ["HNL", "Honduran Lempira"],
    ["HRK", "Croatian Kuna"],
    ["HTG", "Haitian Gourde"],
    ["HUF", "Hungarian Forint"],
    ["IDR", "Indonesian Rupiah"],
    ["ILS", "Israeli New Shekel"],
    ["INR", "Indian Rupee"],
    ["IQD", "Iraqi Dinar"],
    ["IRR", "Iranian Rial"],
    ["ISK", "Icelandic Króna"],
    ["JMD", "Jamaican Dollar"],
    ["JOD", "Jordanian Dinar"],
    ["JPY", "Japanese Yen"],
    ["KES", "Kenyan Shilling"],
    ["KGS", "Kyrgystani Som"],
    ["KHR", "Cambodian Riel"],
    ["KMF", "Comorian Franc"],
    ["KRW", "South Korean Won"],
    ["KWD", "Kuwaiti Dinar"],
    ["KYD", "Cayman Islands Dollar"],
    ["KZT", "Kazakhstani Tenge"],
    ["LAK", "Laotian Kip"],
    ["LBP", "Lebanese Pound"],
    ["LKR", "Sri Lankan Rupee"],
    ["LRD", "Liberian Dollar"],
    ["LSL", "Lesotho Loti"],
    ["LYD", "Libyan Dinar"],
    ["MAD", "Moroccan Dirham"],
    ["MDL", "Moldovan Leu"],
    ["MGA", "Malagasy Ariary"],
    ["MKD", "Macedonian Denar"],
    ["MMK", "Myanmar Kyat"],
    ["MNT", "Mongolian Tugrik"],
    ["MOP", "Macanese Pataca"],
    ["MRU", "Mauritanian Ouguiya"],
    ["MUR", "Mauritian Rupee"],
    ["MVR", "Maldivian Rufiyaa"],
    ["MWK", "Malawian Kwacha"],
    ["MXN", "Mexican Peso"],
    ["MYR", "Malaysian Ringgit"],
    ["MZN", "Mozambican Metical"],
    ["NAD", "Namibian Dollar"],
    ["NGN", "Nigerian Naira"],
    ["NIO", "Nicaraguan Córdoba"],
    ["NOK", "Norwegian Krone"],
    ["NPR", "Nepalese Rupee"],
    ["NZD", "New Zealand Dollar"],
    ["OMR", "Omani Rial"],
    ["PAB", "Panamanian Balboa"],
    ["PGK", "Papua New Guinean Kina"],
    ["PHP", "Philippine Peso"],
    ["PKR", "Pakistani Rupee"],
    ["PLN", "Polish Zloty"],
    ["PYG", "Paraguayan Guarani"],
    ["QAR", "Qatari Riyal"],
    ["RON", "Romanian Leu"],
    ["RSD", "Serbian Dinar"],
    ["RUB", "Russian Ruble"],
    ["RWF", "Rwandan Franc"],
    ["SAR", "Saudi Riyal"],
    ["SBD", "Solomon Islands Dollar"],
    ["SCR", "Seychellois Rupee"],
    ["SDG", "Sudanese Pound"],
    ["SEK", "Swedish Krona"],
    ["SGD", "Singapore Dollar"],
    ["SHP", "St. Helena Pound"],
    ["SLL", "Sierra Leonean Leone (1964—2022)"],
    ["SOS", "Somali Shilling"],
    ["SRD", "Surinamese Dollar"],
    ["SSP", "South Sudanese Pound"],
    ["STN", "São Tomé Príncipe Dobra"],
    ["SYP", "Syrian Pound"],
    ["SZL", "Swazi Lilangeni"],
    ["THB", "Thai Baht"],
    ["TJS", "Tajikistani Somoni"],
    ["TMT", "Turkmenistani Manat"],
    ["TND", "Tunisian Dinar"],
    ["TOP", "Tongan Paanga"],
    ["TRY", "Turkish Lira"],
    ["TTD", "Trinidad Tobago Dollar"],
    ["TWD", "New Taiwan Dollar"],
    ["TZS", "Tanzanian Shilling"],
    ["UAH", "Ukrainian Hryvnia"],
    ["UGX", "Ugandan Shilling"],
    ["USD", "US Dollar"],
    ["UYU", "Uruguayan Peso"],
    ["UZS", "Uzbekistani Som"],
    ["VES", "Venezuelan Bolívar"],
    ["VND", "Vietnamese Dong"],
    ["VUV", "Vanuatu Vatu"],
    ["WST", "Samoan Tala"],
    ["XAF", "Central African CFA Franc"],
    ["XCD", "East Caribbean Dollar"],
    ["XOF", "West African CFA Franc"],
    ["XPF", "CFP Franc"],
    ["YER", "Yemeni Rial"],
    ["ZAR", "South African Rand"],
    ["ZMW", "Zambian Kwacha"],
    ["ZWL", "Zimbabwean Dollar (2009)"]
];
const currency_rate = {"USD": 1,
"AED": 3.6725,
"AFN": 71.9004,
"ALL": 92.6073,
"AMD": 387.7944,
"ANG": 1.79,
"AOA": 856.4315,
"ARS": 864.75,
"AUD": 1.5095,
"AWG": 1.79,
"AZN": 1.6988,
"BAM": 1.8032,
"BBD": 2,
"BDT": 117.337,
"BGN": 1.8032,
"BHD": 0.376,
"BIF": 2865.9418,
"BMD": 1,
"BND": 1.3506,
"BOB": 6.9194,
"BRL": 5.1451,
"BSD": 1,
"BTN": 83.1171,
"BWP": 13.5833,
"BYN": 3.2636,
"BZD": 2,
"CAD": 1.367,
"CDF": 2771.1745,
"CHF": 0.9145,
"CLP": 906.2232,
"CNY": 7.2592,
"COP": 3873.8256,
"CRC": 514.9619,
"CUP": 24,
"CVE": 101.661,
"CZK": 22.731,
"DJF": 177.721,
"DKK": 6.8778,
"DOP": 58.9055,
"DZD": 134.4808,
"EGP": 46.9775,
"ERN": 15,
"ETB": 57.4613,
"EUR": 0.922,
"FJD": 2.266,
"FKP": 0.7852,
"FOK": 6.8778,
"GBP": 0.7853,
"GEL": 2.7388,
"GGP": 0.7852,
"GHS": 14.6242,
"GIP": 0.7852,
"GMD": 67.3824,
"GNF": 8538.4073,
"GTQ": 7.766,
"GYD": 209.2785,
"HKD": 7.8129,
"HNL": 24.7056,
"HRK": 6.9466,
"HTG": 132.651,
"HUF": 353.9804,
"IDR": 16032.2875,
"ILS": 3.6662,
"IMP": 0.7852,
"INR": 83.1076,
"IQD": 1311.0734,
"IRR": 42093.768,
"ISK": 138.1955,
"JEP": 0.7852,
"JMD": 155.956,
"JOD": 0.709,
"JPY": 156.9945,
"KES": 132.2474,
"KGS": 88.105,
"KHR": 4089.6801,
"KID": 1.5094,
"KMF": 453.5795,
"KRW": 1365.7691,
"KWD": 0.3068,
"KYD": 0.8333,
"KZT": 443.0254,
"LAK": 21695.1542,
"LBP": 89500,
"LKR": 299.8925,
"LRD": 193.4358,
"LSL": 18.4056,
"LYD": 4.8449,
"MAD": 9.9567,
"MDL": 17.6467,
"MGA": 4442.2747,
"MKD": 56.6999,
"MMK": 2100.3124,
"MNT": 3415.9264,
"MOP": 8.0472,
"MRU": 39.6158,
"MUR": 46.1181,
"MVR": 15.4324,
"MWK": 1735.9973,
"MXN": 16.6874,
"MYR": 4.7115,
"MZN": 63.6543,
"NAD": 18.4056,
"NGN": 1465.2662,
"NIO": 36.9329,
"NOK": 10.5953,
"NPR": 132.9873,
"NZD": 1.6337,
"OMR": 0.3845,
"PAB": 1,
"PEN": 3.7349,
"PGK": 3.8598,
"PHP": 58.209,
"PKR": 278.446,
"PLN": 3.9216,
"PYG": 7490.8954,
"QAR": 3.64,
"RON": 4.5875,
"RSD": 107.9886,
"RUB": 89.5968,
"RWF": 1300.3879,
"SAR": 3.75,
"SBD": 8.3264,
"SCR": 14.4715,
"SDG": 458.8161,
"SEK": 10.6578,
"SGD": 1.3507,
"SHP": 0.7852,
"SLE": 22.6613,
"SLL": 22661.2592,
"SOS": 571.3533,
"SRD": 32.4823,
"SSP": 1728.1409,
"STN": 22.5883,
"SYP": 12884.5465,
"SZL": 18.4056,
"THB": 36.647,
"TJS": 10.888,
"TMT": 3.5002,
"TND": 3.1206,
"TOP": 2.3333,
"TRY": 32.229,
"TTD": 6.7805,
"TVD": 1.5094,
"TWD": 32.2032,
"TZS": 2598.6368,
"UAH": 40.146,
"UGX": 3792.6559,
"UYU": 38.4443,
"UZS": 12767.5711,
"VES": 36.5129,
"VND": 25476.2182,
"VUV": 119.6426,
"WST": 2.7371,
"XAF": 604.7727,
"XCD": 2.7,
"XDR": 0.7567,
"XOF": 604.7727,
"XPF": 110.0205,
"YER": 250.1646,
"ZAR": 18.4082,
"ZMW": 26.6835,
"ZWL": 13.2242};
// const currency_value = {
//     "result": "success",
//     "documentation": "https://www.exchangerate-api.com/docs",
//     "terms_of_use": "https://www.exchangerate-api.com/terms",
//     "time_last_update_unix": 1716768001,
//     "time_last_update_utc": "Mon, 27 May 2024 00:00:01 +0000",
//     "time_next_update_unix": 1716854401,
//     "time_next_update_utc": "Tue, 28 May 2024 00:00:01 +0000",
//     "base_code": "USD",
//     "conversion_rates": {
//       "USD": 1,
//       "AED": 3.6725,
//       "AFN": 71.9004,
//       "ALL": 92.6073,
//       "AMD": 387.7944,
//       "ANG": 1.79,
//       "AOA": 856.4315,
//       "ARS": 864.75,
//       "AUD": 1.5095,
//       "AWG": 1.79,
//       "AZN": 1.6988,
//       "BAM": 1.8032,
//       "BBD": 2,
//       "BDT": 117.337,
//       "BGN": 1.8032,
//       "BHD": 0.376,
//       "BIF": 2865.9418,
//       "BMD": 1,
//       "BND": 1.3506,
//       "BOB": 6.9194,
//       "BRL": 5.1451,
//       "BSD": 1,
//       "BTN": 83.1171,
//       "BWP": 13.5833,
//       "BYN": 3.2636,
//       "BZD": 2,
//       "CAD": 1.367,
//       "CDF": 2771.1745,
//       "CHF": 0.9145,
//       "CLP": 906.2232,
//       "CNY": 7.2592,
//       "COP": 3873.8256,
//       "CRC": 514.9619,
//       "CUP": 24,
//       "CVE": 101.661,
//       "CZK": 22.731,
//       "DJF": 177.721,
//       "DKK": 6.8778,
//       "DOP": 58.9055,
//       "DZD": 134.4808,
//       "EGP": 46.9775,
//       "ERN": 15,
//       "ETB": 57.4613,
//       "EUR": 0.922,
//       "FJD": 2.266,
//       "FKP": 0.7852,
//       "FOK": 6.8778,
//       "GBP": 0.7853,
//       "GEL": 2.7388,
//       "GGP": 0.7852,
//       "GHS": 14.6242,
//       "GIP": 0.7852,
//       "GMD": 67.3824,
//       "GNF": 8538.4073,
//       "GTQ": 7.766,
//       "GYD": 209.2785,
//       "HKD": 7.8129,
//       "HNL": 24.7056,
//       "HRK": 6.9466,
//       "HTG": 132.651,
//       "HUF": 353.9804,
//       "IDR": 16032.2875,
//       "ILS": 3.6662,
//       "IMP": 0.7852,
//       "INR": 83.1076,
//       "IQD": 1311.0734,
//       "IRR": 42093.768,
//       "ISK": 138.1955,
//       "JEP": 0.7852,
//       "JMD": 155.956,
//       "JOD": 0.709,
//       "JPY": 156.9945,
//       "KES": 132.2474,
//       "KGS": 88.105,
//       "KHR": 4089.6801,
//       "KID": 1.5094,
//       "KMF": 453.5795,
//       "KRW": 1365.7691,
//       "KWD": 0.3068,
//       "KYD": 0.8333,
//       "KZT": 443.0254,
//       "LAK": 21695.1542,
//       "LBP": 89500,
//       "LKR": 299.8925,
//       "LRD": 193.4358,
//       "LSL": 18.4056,
//       "LYD": 4.8449,
//       "MAD": 9.9567,
//       "MDL": 17.6467,
//       "MGA": 4442.2747,
//       "MKD": 56.6999,
//       "MMK": 2100.3124,
//       "MNT": 3415.9264,
//       "MOP": 8.0472,
//       "MRU": 39.6158,
//       "MUR": 46.1181,
//       "MVR": 15.4324,
//       "MWK": 1735.9973,
//       "MXN": 16.6874,
//       "MYR": 4.7115,
//       "MZN": 63.6543,
//       "NAD": 18.4056,
//       "NGN": 1465.2662,
//       "NIO": 36.9329,
//       "NOK": 10.5953,
//       "NPR": 132.9873,
//       "NZD": 1.6337,
//       "OMR": 0.3845,
//       "PAB": 1,
//       "PEN": 3.7349,
//       "PGK": 3.8598,
//       "PHP": 58.209,
//       "PKR": 278.446,
//       "PLN": 3.9216,
//       "PYG": 7490.8954,
//       "QAR": 3.64,
//       "RON": 4.5875,
//       "RSD": 107.9886,
//       "RUB": 89.5968,
//       "RWF": 1300.3879,
//       "SAR": 3.75,
//       "SBD": 8.3264,
//       "SCR": 14.4715,
//       "SDG": 458.8161,
//       "SEK": 10.6578,
//       "SGD": 1.3507,
//       "SHP": 0.7852,
//       "SLE": 22.6613,
//       "SLL": 22661.2592,
//       "SOS": 571.3533,
//       "SRD": 32.4823,
//       "SSP": 1728.1409,
//       "STN": 22.5883,
//       "SYP": 12884.5465,
//       "SZL": 18.4056,
//       "THB": 36.647,
//       "TJS": 10.888,
//       "TMT": 3.5002,
//       "TND": 3.1206,
//       "TOP": 2.3333,
//       "TRY": 32.229,
//       "TTD": 6.7805,
//       "TVD": 1.5094,
//       "TWD": 32.2032,
//       "TZS": 2598.6368,
//       "UAH": 40.146,
//       "UGX": 3792.6559,
//       "UYU": 38.4443,
//       "UZS": 12767.5711,
//       "VES": 36.5129,
//       "VND": 25476.2182,
//       "VUV": 119.6426,
//       "WST": 2.7371,
//       "XAF": 604.7727,
//       "XCD": 2.7,
//       "XDR": 0.7567,
//       "XOF": 604.7727,
//       "XPF": 110.0205,
//       "YER": 250.1646,
//       "ZAR": 18.4082,
//       "ZMW": 26.6835,
//       "ZWL": 13.2242
//     }
//   }
//let value= 1;

//var inputCountryName = document.getElementById("countryFrom").value;




  // Get the dropdown element
  var dropdown = document.getElementById("countryFrom").value;
  
  
  // populate country from dropdown
  currency_list.forEach(function(currency) {
       var option = document.createElement("option");
       option.value = currency[0];
       option.text = currency[1];
       document.getElementById("countryFrom").appendChild(option);
       //countryTo.add(option);
   });
 
    // populate country to dropdown box
    currency_list.forEach(function(currency) {
        var option = document.createElement("option");
        option.value = currency[0];
        option.text = currency[1];
        document.getElementById("countryTo").appendChild(option);
        //countryTo.add(option);
    });




function checkforblank() {

   const value = document.getElementById('amount').value;
   if (value === "") {
       alert('Please input a value');
       return false;
   }
   
   submitForm();
   
  
}






function submitForm(){
 
  const countryFromName = document.getElementById("countryFrom").value;
  const countryTo = document.getElementById("countryTo").value;
  const inputAmount =  parseFloat(document.getElementById("amount").value);
  const toDollarConvertedAmount = parseFloat(conversiontoDollar(inputAmount,countryFromName));
const finalConvertedAmount = parseFloat(conversionFromDollar(toDollarConvertedAmount,countryTo));
  document.getElementById('result').innerHTML = `The us conversion of ${inputAmount} in ${countryFromName} is ${finalConvertedAmount.toFixed(2)} in ${countryTo}.`;
 
}
function conversiontoDollar(inputAmount,countryFromName){
let result = 1.0;
  for (const [key, value] of Object.entries(currency_rate)) {
            if(key==countryFromName){
                result = inputAmount / value;
           }
}
return result;
}
function conversionFromDollar(inputAmount,countryToName){
    let result = 1.0;
      for (const [key, value] of Object.entries(currency_rate)) {
                if(key==countryToName){
                    result = inputAmount * value;
               }
    }
    return result;
    }
