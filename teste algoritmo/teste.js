/* 
1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
*/
function Metodo1(qtde, letra){
    vetor = []
    for(i = 0; i<qtde; i++){
      vetor.push(letra)
    }
    return vetor
  }
  
  console.log(Metodo1(3,'a'))
  
  /*
  2) Implemente um método que inverta um array, não utilize métodos nativos do array.
  Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
  */
  
  function Metodo2(vetor){
    tam = vetor.length
    vetor_aux = []
    for(i = tam-1; i>=0; i--){
      vetor_aux.push(vetor[i])
    }
    return vetor_aux
  }
  
  console.log(Metodo2([1,2,3,4,5]))
  
  /*
  3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
  Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2] 
  */
  
  function Metodo3(vetor){
    var vetor_filtrado = vetor.filter(x => x => 0)
    return vetor_filtrado
  
  }
  
  console.log(Metodo3([1,2,3,4]))
  
  /* 
  4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
  Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}
  */
  
  function Metodo4(vetor) {
    var vetor_aux = Object.fromEntries(vetor)
    return vetor_aux
  }
  
  console.log(Metodo4([["c",2],["d",4]]))
  
  /*
  5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
  */
  function Metodo5(vetor, n1, n2){
    var vetor_aux = vetor.filter(x => x !== n1 && x !== n2)
    return vetor_aux
    
  }
  
  console.log(Metodo5([1,2,3,4], 1,2))
  
  /*
  6) Implemente um método que retorne um array, sem valores duplicados.
  Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
  */
  function Metodo6(vetor) {
    var vetor_aux = vetor.filter((x, i) => vetor.indexOf(x) ===i)
    return vetor_aux
  }
  
  console.log(Metodo6([1,2,3,3,2,4,5,4,7,3]))
  
  /*
  7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
  Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
  */
  function Metodo7(vetor1, vetor2){
    tam1 = vetor1.length
    tam2 = vetor2.length
    var resu = tam1 === tam2
    if(tam1 === tam2){
      for(i = 0; i<tam1; i ++){
        if(vetor1[i] != vetor2[i]){
          resu = false
          break
        }
      }
    }
    return resu
  }
  
  console.log(Metodo7([1,2,3,4],[1,2,3,4]))
  
  /*
  8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
  Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]
  */
  function Metodo8(vetor) {
    aux = []
    var vetor_aux = vetor.map(x => aux.push(x))
    return vetor_aux
  }
  
  console.log(Metodo8([1, 2, [3], [4, 5]]))
  
  
  /*
  9) Implemente um método divida um array por uma quantidade passada por parâmetro.
  Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]
  
  */
  function Metodo9(vetor, n) {
    const resu = new Array(Math.ceil(vetor.length / n))
    .fill()
    .map(x => vetor.splice(0, n))
    
    return resu
  
  }
  
  console.log(Metodo9([1, 2, 3, 4, 5], 2))
  
  
  
  /*
  10) Implemente um método que encontre os valores comuns entre dois arrays.
  Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
  */
  
  function Metodo10(vetor1, vetor2) {
    var vetor_aux = vetor1.filter(x => vetor2.includes(x))
    return vetor_aux
  }
  
  console.log(Metodo10([6, 8], [8, 9]))
  
  
  