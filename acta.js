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
        mostrarModalActa:false,
        gols:[],
        partits: [
            {
              local: 'UDG Tenerife',
              escutLocal: 'escuts/granadilla.png',
              visitant: 'Sevilla FC',
              escutVisitant: 'escuts/sevilla.png',
              jornada: '29',
              data: '14 de mayo de 2023',
              camp: 'Campo de Fútbol Municipal La Palmera',
              tv: 'DAZN',
              arbitre: 'María González Pérez'

            },
            {
              local: 'FC Levante Las Planas',
              escutLocal: 'escuts/levante las planas.png',
              visitant: 'Real Sociedad',
              escutVisitant: 'escuts/real-sociedad.png',
              jornada: '29',
              data: '13 de mayo de 2023',
              camp: 'Campo de Fútbol Les Planes',
              tv: 'DAZN',
              arbitre: 'María González Pérez'

            },   {
              local: 'FC Barcelona',
              escutLocal: 'escuts/fc-barcelona-femenino.png',
              visitant: 'Athletic Club',
              escutVisitant: 'escuts/athletic-femenino.png',
              jornada: '29',
              data: '13 de mayo de 2023',
              camp: 'Estadio Johan Cruyff',
              tv: 'DAZN',   
              arbitre: 'María González Pérez'

            },    ],
            partitSeleccionat: 0,
            local:'',
            escutLocal: '',
            visitant: '',
            escutVisitant: '',
            jornada: '',
              data: '',
              camp: '',
              tv: ''

          };
    },
    methods: {
      logOut(){
        window.location.href="iniciSessio.html"
      },
      mostrarActa(index){
        this.mostrarModalActa = true;
        this.local = this.partits[index].local;
        this.escutLocal = this.partits[index].escutLocal;
        this.visitant = this.partits[index].visitant;
        this.escutVisitant = this.partits[index].escutVisitant;
        this.jornada = this.partits[index].jornada;
        this.data = this.partits[index].data;
        this.camp = this.partits[index].camp;
        this.tv = this.partits[index].tv;
        this.arbitre = this.partits[index].arbitre;

      },
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
  