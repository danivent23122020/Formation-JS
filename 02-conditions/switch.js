let couleur = "Orange";
switch (couleur) {
    case "Orange":
        console.log("Prix : 21€");
        break;
    case "Bleu":
        console.log("Prix : 30€");
        break;
    case "Jaune":
        console.log("Prix : 15€");
        break;
    case "Vert":
        console.log("Prix : 56€");
        break;
    case "Blanc":
        console.log("Prix : 123€");
        break;
    default:
        console.log(`Désolé, nous n'avons pas cet article en ${couleur}`);
}
