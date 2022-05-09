import Story from "./Story";

const stories = [
    {urlImage:"assets/img/9gag.svg", user:"9gag"},
    {urlImage:"assets/img/meowed.svg", user:"meowed"},
    {urlImage:"assets/img/barked.svg", user:"barked"},
    {urlImage:"assets/img/nathanwpylestrangeplanet.svg", user:"nathanwpylestrangeplanet"},
    {urlImage:"assets/img/wawawicomics.svg", user:"wawawicomics"},
    {urlImage:"assets/img/respondeai.svg", user:"respondeai"},
    {urlImage:"assets/img/filomoderna.svg", user:"filomoderna"},
    {urlImage:"assets/img/memeriagourmet.svg", user:"memeriagourmet"},
]

export default function Stories() {
    return (
        <div class="stories">
            {stories.map(storie => <Story urlImage={storie.urlImage} user={storie.user}/>)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}