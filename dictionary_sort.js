var DictSort = (x)=>{
    for(i=1;i<x.length;i++){
        if(x[i-1].toLowerCase()>x[i].toLowerCase()){
            temp = x[i-1]
            x[i-1] = x[i]
            x[i] = temp
            i=0
        }
    }
    return x

}








console.log(DictSort(['Makan','duduk','tidur','terbang'])) //duduk,Makan,terbang,tidur
console.log(DictSort(['anggi','angga','ani','adi']))//adi, angga, anggi, ani