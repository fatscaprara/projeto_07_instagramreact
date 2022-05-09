import TopoPost from "./TopoPost";

export default function Post(props) {
    return (
        <div class="post">
            <TopoPost urlImageUser={props.urlImageUser} user={props.user} />

            <div class="conteudo">
                <img src={props.urlImagePost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.urlImageFirstLike} />
                    <div class="texto">
                        Curtido por <strong>{props.firstLike}</strong> e <strong>{props.infoLike}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}