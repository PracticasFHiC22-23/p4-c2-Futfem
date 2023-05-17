const app = Vue.createApp({
    data() {
      return {
        usuaris: [
          { id: "Gat1", contrassenya: "contrasenya1" },
          { id: "Gat2", contrassenya: "contrasenya2" },
          { id: "Gat3", contrassenya: "contrasenya3" }
        ],
        id: "",
        contrassenya: "",
        error: ""
      };
    },
    methods: {
      login() {
        const usuari = this.usuaris.find(user => user.id === this.id);
        if (usuari) {
          if (usuari.contrassenya === this.contrassenya) {
            window.location.href = "arbitre.html"; 
          } else {
            this.error = 'Contrasenya incorrecta. Si us plau, intenta-ho de nou.';
            this.id= "";
            this.contrassenya= "";
          }
        } 
        else {
            this.error = 'L\'usuari no existeix. Si us plau, verifica les dades introduïdes.';
            this.id= "";
            this.contrassenya= "";
        }
      }
    }
  });
  
  app.mount("#app");
  