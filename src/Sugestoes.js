import Sugestao from "./Sugestao";

const sugestoes = [
    { urlImage: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
    { urlImage: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
    { urlImage: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
    { urlImage: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
    { urlImage: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" }
]

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map(sugestao => <Sugestao urlImage={sugestao.urlImage} nome={sugestao.nome} razao={sugestao.razao} />)}

            <div class="seguir">Seguir</div>
        </div>
    );
}