function weatherClothesSelection(temp){
    if (temp<5){
        return "You should put on heavy winter jacket and warm trousers";
    }
    else if (temp<18 && temp>5){
        return "You should put on normal jacket and normal trousers";
    }
    else if (temp<22 && temp>18){
        return "The weather is so pleasant, just put on normal summer clothes";
    }
    else {
        return "The weather is so hot, a T-shirt and Shorts would be enough";
    }
}
console.log(weatherClothesSelection(20));//Gives the output for clothes if temperature is 20 degrees