/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue e un array di oggetti. Le immagini sono le stesse della volta scorsa, sotto trovate l'array di oggetti!
:avviso: Attenzione: ricordate di copiare il template HTML dall'esercizio precedente aiutandovi con la console.
Bonus:
1 - al click su una thumb, visualizzare in grande l'immagine corrispondente
2 - applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3 - quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
regola d'oro: riciclare ovunque possibile! Se stiamo ripetendo della logica possiamo aiutarci sicuramente centralizzando il codice!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
Buon lavoro e buon divertimento!
Di seguito l'array di oggetti da utilizzare come dati:
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

*/




const { createApp } = Vue;

createApp({
    data() {
        return {
            
            images: [
                {
                    image: 'img/01.webp',
                    title: "Marvel's Spiderman Miles Morale",
                    text: 'Spider-man, il super eroe amato da tutti. '
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Entra nella dimensione di ratchet e clank per divertirti al massimo.'
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Crea un'isola tutta tua, con le tue regole. Divertiti con gli amici andando a un concerto o guardando un film."
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Perso e ferito, un gatto randagio deve districare un antico mistero per sfuggire a una città dimenticata da tempo.'
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers è un epico gioco di azione e avventura in terza persona."
                }
            ],
            
            activeImage: 0,
            autoScroll: null
        };
    },
    created(){
        this.startAutoScroll();
    },
    methods: {
        changeImg(index){
            this.activeImage = index;
        },
        nextImage(){
            this.activeImage++;
            if(this.activeImage >= this.images.length){
                this.activeImage = 0;
            }
        },
        previousImage(){
            this.activeImage--;
            if(this.activeImage < 0){
                this.activeImage = this.images.length - 1;
            }
        },
        startAutoScroll(){
            this.autoScroll = setInterval(() => {
                this.nextImage()
            }, 3000)
        },
        stopAutoScroll(){
            clearInterval(this.autoScroll);
        }
    },
}).mount('#my-app');
