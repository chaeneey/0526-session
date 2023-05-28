const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];


  let tempDate=new Date();

    let tempYear=tempDate.getFullYear();
    let tempMonth=tempDate.getMonth();
    let tempDay=tempDate.getDate();

    const futureDate = new Date(tempYear, tempMonth, tempDay+27, 17, 45, 00);

    let year=futureDate.getFullYear();
    let month=futureDate.getMonth();
    let weekday=futureDate.getDay();
    let date=futureDate.getDate();
    let hours=futureDate.getHours();
    let minutes=futureDate.getMinutes();
    let seconds=futureDate.getSeconds();

    month=months[month];
    weekday=weekdays[weekday];

    let lastday=document.querySelector(".lastday");
    lastday.textContent=`End of Class: ${weekday}, ${date}, ${month}, ${year}, ${hours}:${minutes}`;




function getRemaindingTime(){

    let futureTime = futureDate.getTime();
    let today = new Date().getTime();
    let t = futureTime-today;

    let days = Math.floor(t/(1000*60*60*24))
    let daysEl = document.querySelector(".days");
    daysEl.textContent=`${days}`

    hours = Math.floor(t/(1000*60*60)%24)
    let hoursEl=document.querySelector(".hours")
    hoursEl.textContent=`${hours}`

    minutes = Math.floor(t/(1000*60)%60)
    let minutesEl=document.querySelector(".minutes")
    minutesEl.textContent=`${minutes}`

    seconds = Math.floor(t/1000%60)
    let secondsEl=document.querySelector(".seconds")
    secondsEl.textContent=`${seconds}`
    
    //숫자 한자리수 -> 0 앞에 넣어주기
    function format(item) {
        if (item < 10) {
            return (item=`0${item}`);
        } else {
            return item;
        }
    }
    
    let items = document.querySelectorAll(".deadline-format h4")
    let times = [days, hours, minutes, seconds]

    items.forEach(function(item,index) {
    item.textContent=format(times[index])
  });
  
  //종강 축하 메시지
  if ((t*1000) <= 0) {
    clearInterval(change)
    document.querySelector('p').textContent="종강을 축하합니다!";
  }
  }
  
  //1초마다 화면 변하게 만들기
  getRemaindingTime()
  let change = setInterval(getRemaindingTime, 1000)




  