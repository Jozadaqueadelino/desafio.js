class personagem {
    constructor (nome,idade,tipo) {
        this.nome = avatar;
        this.idade = 30;
        this.tipo = mago;

    }
    
    
    atacar() {

        let ataque;

        switch (this.tipo){
            case "mago":

            ataque = "usou magia";
            break;

            
        }

        console.log(" O ${this.tipo} , atacou usando ${ataque}");
    }
    

}