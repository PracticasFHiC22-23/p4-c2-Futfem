const app = Vue.createApp({
    data() {
      return {
        usuaris: [
          { id: "1", contrassenya: "a" },
          { id: "2", contrassenya: "b" },
          { id: "3", contrassenya: "c" }
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
  