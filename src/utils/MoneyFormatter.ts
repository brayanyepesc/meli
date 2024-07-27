export const MoneyFormatter = (numero: number): string => {
    let numeroString = numero.toString();
    numeroString = numeroString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return numeroString;
}