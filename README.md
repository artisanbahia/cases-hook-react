Esta pasta pública possui um projeto com diversos exemplos de uso do recurso Hook do ecossistema React. Cada exemplo poderá ser visualizado quando uma branch for esccolhida. Cada branch tem o nome de um exemplo deste projeto.

Na branch "UseState_case01" empreguei useState para realização de operações matemáticas simples. Veja recorte da view:

![image](https://github.com/user-attachments/assets/62b90096-1ae7-44ec-b2df-1dc91404af3f)

Na branch "UseState_case02" há apenas um incremento funcional em que, no elemento onClick dos botões, passei uma arrow function para praticar o uso deste mecanismo.

Na branch "UseState_case03" há uma mudança substancial, em que dupliquei o mecanismo de incremento e decremento, sempre utilizando Hook e criei um box para receber o resultado da multiplicação dois valores. Veja recorte da view:

![image](https://github.com/user-attachments/assets/80aa1c01-caba-4780-91fb-a37bc9728ccc)

Na branch "UseState_case04" usei três vezes o mesmo componente dentro de outro componente e, com artifício de props, foi possível configurar o valor de incremento e decremento para cada uma das reutilizações.

![image](https://github.com/user-attachments/assets/926afe83-b157-4db4-a52d-6d7951d7736b)

Na branch "UseState_case05" há um consumo mútuo entre um componente que importa outro componente. No que componente que importa, há a passagem do retorno de uma função como valor de uma prop utilizada para a construção do componente que é importado e, desta maneira, ao clicarmos no botão ATUALIZAR, há atualização do valor de uma variável. A imagem às seguir evidencia o mecanismo.

![image](https://github.com/user-attachments/assets/9b8433eb-9d9b-4821-8524-587cc31f3ed3)

