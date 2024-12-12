export function EndOfWord(number) {
  if (number % 100 >= 11 && number % 100 <= 19) {
    // Liczby od 11 do 19 mają zawsze "ocen"
    return "ocen";
  }

  const ostatniaCyfra = number % 10;
  if (ostatniaCyfra === 1) {
    return "ocena";
  } else if (ostatniaCyfra >= 2 && ostatniaCyfra <= 4) {
    return "oceny";
  } else {
    return "ocen";
  }
}
