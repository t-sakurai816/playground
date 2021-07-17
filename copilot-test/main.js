//今日の日付を日本語にして表示する
const getDate = () => {
  const date = new Date();
  return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
}

console.log(getDate());

//1~1000までのランダムな整数を表示する
const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 1000 + 1);
  return randomNumber;
}

console.log(getRandomNumber());