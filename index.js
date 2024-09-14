const start = () => {
    while(true){
        let opçao = "sair";
        switch(opçao){
            case "cadastrar":
                console.log("vamos cadastrar");
                break;
            case "listar":
                console.log("vamos listar");
            case "sair":
                return;
        }
    }
}

start();
