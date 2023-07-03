<template>
    
    <section class="container">

        <div class="bg-blue-400 ">
                <Carrossel />
        </div>

        
           <div>
                <Titulo />
            </div> 

            <div  class ="px-8 mx-auto bg-white h-30 w-30">

                <Pesquisa v-model:searchTerm="searchTerm"  />
                
            </div>

            

            <slot />

            <section class="grid gap-3 grid-cols-3 bg-blue-400 p-8 my-10">                                
                    <Oferta v-for="(item, index) in filteredCards" :key="index" :titulo="item.titulo" :descricao="item.descricao"  :descricaobotao="item.descricaobotao" :urlimage="item.urlimage" class="flex-grow items-center justify-center w-full h-full bg-gray-200" />                
            </section>

        



    </section>
</template>

<script>
import { reactive, computed } from 'vue';
import Titulo from '/components/Titulo.vue';
import Carrossel from '/components/Carrossel.vue';
import Pesquisa from '/components/Pesquisa.vue';
import Oferta from '/components/Oferta.vue';



useHead({
    link: [
        {
            href: "https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css",

        }


    ],
    script: [
        {
            src: "https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"
        }
    ]
})


export default defineComponent({


  setup() {
    
    let  Data = reactive({
                        searchTerm: '',
                        "itens": [
                            {
                            "urlimage": "https://img.freepik.com/fotos-gratis/full-shot-woman-travel-concept_23-2149153259.jpg?2&w=740&t=st=1688352631~exp=1688353231~hmac=943759d70e6e0eab32961eb3a0864d7b9dd06e19578624e99f485db735590e70",
                            "titulo": "Viajando",
                            "descricao": "Viajando o mundo podemos conhecer várias culturas , tudo pode ser  tão diferente, contudo tão parecido",
                            "descricaobotao": "Viajar",
                            "index": 1
                            },
                            {
                            "urlimage": "https://img.freepik.com/fotos-premium/full-shot-mulher-segurando-bagagem_23-2149153252.jpg?w=740",
                            "titulo": "Derrubando as fronteiras",
                            "descricao": "A fronteiras são muros imaginários, criados por homens que não reconhecem que somos todos irmãos",
                            "descricaobotao": "Derrubar",
                            "index": 2
                            }
                            ,
                            {
                            "urlimage": "https://as1.ftcdn.net/v2/jpg/03/60/70/92/1000_F_360709221_yndIPjdNo7XyRMZywELtlW6UrnyTIYj6.jpg",
                            "titulo": "Para quê  a pressa!",
                            "descricao": "Não percar os detalhes,  o som, as cores as pessoas, os olhares, o sol pode está atrás dos coqueiros. respire!",
                            "descricaobotao": "Devagar",
                            "index": 2
                            },
                            {
                            "urlimage": "https://img.freepik.com/fotos-gratis/viagem-de-aventura-com-bagagem_23-2149153255.jpg?w=740&t=st=1688355576~exp=1688356176~hmac=a0200a9df079e98e87934505bf39e3234fe1bed6399dad4e3909bb210159beab",
                            "titulo": "Malas ou mochilas",
                            "descricao": "Depende do meio transporte, faça a escolha certa para usufluir do melhor de uma viagem",
                            "descricaobotao": "mochilar",
                            "index": 2
                            }

                            
                        ] 
                    });

                    var filteredCards = computed(() => {
                                                                        
                        
                        if (Data.searchTerm) {
                            
                            return Data.itens.filter(Oferta => Oferta.titulo.toLowerCase().includes(Data.searchTerm.toLowerCase()));
                        } else { 
                            return Data.itens;
                        }
                        });                    

    return {
        ...Data ,
      filteredCards
    };
  }
});



</script>

