export default function TopoPost(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.urlImageUser} />
                {props.user}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}