## Timed Quiz


## User story
AS A coding boot camp student,
1. I WANT to take a timed quiz on JavaScript fundamentals that stores high      scores
2. SO THAT I can gauge my progress compared to my peers


## Acceptance Criteria
- GIVEN I am taking a code quiz
- WHEN I click the start button
- THEN a timer starts and I am presented with a question
- WHEN I answer a question
- THEN I am presented with another question
- WHEN I answer a question incorrectly
- THEN time is subtracted from the clock
- WHEN all questions are answered or the timer reaches 0
- THEN the game is over
- WHEN the game is over
- THEN I can save my initials and score



## Details/Output
- Quiz starts when start button is pressed
    - quiz <div> should appear
        - div should stay hidden, learn how to unhide js
    - timer should start
    - both functions start simultaneously
- Trivia starts when the timer starts
    - 60 second timer = 1:00 min
- When question is answered another question is presented
    - if/else statements?
- Time is subtracted to the timer when question is answered incorrectly
    - 10 second deduction
    - if/else statements?
- Game's over
    - all questions are answered
    - time is reduced to 0
- Player must be able to submit their Initials and Highscore

## Image Source
![sc](C:\Users\migue\Desktop\weekly-challenges\challenge 4\timed-quiz\assets\images)

## Challenges
- everything, but mostly about loops and timer

## TODO's
-Subtract time from the timer when answer is incorrect
-Right and wrong answers  (if else logic)
-how to incorporate dynamic logic with choice selection via button id.

    answerCorrect logic:
        question[i].answer == question[i].option

    if (answerCorrect == false)
        Subtract time by 5 seconds
        move on to the next question --done

    else (answerCorrect == true)
        Add to score
        move on to the next question --done

-Once the user is done with the quiz, enter initials then record actual score
    -We want the quiz to reset.
        -timer reset
-When Timer reaches 0, end the quiz -> go to enter initials then record actual score
