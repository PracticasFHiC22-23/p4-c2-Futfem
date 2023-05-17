const app = Vue.createApp({
    data() {
      return {
        jugadores: Array(23).fill().map(() => ({ dorsal: null, nom: null,groga:false,segonaGroga:false,vermella:false })),
        titularsLocal: [],
        suplentsLocal: [],
        titularsVisitant: [],
        suplentsVisitant:[],
        mostrarModal: false,
        equipSeleccionat: '',
        gols:[],
        mostrarModalGols: false

      };
    },
    methods: {
      mostrarFormulari(equip) {
        this.mostrarModal = true;
        this.equipSeleccionat = equip;
      },
      tancarFormulari() {
        this.mostrarModal = false;
        this.jugadores = Array(23).fill().map(() => ({ dorsal: null, nom: null,gols:null,groga:false,segonaGroga:false,vermella:false }));
        this.equipSeleccionat = '';
      },
      afegirJugadora() {
        const jugadoresAfegides = this.jugadores.filter(jugadora => jugadora.dorsal !== null && jugadora.nom !== null);
        if (this.equipSeleccionat === 'local') {
          this.titularsLocal = jugadoresAfegides.slice(0, 11).sort((a, b) => a.dorsal - b.dorsal);
          this.suplentsLocal = jugadoresAfegides.slice(11).sort((a, b) => a.dorsal - b.dorsal);
        } else if (this.equipSeleccionat === 'visitant') {
          this.titularsVisitant = jugadoresAfegides.slice(0, 11).sort((a, b) => a.dorsal - b.dorsal);
          this.suplentsVisitant = jugadoresAfegides.slice(11).sort((a, b) => a.dorsal - b.dorsal);
        }
        this.tancarFormulari();
      },
      
      mostrarFormulariGols() {
        this.mostrarModalGols = true;
        // Restaurar els valors del formulari de gols
        this.gols = [
          {
            equip: '',
            nom: '',
            minut: ''
          }
        ];
      },
      
  
    }
  });
  
  app.mount("#app");
  