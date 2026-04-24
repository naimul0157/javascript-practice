function killometer(miles){
    const kiloFraction = miles * 1.60934;
    const kilo = parseInt(kiloFraction);
    const meter = kiloFraction-kilo;
    const result = kilo + ' km ' + meter.toFixed(2) + 'meter';
    return result;
}
let value = 30;
console.log(value, 'mile=', killometer(value));