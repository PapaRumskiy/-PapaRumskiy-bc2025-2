const currency = "JPY"
const exact_date = "20240127";

let url1 = new URL("NBUStatService/v1/statdirectory/exchange", "https://bank.gov.ua/",)

url1.searchParams.append("valcode", currency);
url1.searchParams.append("date", exact_date);
url1.searchParams.append("json", "");

console.log(url1.toString())