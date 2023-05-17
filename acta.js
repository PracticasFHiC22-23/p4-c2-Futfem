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
    golsLocal: [],
    golsVisitant: [],
    mostrarModalGols: false,
    gols:[]

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
        this.gols = [
          {
            equip: '',
            nom: '',
            minut: ''
          }
        ];
      },
      afegirGols() {
        const golsAfegitsLocal = this.gols.filter(gol => gol.equip === 'Local' && gol.nom !== '' && gol.minut !== '');
        const golsAfegitsVisitant = this.gols.filter(gol => gol.equip === 'Visitant' && gol.nom !== '' && gol.minut !== '');
      
        this.golsLocal.push(...golsAfegitsLocal);
        this.golsVisitant.push(...golsAfegitsVisitant);
      
        this.golsLocal.sort((a, b) => parseInt(a.minut) - parseInt(b.minut));
        this.golsVisitant.sort((a, b) => parseInt(a.minut) - parseInt(b.minut));
      
        this.tancarFormulariGols();
      },
      
      
      tancarFormulariGols() {
        this.mostrarModalGols = false;
      },

  
    }
  });
  
  app.mount("#app");
  