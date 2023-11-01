let nomeDoHeroi = "Daniel"
let xpDoHeroi = 10001
let nivelDoHeroi = 0

switch (true) {
    case xpDoHeroi < 1000:
        nivelDoHeroi = "Ferro"
        break
    case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
        nivelDoHeroi = "Bronze"
        break
    case xpDoHeroi >= 2001 && xpDoHeroi <= 5000:
        nivelDoHeroi = "Prata"
        break
    case xpDoHeroi >= 5001 && xpDoHeroi <= 8000:
        nivelDoHeroi = "Platina"
        break
    case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
        nivelDoHeroi = "Ascendente"
        break
    case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
        nivelDoHeroi = "Imortal"
        break
    default:
        nivelDoHeroi = "Radiante"
}

console.log("O herói " + nomeDoHeroi + " está no rank " + nivelDoHeroi)