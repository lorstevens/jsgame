const qAs =[
    {
        question: 'Do you like to drink?',
        answer: ['yes', 'no'] 
    },
    {
        question: `'what's your favorite drink'`,
        answer: ['mojito', 'gin and tonic', 'beer'] 
    } ,  
    {
        question: `'Who's cooler?'`,
        answer: ['Amanda', 'Lorna', 'Anyone else'] 
    },
    {
        question: `'Hey?'`,
        answer: ['Damn Daniel', 'Lorna', 'Friday'] 
    }              
];

$('.start').click(function(){
$('.start').hide();
    startGame();
})


const startGame = () => {

    for(item of qAs){
        console.log(qAs[item]);

        $('.questions').html('<h1>' + item.question + item.answer);
    }

}

