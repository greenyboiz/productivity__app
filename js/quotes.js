const quotesContainer = document.querySelector('.left__Content--item quotes')
const quote = document.querySelector('.truly-quote')
const userImage = document.querySelector('.user__details--image')
const username = document.querySelector('.user__details--name')
// const role = document.querySelector('.role')

const quotes = [{
        "content": "Keep your relationships private so you can have more than 1",
        "image": "https://pbs.twimg.com/media/ENwtTfiX0AA3Njy.jpg",
        "id": "1"
    },
    {
        "content": "May she think about me while she on a date with another man on Valentine's Day so it can ruin her night",
        "image": "https://i.pinimg.com/736x/52/3c/8e/523c8ed02256ce9b9497afe35b34ba97--the-boy-meme.jpg",
        "id": "2"
    },
    {
        "content": "When she doesn't give you anything for Valentine's Day so now you gotta call her husband",
        "image": "https://i.pinimg.com/736x/69/3e/43/693e4389db73afd7420e7f8e5b30fb28.jpg",
        "id": "3"
    },
    {
        "content": "Me trying to figure out how im gonna be in 4 different places at the same time on Valentine's Day",
        "image": "https://pbs.twimg.com/media/EMNGs0TU4AAYTMN.jpg",
        "id": "4"
    },
    {
        "content": "When she tell you to leave her alone, blocks you on everything and then yells at you for not contacting her",
        "image": "https://i.redd.it/403o4qxm8fj61.jpg",
        "id": "5"
    },
    {
        "content": "How I sleep at night knowing I'm single but the shawties I'm talking to think we dating",
        "image": "https://i.kym-cdn.com/entries/icons/mobile/000/034/981/cover5.jpg",
        "id": "6"
    },
    {
        "content": "Chase Paper not Pu**y",
        "image": "https://64.media.tumblr.com/9a8fac86cc1f1d23b3bb5277e7ba87b8/412dab36e556c636-c0/s1280x1920/c37dc35c723f524439a7aa773c7bb2a586fe56a6.jpg",
        "id": "7"
    },
    {
        "content": "When she on FaceTime with you explaining how she feel asleep at 7PM last night",
        "image": "https://pbs.twimg.com/media/Do_Mwu3XgAABxh6.jpg",
        "id": "8"
    },
    {
        "content": "If she broke your heart, let her best friends fix it",
        "image": "https://townsquare.media/site/812/files/2019/12/Future-meme.jpg",
        "id": "9"
    },
    {
        "content": "When you start talking to a shorty and she got less than 1,000 followers on IG, no mutual friends and none of the homies talk to her",
        "image": "https://www.gannett-cdn.com/presto/2020/04/18/USAT/3e1e4c41-d6c9-4bb9-ac58-d47c6382ff49-jordan-1991.JPG?crop=2713,2035,x169,y0&quality=50&width=640",
        "id": "10"
    },
    {
        "content": "Become so successful that even your ex's family tells her how much she messed up",
        "image": "https://static.hiphopdx.com/2016/02/160223-Future-674x620.jpg",
        "id": "11"
    },
    {
        "content": "When she don't post you when you take her out of for food, focus on yourself king... you not the only dude",
        "image": "https://i.imgflip.com/g8jl5.jpg?a457632",
        "id": "12"
    },
    {
        "content": "Me texting my ex to disturb her peace while she going through her healing process",
        "image": "https://i.pinimg.com/originals/0b/73/e9/0b73e9ab9b3a4ccc109e81a2d9416bb7.jpg",
        "id": "13"
    },
    {
        "content": "When she told you \"I've never been here before\" but starts hugging the security at the door as y'all walk in",
        "image": "https://9jamuse.com/wp-content/uploads/2020/11/meme-drake-9.jpg",
        "id": "14"
    },
    {
        "content": "When you have plans to kick it with a shorty and she texts you \"ughhhh you're going to hate me 😩\"",
        "image": "https://en.meming.world/images/en/e/ea/Sitting_and_Standing_Old_Man.jpg",
        "id": "15"
    }
]
let quotesData = [];

async function fetchData() {
    const response = await fetch('https://623400936d5465eaa512484d.mockapi.io/api/quotes');
    const resData = await response.json();
    if (resData) {
        quotesData = resData;
        return;
    }
    quotesData = quotes;
}

let idx = 1;

function updateQuote() {
    const {
        content,
        image,
        name
    } = quotesData ? quotesData[idx] : quotes[idx];

    quote.innerHTML = content;
    userImage.src = image;
    username.innerHTML = name;

    idx++;
    const quoteLength = quotesData ? quotesData.length : quotes.length;
    if (idx > quoteLength - 1) {
        idx = 0;
    }
}
fetchData();
setInterval(updateQuote, 10000);