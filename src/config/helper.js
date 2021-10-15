export const pokeType = (type) => {
  let color = "";
  switch (type) {
    case "normal":
      color = "#abab7e";
      break;
    case "fighting":
      color = "#c03028";
      break;

    case "flying":
      color = "#aa93f0";
      break;

    case "poison":
      color = "#a040a0";
      break;

    case "ground":
      color = "#e1c468";
      break;

    case "rock":
      color = "#b29c44";
      break;

    case "bug":
      color = "#bcc926";
      break;

    case "ghost":
      color = "#8870be";
      break;

    case "steel":
      color = "#c8c7d5";
      break;

    case "fire":
      color = "#f08630";
      break;

    case "water":
      color = "#6790ef";
      break;

    case "grass":
      color = "#7ecb50";
      break;

    case "electric":
      color = "#f8d030";
      break;

    case "psychic":
      color = "#f75787";
      break;

    case "ice":
      color = "#97d7d7";
      break;

    case "dragon":
      color = "#6737f7";
      break;

    case "dark":
      color = "#69574b";
      break;

    case "fairy":
      color = "#088797";
      break;

    case "light":
      color = "#fadc64";
      break;

    default:
      break;
  }

  return color;
};
