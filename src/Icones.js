function Icone(props){
    return(
        <ion-icon name={props.name}></ion-icon>
    );
}

const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]

export default function Icones() {
    return (
        <div class="icones">
            {icones.map(icone => <Icone name={icone}/>)}
        </div>
    );
}