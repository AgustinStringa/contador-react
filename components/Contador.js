"use strict"

const Contador = () => {

    const [state, setState] = React.useState(0);

    const aumentar= () => {
        if(state <= 0){
            setState(state + 1);

        } else {
            setState(state + state);

        }

       
    }


    const disminuir = ()=> {
        setState(state - 1);

       
    }


    const restablecer = () => {
        setState(0);
       
    };



    
    return (
    <div>
        <h2 className={ state >= 0 ? "mayor" : "menor"} id="title">Contador: {state}</h2>
        <hr></hr>
        <button id="btnAumentar" onClick={aumentar}>Incrementar</button>
        <button id="btnDisminuir" onClick={disminuir}>Disminuir</button>
        <button id="btnRestablecer" onClick={restablecer}>Restablecer</button>
    </div>
    )

};

