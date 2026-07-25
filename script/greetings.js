function showGreeting() {
    const hour = new Date().getHours();
    let message;

    if (hour >= 5 && hour < 11) {
        message = "☀️ 좋은 아침이에요, 방문해주셔서 감사합니다!";
    } else if (hour >= 11 && hour < 17) {
        message = "🌤️ 좋은 오후예요, 편하게 둘러보세요!";
    } else if (hour >= 17 && hour < 21) {
        message = "🌆 좋은 저녁이에요, 오늘 하루도 고생하셨어요!";
    } else {
        message = "🌙 늦은 시간에도 방문해주셔서 감사해요!";
    }

    document.getElementById('greeting').textContent = message;
}

showGreeting();