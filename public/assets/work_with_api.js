/* global document */
function fillInMessage(data) {
  const tweetDivs = document.querySelectorAll('.tweetContainer');
  tweetDivs.forEach((div, i) => {
    let index = i;
    const container = div;
    container.querySelectorAll('.name')[0].innerHTML = data.messages[i].name;
    container.querySelectorAll('.nickname')[0].innerHTML = data.messages[i].mail;
    container.querySelectorAll('.timeAgo')[0].innerHTML = data.messages[i].date;
    container.querySelectorAll('.tweetText')[0].innerHTML = data.messages[i].message;
    container.querySelectorAll('.repQty')[0].innerHTML = data.messages[i].quantityReposts;
    container.querySelectorAll('.likeQty')[0].innerHTML = data.messages[i].quantityLike;
    container.querySelectorAll('.shareQty')[0].innerHTML = data.messages[i].quantityShare;
    if (index === 2) {
      const imgMess = container.querySelector('#img_message');
      imgMess.src = data.messages[i].img_message;
    }
    index += 1;
  });
}

function fillInImg(data) {
  const tweetDivs = document.querySelectorAll('.tweetContainer');
  tweetDivs.forEach((div, i) => {
    const firstImg = div.getElementsByClassName('avatar')[0];
    firstImg.src = data.pictures[i].url;
  });
}

function fillInStatistic(data) {
  document.querySelector('#userReg').innerHTML = data.statistic.usersRegistr;
  document.querySelector('#tweetsPosted').innerHTML = data.statistic.writMessages;
  document.querySelector('#newTweets').innerHTML = data.statistic.writToday;
}

fetch('https://burtovoy.github.io/statistic.json').then((stat) => stat.json()).then(fillInStatistic);

fetch('https://burtovoy.github.io/pictures.json').then((pictures) => pictures.json()).then(fillInImg);

fetch('https://burtovoy.github.io/messages.json').then((messages) => messages.json()).then(fillInMessage);
