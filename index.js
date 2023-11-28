let nomeHeroi = "Anagan"
let qtdLevel = 9404
if(qtdLevel > 0 && qtdLevel <= 1000){
    console.log("O herói " + nomeHeroi + " está no nível Ferro.")
} else if(qtdLevel > 1000 && qtdLevel < 2001){
    console.log("O herói " + nomeHeroi + " está no nível Bronze.")
} else if(qtdLevel > 2000 && qtdLevel < 5001){
    console.log("O herói " + nomeHeroi + " está no nível Prata.")
} else if(qtdLevel > 1000 && qtdLevel < 7001){
    console.log("O herói " + nomeHeroi + " está no nível Ouro.")
}else if(qtdLevel > 1000 && qtdLevel < 8001){
    console.log("O herói " + nomeHeroi + " está no nível Platina.")
}else if(qtdLevel > 1000 && qtdLevel < 9001){
    console.log("O herói " + nomeHeroi + " está no nível Ascendente.")
}else if(qtdLevel > 1000 && qtdLevel < 10001){
    console.log("O herói " + nomeHeroi + " está no nível Imortal.")
}else if(qtdLevel >= 10001){
    console.log("O herói " + nomeHeroi + " está no nível Radiante.")
} else{
    console.log("Quantidade de experiência inválida.")
}
