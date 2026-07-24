function startGradeCalculator() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;
    var input;
    var score;

    for (var i = 0; i < subjects.length; i++) {
        input = prompt(subjects[i] + " 점수를 입력하세요.");

        if (input === null) {
            alert("성적 계산이 취소되었습니다.");
            return;
        }

        score = Number(input);
        total += score;
    }

    var average = total / subjects.length;
    var result = average >= 60 ? "합격" : "불합격";
    var grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert("총점: " + total + "점, 평균: " + average + ", 등급: " + grade + ", 결과: " + result + "입니다!");
}