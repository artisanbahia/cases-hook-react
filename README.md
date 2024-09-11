Esta pasta pública é fruto do esforço de um estudo programado sobre o tema 'Hook' do ecossistema React. Cada exemplo poderá ser visualizado quando uma branch for selecionada. Cada exercício está consolidado em uma branch.

Na branch "UseState_case01" empreguei useState para realização de operações matemáticas simples. Veja recorte da view:

![image](https://github.com/user-attachments/assets/62b90096-1ae7-44ec-b2df-1dc91404af3f)

Na branch "UseState_case02" há apenas um incremento funcional em que, no elemento onClick dos botões, passei uma arrow function para praticar o uso deste mecanismo.

Na branch "UseState_case03" há uma mudança substancial, em que dupliquei o mecanismo de incremento e decremento, sempre utilizando Hook e criei um box para receber o resultado da multiplicação dois valores. Veja recorte da view:

![image](https://github.com/user-attachments/assets/80aa1c01-caba-4780-91fb-a37bc9728ccc)

Na branch "UseState_case04" usei três vezes o mesmo componente dentro de outro componente e, com artifício de props, foi possível configurar o valor de incremento e decremento para cada uma das reutilizações.

![image](https://github.com/user-attachments/assets/926afe83-b157-4db4-a52d-6d7951d7736b)

Na branch "UseState_case05" há um consumo mútuo entre um componente que importa outro componente. No que componente que importa, há a passagem do retorno de uma função como valor de uma prop utilizada para a construção do componente que é importado e, desta maneira, ao clicarmos no botão ATUALIZAR, há atualização do valor de uma variável. A imagem às seguir evidencia o mecanismo.

![image](https://github.com/user-attachments/assets/9b8433eb-9d9b-4821-8524-587cc31f3ed3)

Na Branch "UseState_case06" um componente pai importa dois componentes filhos que, por sua vez, recebem, via props, funções para implementar em seus botões de incremento e decremento. Desta forma, o primeiro componente filho incrementa ou decrementa 5 unidades e o segundo incrementa ou decrementa 10 unidades. No componente pai há uma variável que sofrerá mudança de estado a partir do acionamento de qualquer dos 4 botões.

![image](https://github.com/user-attachments/assets/fa6536e5-7f84-472d-96c5-bffe124a7b9c)


