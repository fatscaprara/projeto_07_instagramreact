import Post from "./Post";

const infoPosts = [
    {user: "meowed", urlImageUser: "assets/img/meowed.svg", urlImagePost: "assets/img/gato-telefone.svg", urlImageFirstLike: "assets/img/respondeai.svg", firstLike: "respondeai", infoLike: "outras 101.523 pessoas"},
    {user: "barked", urlImageUser: "assets/img/barked.svg", urlImagePost: "assets/img/dog.svg", urlImageFirstLike: "assets/img/adorable_animals.svg", firstLike: "adorable_animals", infoLike: "outras 99.159 pessoas"}
]

export default function Posts() {
    return (
        <div class="posts">
            {infoPosts.map(post => <Post user={post.user} urlImageUser={post.urlImageUser} urlImagePost={post.urlImagePost} urlImageFirstLike={post.urlImageFirstLike} firstLike={post.firstLike} infoLike={post.infoLike}/>)}
        </div>
    );
}