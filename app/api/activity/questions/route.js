import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDb'


export async function POST(request){
        const { id,
            question,
            firstChoiceIsCorrect,
            firstChoice,
            secondChoiceIsCorrect,
            secondChoice,
            thirdChoiceIsCorrect,
            thirdChoice,
            fourthCoiceIsCorrect,
            fourtChoice} = await request.json()


// 2. Create a Question and associate it with the Activity
const questionData = await prisma.question.create({
  data: {
    questionText: question,
    activities: {
      connect: { id: id }, // Connect the question to the activity
    },
  },
});

// 3. Create four Choices and associate them with the Question
const choices = await prisma.choice.createMany({
  data: [
    {
      choiceText: firstChoice,
      isCorrectChoice: firstChoiceIsCorrect,
      questionId:questionData.id 
    },
    {
      choiceText: secondChoice,
      isCorrectChoice: secondChoiceIsCorrect,
      questionId:questionData.id 
    },
    {
      choiceText: thirdChoice,
      isCorrectChoice: thirdChoiceIsCorrect,
      questionId:questionData.id 
    },
    {
      choiceText: fourtChoice,
      isCorrectChoice: fourthCoiceIsCorrect,
     questionId:questionData.id
    },
  ],
});



    // console.log(questionData)

    return NextResponse.json(questionData)

}

