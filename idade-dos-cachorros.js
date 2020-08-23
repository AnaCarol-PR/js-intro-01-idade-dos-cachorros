//Código referente a idade do humano
var minhaIdade = 36;

//Código referente aos primeiros anos do animal
var primeirosAnos = 2;
    primeirosAnos*= 10.5;

//Código da idade do animal, menos a idade do animal
var anosSeguintes = minhaIdade - 2;

//Calculo dos anos do cachorro e aos anos seguintes
anosSeguintes*= 4;
console.log(primeirosAnos);
console.log(anosSeguintes);

//Calculo da minha idade se eu fosse um cachorro
var minhaIdadeSeCachorro = primeirosAnos + anosSeguintes;
console.log(minhaIdadeSeCachorro);

//Deixar a String em letras minusculas
var nome = "ANA";
var meuNome = nome.toLowerCaser();
console.log(meuNome);
console.log(`Meu nome é ${meuNome}. Eu tenho ${minhaIdade} anos em idade de gente que equivalem a ${minhaIdadeSeCachorro} se eu fosse um cachorro.`);
