const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const vanGoghName = document.querySelector("#van-gogh .name");
vanGoghName.textContent = posts[0].name;

const vanGoghUsername = document.querySelector("#van-gogh .username");
vanGoghUsername.textContent = posts[0].username;

const vanGoghLocation = document.querySelector("#van-gogh .location");
vanGoghLocation.textContent = posts[0].location;

const vanGoghAvatar = document.querySelector("#van-gogh .icon");
vanGoghAvatar.src = posts[0].avatar;

const vanGoghPost = document.querySelector("#van-gogh .post-img");
vanGoghPost.src = posts[0].post;

const vanGoghComment = document.querySelector("#van-gogh .comment");
vanGoghComment.textContent = posts[0].comment;

const vanGoghLikes = document.querySelector("#van-gogh .likes")
vanGoghLikes.prepend(posts[0].likes);

const courbetName = document.querySelector("#courbet .name");
courbetName.textContent = posts[1].name;

const courbetUsername = document.querySelector("#courbet .username");
courbetUsername.textContent = posts[1].username;

const courbetLocation = document.querySelector("#courbet .location");
courbetLocation.textContent = posts[1].location;

const courbetAvatar = document.querySelector("#courbet .icon");
courbetAvatar.src = posts[1].avatar;

const courbetPost = document.querySelector("#courbet .post-img");
courbetPost.src = posts[1].post;

const courbetComment = document.querySelector("#courbet .comment");
courbetComment.textContent = posts[1].comment;

const courbetLikes = document.querySelector("#courbet .likes")
courbetLikes.prepend(posts[1].likes);

const ducreuxName = document.querySelector("#ducreux .name");
ducreuxName.textContent = posts[2].name;

const ducreuxUsername = document.querySelector("#ducreux .username");
ducreuxUsername.textContent = posts[2].username;

const ducreuxLocation = document.querySelector("#ducreux .location");
ducreuxLocation.textContent = posts[2].location;

const ducreuxAvatar = document.querySelector("#ducreux .icon");
ducreuxAvatar.src = posts[2].avatar;

const ducreuxPost = document.querySelector("#ducreux .post-img");
ducreuxPost.src = posts[2].post;

const ducreuxComment = document.querySelector("#ducreux .comment");
ducreuxComment.textContent = posts[2].comment;

const ducreuxLikes = document.querySelector("#ducreux .likes")
ducreuxLikes.prepend(posts[2].likes);

const vanGoghLikeBtn = document.querySelector("#van-gogh .post-img");
vanGoghLikeBtn.addEventListener('dblclick', () => {
    posts[0].likes++;
    vanGoghLikes.innerHTML = `${posts[0].likes} likes`;
});

const courbetLikeBtn = document.querySelector("#courbet .post-img");
courbetLikeBtn.addEventListener('dblclick', () => {
    posts[1].likes++;
    courbetLikes.innerHTML = `${posts[1].likes} likes`;
});

const ducreuxLikeBtn = document.querySelector("#ducreux .post-img");
ducreuxLikeBtn.addEventListener('dblclick', () => {
    posts[2].likes++;
    ducreuxLikes.innerHTML = `${posts[2].likes} likes`;
});