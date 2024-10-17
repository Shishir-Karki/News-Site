/**
 * @author Mr. Eshank Tyagi
 * Available Variables & Data :-
 *
 * @var subtleColors - An array of subtle color objects, each containing a name and a color in RGBA format.
 * @var countries - A list of country objects, each containing a country code and country name.
 * @var languages - An array of language objects, each containing a language code and its corresponding language name.
*/

/**
 * An array of subtle color objects, each containing a name and a color in RGBA format.
 *
 * @constant {Array<Object>}
 * @default
 * @property {string} name - The name of the color.
 * @property {string} color - The RGBA color value.
 */
export const subtleColors = [
  {
    name: "Lavender Mist",
    color: "rgba(230, 224, 238, 0.8)",
  },
  {
    name: "Mint Green",
    color: "rgba(218, 240, 233, 0.8)",
  },
  {
    name: "Peach Blossom",
    color: "rgba(255, 235, 238, 0.8)",
  },
  {
    name: "Sky Blue",
    color: "rgba(219, 238, 248, 0.8)",
  },
  {
    name: "Creamy Ivory",
    color: "rgba(255, 253, 240, 0.8)",
  },
  {
    name: "Light Gray",
    color: "rgba(238, 238, 238, 0.8)",
  },
  {
    name: "Pale Beige",
    color: "rgba(245, 240, 235, 0.8)",
  },
  {
    name: "Soft Sand",
    color: "rgba(245, 240, 230, 0.8)",
  },
  {
    name: "Silver Gray",
    color: "rgba(220, 220, 220, 0.8)",
  },
  {
    name: "Pearl White",
    color: "rgba(255, 255, 245, 0.8)",
  },
  {
    name: "Lilac Haze",
    color: "rgba(235, 225, 240, 0.8)",
  },
  {
    name: "Seafoam Green",
    color: "rgba(220, 240, 238, 0.8)",
  },
  {
    name: "Apricot Glow",
    color: "rgba(255, 235, 225, 0.8)",
  },
  {
    name: "Cloud White",
    color: "rgba(255, 255, 255, 0.8)",
  },
  {
    name: "Mist Blue",
    color: "rgba(225, 235, 245, 0.8)",
  },
  {
    name: "Soft Pink",
    color: "rgba(255, 220, 230, 0.8)",
  },
  {
    name: "Pale Yellow",
    color: "rgba(255, 245, 220, 0.8)",
  },
  {
    name: "Lavender Blush",
    color: "rgba(255, 220, 240, 0.8)",
  },
  {
    name: "Baby Blue",
    color: "rgba(220, 230, 245, 0.8)",
  },
  {
    name: "Creamy Beige",
    color: "rgba(245, 240, 235, 0.8)",
  },
  {
    name: "Light Green",
    color: "rgba(225, 240, 230, 0.8)",
  },
  {
    name: "Pale Orange",
    color: "rgba(255, 235, 220, 0.8)",
  },
  {
    name: "Soft Purple",
    color: "rgba(230, 220, 240, 0.8)",
  },
  {
    name: "Ivory White",
    color: "rgba(255, 253, 245, 0.8)",
  },
  {
    name: "Light Yellow",
    color: "rgba(255, 245, 225, 0.8)",
  },
  {
    name: "Pale Blue",
    color: "rgba(220, 230, 240, 0.8)",
  },
  {
    name: "Soft Red",
    color: "rgba(255, 220, 225, 0.8)",
  },
  {
    name: "Creamy White",
    color: "rgba(255, 253, 245, 0.8)",
  },
  {
    name: "Light Pink",
    color: "rgba(255, 230, 235, 0.8)",
  },
];

/**
 * A list of country objects, each containing a country code and country name.
 *
 * @constant
 * @type {Array<Object>}
 * @property {string} code - The ISO 3166-1 alpha-2 country code.
 * @property {string} country - The name of the country.
 */
export const countries = [
  {
    code: "AF",
    country: "Afghanistan",
  },
  {
    code: "AX",
    country: "Aland Islands",
  },
  {
    code: "AL",
    country: "Albania",
  },
  {
    code: "DZ",
    country: "Algeria",
  },
  {
    code: "AS",
    country: "American Samoa",
  },
  {
    code: "AD",
    country: "Andorra",
  },
  {
    code: "AO",
    country: "Angola",
  },
  {
    code: "AI",
    country: "Anguilla",
  },
  {
    code: "AQ",
    country: "Antarctica",
  },
  {
    code: "AG",
    country: "Antigua And Barbuda",
  },
  {
    code: "AR",
    country: "Argentina",
  },
  {
    code: "AM",
    country: "Armenia",
  },
  {
    code: "AW",
    country: "Aruba",
  },
  {
    code: "AU",
    country: "Australia",
  },
  {
    code: "AT",
    country: "Austria",
  },
  {
    code: "AZ",
    country: "Azerbaijan",
  },
  {
    code: "BS",
    country: "Bahamas",
  },
  {
    code: "BH",
    country: "Bahrain",
  },
  {
    code: "BD",
    country: "Bangladesh",
  },
  {
    code: "BB",
    country: "Barbados",
  },
  {
    code: "BY",
    country: "Belarus",
  },
  {
    code: "BE",
    country: "Belgium",
  },
  {
    code: "BZ",
    country: "Belize",
  },
  {
    code: "BJ",
    country: "Benin",
  },
  {
    code: "BM",
    country: "Bermuda",
  },
  {
    code: "BT",
    country: "Bhutan",
  },
  {
    code: "BO",
    country: "Bolivia",
  },
  {
    code: "BA",
    country: "Bosnia And Herzegovina",
  },
  {
    code: "BW",
    country: "Botswana",
  },
  {
    code: "BV",
    country: "Bouvet Island",
  },
  {
    code: "BR",
    country: "Brazil",
  },
  {
    code: "IO",
    country: "British Indian Ocean Territory",
  },
  {
    code: "BN",
    country: "Brunei Darussalam",
  },
  {
    code: "BG",
    country: "Bulgaria",
  },
  {
    code: "BF",
    country: "Burkina Faso",
  },
  {
    code: "BI",
    country: "Burundi",
  },
  {
    code: "KH",
    country: "Cambodia",
  },
  {
    code: "CM",
    country: "Cameroon",
  },
  {
    code: "CA",
    country: "Canada",
  },
  {
    code: "CV",
    country: "Cape Verde",
  },
  {
    code: "KY",
    country: "Cayman Islands",
  },
  {
    code: "CF",
    country: "Central African Republic",
  },
  {
    code: "TD",
    country: "Chad",
  },
  {
    code: "CL",
    country: "Chile",
  },
  {
    code: "CN",
    country: "China",
  },
  {
    code: "CX",
    country: "Christmas Island",
  },
  {
    code: "CC",
    country: "Cocos (Keeling) Islands",
  },
  {
    code: "CO",
    country: "Colombia",
  },
  {
    code: "KM",
    country: "Comoros",
  },
  {
    code: "CG",
    country: "Congo",
  },
  {
    code: "CD",
    country: "Congo, Democratic Republic",
  },
  {
    code: "CK",
    country: "Cook Islands",
  },
  {
    code: "CR",
    country: "Costa Rica",
  },
  {
    code: "CI",
    country: 'Cote D"Ivoire',
  },
  {
    code: "HR",
    country: "Croatia",
  },
  {
    code: "CU",
    country: "Cuba",
  },
  {
    code: "CY",
    country: "Cyprus",
  },
  {
    code: "CZ",
    country: "Czech Republic",
  },
  {
    code: "DK",
    country: "Denmark",
  },
  {
    code: "DJ",
    country: "Djibouti",
  },
  {
    code: "DM",
    country: "Dominica",
  },
  {
    code: "DO",
    country: "Dominican Republic",
  },
  {
    code: "EC",
    country: "Ecuador",
  },
  {
    code: "EG",
    country: "Egypt",
  },
  {
    code: "SV",
    country: "El Salvador",
  },
  {
    code: "GQ",
    country: "Equatorial Guinea",
  },
  {
    code: "ER",
    country: "Eritrea",
  },
  {
    code: "EE",
    country: "Estonia",
  },
  {
    code: "ET",
    country: "Ethiopia",
  },
  {
    code: "FK",
    country: "Falkland Islands (Malvinas)",
  },
  {
    code: "FO",
    country: "Faroe Islands",
  },
  {
    code: "FJ",
    country: "Fiji",
  },
  {
    code: "FI",
    country: "Finland",
  },
  {
    code: "FR",
    country: "France",
  },
  {
    code: "GF",
    country: "French Guiana",
  },
  {
    code: "PF",
    country: "French Polynesia",
  },
  {
    code: "TF",
    country: "French Southern Territories",
  },
  {
    code: "GA",
    country: "Gabon",
  },
  {
    code: "GM",
    country: "Gambia",
  },
  {
    code: "GE",
    country: "Georgia",
  },
  {
    code: "DE",
    country: "Germany",
  },
  {
    code: "GH",
    country: "Ghana",
  },
  {
    code: "GI",
    country: "Gibraltar",
  },
  {
    code: "GR",
    country: "Greece",
  },
  {
    code: "GL",
    country: "Greenland",
  },
  {
    code: "GD",
    country: "Grenada",
  },
  {
    code: "GP",
    country: "Guadeloupe",
  },
  {
    code: "GU",
    country: "Guam",
  },
  {
    code: "GT",
    country: "Guatemala",
  },
  {
    code: "GG",
    country: "Guernsey",
  },
  {
    code: "GN",
    country: "Guinea",
  },
  {
    code: "GW",
    country: "Guinea-Bissau",
  },
  {
    code: "GY",
    country: "Guyana",
  },
  {
    code: "HT",
    country: "Haiti",
  },
  {
    code: "HM",
    country: "Heard Island & Mcdonald Islands",
  },
  {
    code: "VA",
    country: "Holy See (Vatican City State)",
  },
  {
    code: "HN",
    country: "Honduras",
  },
  {
    code: "HK",
    country: "Hong Kong",
  },
  {
    code: "HU",
    country: "Hungary",
  },
  {
    code: "IS",
    country: "Iceland",
  },
  {
    code: "IN",
    country: "India",
  },
  {
    code: "ID",
    country: "Indonesia",
  },
  {
    code: "IR",
    country: "Iran, Islamic Republic Of",
  },
  {
    code: "IQ",
    country: "Iraq",
  },
  {
    code: "IE",
    country: "Ireland",
  },
  {
    code: "IM",
    country: "Isle Of Man",
  },
  {
    code: "IL",
    country: "Israel",
  },
  {
    code: "IT",
    country: "Italy",
  },
  {
    code: "JM",
    country: "Jamaica",
  },
  {
    code: "JP",
    country: "Japan",
  },
  {
    code: "JE",
    country: "Jersey",
  },
  {
    code: "JO",
    country: "Jordan",
  },
  {
    code: "KZ",
    country: "Kazakhstan",
  },
  {
    code: "KE",
    country: "Kenya",
  },
  {
    code: "KI",
    country: "Kiribati",
  },
  {
    code: "KR",
    country: "Korea",
  },
  {
    code: "KP",
    country: "North Korea",
  },
  {
    code: "KW",
    country: "Kuwait",
  },
  {
    code: "KG",
    country: "Kyrgyzstan",
  },
  {
    code: "LA",
    country: 'Lao People"s Democratic Republic',
  },
  {
    code: "LV",
    country: "Latvia",
  },
  {
    code: "LB",
    country: "Lebanon",
  },
  {
    code: "LS",
    country: "Lesotho",
  },
  {
    code: "LR",
    country: "Liberia",
  },
  {
    code: "LY",
    country: "Libyan Arab Jamahiriya",
  },
  {
    code: "LI",
    country: "Liechtenstein",
  },
  {
    code: "LT",
    country: "Lithuania",
  },
  {
    code: "LU",
    country: "Luxembourg",
  },
  {
    code: "MO",
    country: "Macao",
  },
  {
    code: "MK",
    country: "Macedonia",
  },
  {
    code: "MG",
    country: "Madagascar",
  },
  {
    code: "MW",
    country: "Malawi",
  },
  {
    code: "MY",
    country: "Malaysia",
  },
  {
    code: "MV",
    country: "Maldives",
  },
  {
    code: "ML",
    country: "Mali",
  },
  {
    code: "MT",
    country: "Malta",
  },
  {
    code: "MH",
    country: "Marshall Islands",
  },
  {
    code: "MQ",
    country: "Martinique",
  },
  {
    code: "MR",
    country: "Mauritania",
  },
  {
    code: "MU",
    country: "Mauritius",
  },
  {
    code: "YT",
    country: "Mayotte",
  },
  {
    code: "MX",
    country: "Mexico",
  },
  {
    code: "FM",
    country: "Micronesia, Federated States Of",
  },
  {
    code: "MD",
    country: "Moldova",
  },
  {
    code: "MC",
    country: "Monaco",
  },
  {
    code: "MN",
    country: "Mongolia",
  },
  {
    code: "ME",
    country: "Montenegro",
  },
  {
    code: "MS",
    country: "Montserrat",
  },
  {
    code: "MA",
    country: "Morocco",
  },
  {
    code: "MZ",
    country: "Mozambique",
  },
  {
    code: "MM",
    country: "Myanmar",
  },
  {
    code: "NA",
    country: "Namibia",
  },
  {
    code: "NR",
    country: "Nauru",
  },
  {
    code: "NP",
    country: "Nepal",
  },
  {
    code: "NL",
    country: "Netherlands",
  },
  {
    code: "AN",
    country: "Netherlands Antilles",
  },
  {
    code: "NC",
    country: "New Caledonia",
  },
  {
    code: "NZ",
    country: "New Zealand",
  },
  {
    code: "NI",
    country: "Nicaragua",
  },
  {
    code: "NE",
    country: "Niger",
  },
  {
    code: "NG",
    country: "Nigeria",
  },
  {
    code: "NU",
    country: "Niue",
  },
  {
    code: "NF",
    country: "Norfolk Island",
  },
  {
    code: "MP",
    country: "Northern Mariana Islands",
  },
  {
    code: "NO",
    country: "Norway",
  },
  {
    code: "OM",
    country: "Oman",
  },
  {
    code: "PK",
    country: "Pakistan",
  },
  {
    code: "PW",
    country: "Palau",
  },
  {
    code: "PS",
    country: "Palestinian Territory, Occupied",
  },
  {
    code: "PA",
    country: "Panama",
  },
  {
    code: "PG",
    country: "Papua New Guinea",
  },
  {
    code: "PY",
    country: "Paraguay",
  },
  {
    code: "PE",
    country: "Peru",
  },
  {
    code: "PH",
    country: "Philippines",
  },
  {
    code: "PN",
    country: "Pitcairn",
  },
  {
    code: "PL",
    country: "Poland",
  },
  {
    code: "PT",
    country: "Portugal",
  },
  {
    code: "PR",
    country: "Puerto Rico",
  },
  {
    code: "QA",
    country: "Qatar",
  },
  {
    code: "RE",
    country: "Reunion",
  },
  {
    code: "RO",
    country: "Romania",
  },
  {
    code: "RU",
    country: "Russian Federation",
  },
  {
    code: "RW",
    country: "Rwanda",
  },
  {
    code: "BL",
    country: "Saint Barthelemy",
  },
  {
    code: "SH",
    country: "Saint Helena",
  },
  {
    code: "KN",
    country: "Saint Kitts And Nevis",
  },
  {
    code: "LC",
    country: "Saint Lucia",
  },
  {
    code: "MF",
    country: "Saint Martin",
  },
  {
    code: "PM",
    country: "Saint Pierre And Miquelon",
  },
  {
    code: "VC",
    country: "Saint Vincent And Grenadines",
  },
  {
    code: "WS",
    country: "Samoa",
  },
  {
    code: "SM",
    country: "San Marino",
  },
  {
    code: "ST",
    country: "Sao Tome And Principe",
  },
  {
    code: "SA",
    country: "Saudi Arabia",
  },
  {
    code: "SN",
    country: "Senegal",
  },
  {
    code: "RS",
    country: "Serbia",
  },
  {
    code: "SC",
    country: "Seychelles",
  },
  {
    code: "SL",
    country: "Sierra Leone",
  },
  {
    code: "SG",
    country: "Singapore",
  },
  {
    code: "SK",
    country: "Slovakia",
  },
  {
    code: "SI",
    country: "Slovenia",
  },
  {
    code: "SB",
    country: "Solomon Islands",
  },
  {
    code: "SO",
    country: "Somalia",
  },
  {
    code: "ZA",
    country: "South Africa",
  },
  {
    code: "GS",
    country: "South Georgia And Sandwich Isl.",
  },
  {
    code: "ES",
    country: "Spain",
  },
  {
    code: "LK",
    country: "Sri Lanka",
  },
  {
    code: "SD",
    country: "Sudan",
  },
  {
    code: "SR",
    country: "Suriname",
  },
  {
    code: "SJ",
    country: "Svalbard And Jan Mayen",
  },
  {
    code: "SZ",
    country: "Swaziland",
  },
  {
    code: "SE",
    country: "Sweden",
  },
  {
    code: "CH",
    country: "Switzerland",
  },
  {
    code: "SY",
    country: "Syrian Arab Republic",
  },
  {
    code: "TW",
    country: "Taiwan",
  },
  {
    code: "TJ",
    country: "Tajikistan",
  },
  {
    code: "TZ",
    country: "Tanzania",
  },
  {
    code: "TH",
    country: "Thailand",
  },
  {
    code: "TL",
    country: "Timor-Leste",
  },
  {
    code: "TG",
    country: "Togo",
  },
  {
    code: "TK",
    country: "Tokelau",
  },
  {
    code: "TO",
    country: "Tonga",
  },
  {
    code: "TT",
    country: "Trinidad And Tobago",
  },
  {
    code: "TN",
    country: "Tunisia",
  },
  {
    code: "TR",
    country: "Turkey",
  },
  {
    code: "TM",
    country: "Turkmenistan",
  },
  {
    code: "TC",
    country: "Turks And Caicos Islands",
  },
  {
    code: "TV",
    country: "Tuvalu",
  },
  {
    code: "UG",
    country: "Uganda",
  },
  {
    code: "UA",
    country: "Ukraine",
  },
  {
    code: "AE",
    country: "United Arab Emirates",
  },
  {
    code: "GB",
    country: "United Kingdom",
  },
  {
    code: "US",
    country: "United States",
  },
  {
    code: "UM",
    country: "United States Outlying Islands",
  },
  {
    code: "UY",
    country: "Uruguay",
  },
  {
    code: "UZ",
    country: "Uzbekistan",
  },
  {
    code: "VU",
    country: "Vanuatu",
  },
  {
    code: "VE",
    country: "Venezuela",
  },
  {
    code: "VN",
    country: "Vietnam",
  },
  {
    code: "VG",
    country: "Virgin Islands, British",
  },
  {
    code: "VI",
    country: "Virgin Islands, U.S.",
  },
  {
    code: "WF",
    country: "Wallis And Futuna",
  },
  {
    code: "EH",
    country: "Western Sahara",
  },
  {
    code: "YE",
    country: "Yemen",
  },
  {
    code: "ZM",
    country: "Zambia",
  },
  {
    code: "ZW",
    country: "Zimbabwe",
  },
];

/**
 * An array of language objects, each containing a language code and its corresponding language name.
 *
 * @constant {Array<Object>}
 * @property {string} code - The ISO 639-1 code for the language.
 * @property {string} language - The name of the language.
 *
 * @example
 * const languages = [
 *   { code: "en", language: "English" },
 *   { code: "es", language: "Spanish; Castilian" },
 *   // ... more languages
 * ];
 */
const languages = [
  {
    code: "aa",
    language: "Afar",
  },
  {
    code: "ab",
    language: "Abkhazian",
  },
  {
    code: "ae",
    language: "Avestan",
  },
  {
    code: "af",
    language: "Afrikaans",
  },
  {
    code: "ak",
    language: "Akan",
  },
  {
    code: "am",
    language: "Amharic",
  },
  {
    code: "an",
    language: "Aragonese",
  },
  {
    code: "ar",
    language: "Arabic",
  },
  {
    code: "as",
    language: "Assamese",
  },
  {
    code: "av",
    language: "Avaric",
  },
  {
    code: "ay",
    language: "Aymara",
  },
  {
    code: "az",
    language: "Azerbaijani",
  },
  {
    code: "ba",
    language: "Bashkir",
  },
  {
    code: "be",
    language: "Belarusian",
  },
  {
    code: "bg",
    language: "Bulgarian",
  },
  {
    code: "bh",
    language: "Bihari languages",
  },
  {
    code: "bi",
    language: "Bislama",
  },
  {
    code: "bm",
    language: "Bambara",
  },
  {
    code: "bn",
    language: "Bengali",
  },
  {
    code: "bo",
    language: "Tibetan",
  },
  {
    code: "br",
    language: "Breton",
  },
  {
    code: "bs",
    language: "Bosnian",
  },
  {
    code: "ca",
    language: "Catalan; Valencian",
  },
  {
    code: "ce",
    language: "Chechen",
  },
  {
    code: "ch",
    language: "Chamorro",
  },
  {
    code: "co",
    language: "Corsican",
  },
  {
    code: "cr",
    language: "Cree",
  },
  {
    code: "cs",
    language: "Czech",
  },
  {
    code: "cu",
    language:
      "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
  },
  {
    code: "cv",
    language: "Chuvash",
  },
  {
    code: "cy",
    language: "Welsh",
  },
  {
    code: "da",
    language: "Danish",
  },
  {
    code: "de",
    language: "German",
  },
  {
    code: "dv",
    language: "Divehi; Dhivehi; Maldivian",
  },
  {
    code: "dz",
    language: "Dzongkha",
  },
  {
    code: "ee",
    language: "Ewe",
  },
  {
    code: "el",
    language: "Greek, Modern (1453-)",
  },
  {
    code: "en",
    language: "English",
  },
  {
    code: "eo",
    language: "Esperanto",
  },
  {
    code: "es",
    language: "Spanish; Castilian",
  },
  {
    code: "et",
    language: "Estonian",
  },
  {
    code: "eu",
    language: "Basque",
  },
  {
    code: "fa",
    language: "Persian",
  },
  {
    code: "ff",
    language: "Fulah",
  },
  {
    code: "fi",
    language: "Finnish",
  },
  {
    code: "fj",
    language: "Fijian",
  },
  {
    code: "fo",
    language: "Faroese",
  },
  {
    code: "fr",
    language: "French",
  },
  {
    code: "fy",
    language: "Western Frisian",
  },
  {
    code: "ga",
    language: "Irish",
  },
  {
    code: "gd",
    language: "Gaelic; Scomttish Gaelic",
  },
  {
    code: "gl",
    language: "Galician",
  },
  {
    code: "gn",
    language: "Guarani",
  },
  {
    code: "gu",
    language: "Gujarati",
  },
  {
    code: "gv",
    language: "Manx",
  },
  {
    code: "ha",
    language: "Hausa",
  },
  {
    code: "he",
    language: "Hebrew",
  },
  {
    code: "hi",
    language: "Hindi",
  },
  {
    code: "ho",
    language: "Hiri Motu",
  },
  {
    code: "hr",
    language: "Croatian",
  },
  {
    code: "ht",
    language: "Haitian; Haitian Creole",
  },
  {
    code: "hu",
    language: "Hungarian",
  },
  {
    code: "hy",
    language: "Armenian",
  },
  {
    code: "hz",
    language: "Herero",
  },
  {
    code: "ia",
    language: "Interlingua (International Auxiliary Language Association)",
  },
  {
    code: "id",
    language: "Indonesian",
  },
  {
    code: "ie",
    language: "Interlingue; Occidental",
  },
  {
    code: "ig",
    language: "Igbo",
  },
  {
    code: "ii",
    language: "Sichuan Yi; Nuosu",
  },
  {
    code: "ik",
    language: "Inupiaq",
  },
  {
    code: "io",
    language: "Ido",
  },
  {
    code: "is",
    language: "Icelandic",
  },
  {
    code: "it",
    language: "Italian",
  },
  {
    code: "iu",
    language: "Inuktitut",
  },
  {
    code: "ja",
    language: "Japanese",
  },
  {
    code: "jv",
    language: "Javanese",
  },
  {
    code: "ka",
    language: "Georgian",
  },
  {
    code: "kg",
    language: "Kongo",
  },
  {
    code: "ki",
    language: "Kikuyu; Gikuyu",
  },
  {
    code: "kj",
    language: "Kuanyama; Kwanyama",
  },
  {
    code: "kk",
    language: "Kazakh",
  },
  {
    code: "kl",
    language: "Kalaallisut; Greenlandic",
  },
  {
    code: "km",
    language: "Central Khmer",
  },
  {
    code: "kn",
    language: "Kannada",
  },
  {
    code: "ko",
    language: "Korean",
  },
  {
    code: "kr",
    language: "Kanuri",
  },
  {
    code: "ks",
    language: "Kashmiri",
  },
  {
    code: "ku",
    language: "Kurdish",
  },
  {
    code: "kv",
    language: "Komi",
  },
  {
    code: "kw",
    language: "Cornish",
  },
  {
    code: "ky",
    language: "Kirghiz; Kyrgyz",
  },
  {
    code: "la",
    language: "Latin",
  },
  {
    code: "lb",
    language: "Luxembourgish; Letzeburgesch",
  },
  {
    code: "lg",
    language: "Ganda",
  },
  {
    code: "li",
    language: "Limburgan; Limburger; Limburgish",
  },
  {
    code: "ln",
    language: "Lingala",
  },
  {
    code: "lo",
    language: "Lao",
  },
  {
    code: "lt",
    language: "Lithuanian",
  },
  {
    code: "lu",
    language: "Luba-Katanga",
  },
  {
    code: "lv",
    language: "Latvian",
  },
  {
    code: "mg",
    language: "Malagasy",
  },
  {
    code: "mh",
    language: "Marshallese",
  },
  {
    code: "mi",
    language: "Maori",
  },
  {
    code: "mk",
    language: "Macedonian",
  },
  {
    code: "ml",
    language: "Malayalam",
  },
  {
    code: "mn",
    language: "Mongolian",
  },
  {
    code: "mr",
    language: "Marathi",
  },
  {
    code: "ms",
    language: "Malay",
  },
  {
    code: "mt",
    language: "Maltese",
  },
  {
    code: "my",
    language: "Burmese",
  },
  {
    code: "na",
    language: "Nauru",
  },
  {
    code: "nb",
    language: "Bokmål, Norwegian; Norwegian Bokmål",
  },
  {
    code: "nd",
    language: "Ndebele, North; North Ndebele",
  },
  {
    code: "ne",
    language: "Nepali",
  },
  {
    code: "ng",
    language: "Ndonga",
  },
  {
    code: "nl",
    language: "Dutch; Flemish",
  },
  {
    code: "nn",
    language: "Norwegian Nynorsk; Nynorsk, Norwegian",
  },
  {
    code: "no",
    language: "Norwegian",
  },
  {
    code: "nr",
    language: "Ndebele, South; South Ndebele",
  },
  {
    code: "nv",
    language: "Navajo; Navaho",
  },
  {
    code: "ny",
    language: "Chichewa; Chewa; Nyanja",
  },
  {
    code: "oc",
    language: "Occitan (post 1500)",
  },
  {
    code: "oj",
    language: "Ojibwa",
  },
  {
    code: "om",
    language: "Oromo",
  },
  {
    code: "or",
    language: "Oriya",
  },
  {
    code: "os",
    language: "Ossetian; Ossetic",
  },
  {
    code: "pa",
    language: "Panjabi; Punjabi",
  },
  {
    code: "pi",
    language: "Pali",
  },
  {
    code: "pl",
    language: "Polish",
  },
  {
    code: "ps",
    language: "Pushto; Pashto",
  },
  {
    code: "pt",
    language: "Portuguese",
  },
  {
    code: "qu",
    language: "Quechua",
  },
  {
    code: "rm",
    language: "Romansh",
  },
  {
    code: "rn",
    language: "Rundi",
  },
  {
    code: "ro",
    language: "Romanian; Moldavian; Moldovan",
  },
  {
    code: "ru",
    language: "Russian",
  },
  {
    code: "rw",
    language: "Kinyarwanda",
  },
  {
    code: "sa",
    language: "Sanskrit",
  },
  {
    code: "sc",
    language: "Sardinian",
  },
  {
    code: "sd",
    language: "Sindhi",
  },
  {
    code: "se",
    language: "Northern Sami",
  },
  {
    code: "sg",
    language: "Sango",
  },
  {
    code: "si",
    language: "Sinhala; Sinhalese",
  },
  {
    code: "sk",
    language: "Slovak",
  },
  {
    code: "sl",
    language: "Slovenian",
  },
  {
    code: "sm",
    language: "Samoan",
  },
  {
    code: "sn",
    language: "Shona",
  },
  {
    code: "so",
    language: "Somali",
  },
  {
    code: "sq",
    language: "Albanian",
  },
  {
    code: "sr",
    language: "Serbian",
  },
  {
    code: "ss",
    language: "Swati",
  },
  {
    code: "st",
    language: "Sotho, Southern",
  },
  {
    code: "su",
    language: "Sundanese",
  },
  {
    code: "sv",
    language: "Swedish",
  },
  {
    code: "sw",
    language: "Swahili",
  },
  {
    code: "ta",
    language: "Tamil",
  },
  {
    code: "te",
    language: "Telugu",
  },
  {
    code: "tg",
    language: "Tajik",
  },
  {
    code: "th",
    language: "Thai",
  },
  {
    code: "ti",
    language: "Tigrinya",
  },
  {
    code: "tk",
    language: "Turkmen",
  },
  {
    code: "tl",
    language: "Tagalog",
  },
  {
    code: "tn",
    language: "Tswana",
  },
  {
    code: "to",
    language: "Tonga (Tonga Islands)",
  },
  {
    code: "tr",
    language: "Turkish",
  },
  {
    code: "ts",
    language: "Tsonga",
  },
  {
    code: "tt",
    language: "Tatar",
  },
  {
    code: "tw",
    language: "Twi",
  },
  {
    code: "ty",
    language: "Tahitian",
  },
  {
    code: "ug",
    language: "Uighur; Uyghur",
  },
  {
    code: "uk",
    language: "Ukrainian",
  },
  {
    code: "ur",
    language: "Urdu",
  },
  {
    code: "uz",
    language: "Uzbek",
  },
  {
    code: "ve",
    language: "Venda",
  },
  {
    code: "vi",
    language: "Vietnamese",
  },
  {
    code: "vo",
    language: "Volapük",
  },
  {
    code: "wa",
    language: "Walloon",
  },
  {
    code: "wo",
    language: "Wolof",
  },
  {
    code: "xh",
    language: "Xhosa",
  },
  {
    code: "yi",
    language: "Yiddish",
  },
  {
    code: "yo",
    language: "Yoruba",
  },
  {
    code: "za",
    language: "Zhuang; Chuang",
  },
  {
    code: "zh",
    language: "Chinese",
  },
  {
    code: "zu",
    language: "Zulu",
  },
];
