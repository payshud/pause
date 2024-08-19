// Journal Prompts Stress
var stressButton= $('.stress')
var promptContainer=$('.prompt-container')

stressButton.on("click", appendStressPrompts)
function appendStressPrompts(){
  promptContainer.append(`
    <div>
      <h1>Journal Prompts for Stress</h1>
     <ul>
       <li>I feel challenged by... but supported by...</li>
       </br>
       <li>I am thankful that...</li>
       </br>
       <li>How can this obstacle exist FOR me?</li>
       </br>
       <li>How do I want to feel today and what thoughts do I need to think to spark that emotion?</li>
       </br>
       <li>How can I make today better than yesterday?</li>
       </br>
       <li>What's not wrong in my life right now?</li>
       </br>
       <li>How can I nourish myself today and practice self-care?</li>
       </br>
       <li>What is causing my anxiety right now? What is the worst possible outcome and what is the best?</li>
       </br>
       <li>How are my thought supporting the results I dream of?</li>
       </br>
       <li>How can I make a positive difference in someone's life today?</li>
    </div>
    `)
	event.preventDefault();
}

//Journal Prompts Anxiety
var anxietyButton= $('.anxiety')
var promptContainer=$('.prompt-container')

anxietyButton.on("click", appendAnxietyPrompts)
function appendAnxietyPrompts(){
  promptContainer.append(`
    <div>
      <h1>Journal Prompts for Anxiety</h1>
     <ul>
       <li>Anxiety isn't in control of me. I'm strong because...</li>
       </br>
       <li>What has helped me overcome anxiety in the past...</li>
       </br>
       <li>My happiest memory is...</li>
       </br>
       <li>I remember feeling...</li>
       </br>
       <li>What do I feel most anxious about right now... How long have I been worried about this?</li>
       </br>
       <li>I want people to know this about me...</li>
       </br>
       <li>Write a letter to someone who contributes to your anxiety.</li>
       </br>
       <li>Name 5 things that make you feel better after a long day</li>
       </br>
       <li>How do my worries affect my daily life?</li>
       </br>
       <li>How can I put 3 worries to rest?</li>
       </br>
    </div>
    `)
	event.preventDefault();
}

//Journal Prompts Depression
var depressionButton= $('.depression')
var promptContainer=$('.prompt-container')

depressionButton.on("click", appendDepressionPrompts)
function appendDepressionPrompts(){
  promptContainer.append(`
    <div>
      <h1>Journal Prompts for Depression</h1>
     <ul>
       <li>Write down 3 things you achieved today.</li>
       </br>
       <li>Write 3 things you are thankful for.</li>
       </br>
       <li>Write about the happiest time in your life</li>
       </br>
       <li>What are 3 new hobbies you would like to try?</li>
       </br>
       <li>What is a goal you are working towards?</li>
       </br>
       <li>What are your interests?</li>
       </br>
       <li>Write about a time you helped someone.</li>
       </br>
       <li>Write about a time you practiced self-care.</li>
       </br>
       <li>What is something that you are looking forward to?</li>
       </br>
       <li>What is something you can plan so you will look forward to it?</li>
       </br>
    </div>
    `)
}


// //Journal Prompts Mindful
var mindfulButton= $('.mindful')
var promptContainer=$('.prompt-container')

mindfulButton.on("click", appendMindfulPrompts)
function appendMindfulPrompts(){
  promptContainer.append(`
    <div>
      <h1>Journal Prompts for Mindfullness</h1>
     <ul>
       <li>What is the story I am telling myself right now?</li>
       </br>
       <li>What qualities am I grateful to embody?</li>
       </br>
       <li> What is one thing I can commit to today that my future self will thank me for?</li>
       </br>
       <li>I am my most authentic self when I…</li>
       </br>
       <li>What is one past event that I previously perceived as a failure and now perceive as a gift?</li>
       </br>
       <li>What is one thing I have in common with someone who I have difficulties with?</li>
       </br>
       <li>What would my [insert body part here] say right now if it could speak?</li>
       </br>
       <li> What negative thought patterns do I wish to transform?</li>
       </br>
       <li>What part of myself longs for more self-compassion?</li>
       </br>
       <li>My highest values in life are…?</li>
       </br>
    </div>
    `)
}
//Journal Prompts Fun
var funButton= $('.fun')
var promptContainer=$('.prompt-container')

funButton.on("click", appendFunPrompts)
function appendFunPrompts(){
  promptContainer.append(`
    <div>
      <h1>Journal Prompts for Fun</h1>
     <ul>
       <li>What is a song you love and why do you love it? How does this song make you feel?</li>
       </br>
       <li>Recall an important memory from your childhood and tell it from the perspective of someone else who was present.</li>
       </br>
       <li>Write about an item you have that isn’t expensive but means a lot to you.</li>
       </br>
       <li>What color do you feel like today and why?</li>
       </br>
       <li>What is the most adventurous thing you’ve eaten?</li>
       </br>
       <li>Write about an imagined ideal day walking around a city of your choosing. </li>
       </br>
       <li>Write about something nice a stranger did for you.</li>
       </br>
       <li>What is a dream you’ve had that you want to live in forever?</li>
       </br>
       <li>Read the last postcard, letter, or personal email you received, and start a story with the first sentence.</li>
       </br>
       <li>Who is the most interesting person you can think of? Create a list of questions you would ask them in an interview.</li>
       </br>
    </div>
    `)
}
//Journal Prompts Gratitude
var gratitudeButton= $('.gratitude')
var promptContainer=$('.prompt-container')

gratitudeButton.on("click", appendGratitudePrompts)
function appendGratitudePrompts(){
  promptContainer.append(`
    <div>
      <h1>Journal Prompts for Gratitude</h1>
     <ul>
       <li>Who special someone has taught you about unconditional love in the past or present?</li>
       </br>
       <li>Write down one good thing that happened to you today.</li>
       </br>
       <li>What are five personality traits that you are most thankful for?</li>
       </br>
       <li>What about your upbringing are you most grateful for?</li>
       </br>
       <li>Are you happy with how your day turned out?</li>
       </br>
       <li>Name 5 things you are doing well currently.</li>
       </br>
       <li>Did you do something nice to someone today? Write about it.</li>
       </br>
       <li>What family members are you most grateful for? Write about what makes them special.</li>
       </br>
       <li>What is something nice another person did for you today or this week?</li>
       </br>
       <li>Think about the worst period you went through your life and list 10 ways life is better now than it was then.</li>
       </br>
    </div>
    `)
    
	event.preventDefault();
}

//Journal Prompts Self-Care
var selfcareButton= $('.selfcare')
var promptContainer=$('.prompt-container')

selfcareButton.on("click", appendSelfCarePrompts)
function appendSelfCarePrompts(){
  promptContainer.append(`
    <div>
      <h1>Journal Prompts for Self-Care</h1>
     <ul>
       <li>What makes you feel powerful?</li>
       </br>
       <li>How do you encourage yourself when you're trying something new?</li>
       </br>
       <li>What's a choice you can make this week based on your needs?</li>
       </br>
       <li>How do you shift your mindset if it isn't working for you?</li>
       </br>
       <li>In what ways am I putting the needs of others before my own?</li>
       </br>
       <li> I feel at ease when _____. </li>
       </br>
       <li>What makes me happy?</li>
       </br>
       <li>What would I be doing if money wasnt an thing?</li>
       </br>
       <li>What do I need to get off my chest today?</li>
       </br>
       <li>What were the best meaningful conversations I had today?</li>
       </br>
    </div>
    `)
    
	event.preventDefault();
}

// Journal Entry
var submitBtn= $('.submit-btn')
var container= $('.card-container')

submitBtn.on("click", appendJournalEntry)

  function appendJournalEntry(){
    var journalEntry = $('.name')
    container.append(`
      <div class = "card">
        <span class = "name">
          ${journalEntry.val()}
        </span>
      </div>
    `)
    event.preventDefault();
  }

// The Model Beginning
var submitModel1= $('.submit1')
var containerModel1= $('.model-container1')

submitModel1.on("click", appendModel1)

  function appendModel1(){
    var circumstanceEntry1 = $('.circumstance1')
    var thoughtEntry1 = $('.thought1')
    var feelingsEntry1 = $('.feelings1')
    var actionsEntry1 = $('.actions1')
    var resultEntry1 = $('.result1')
    containerModel1.append(`
      <div class = "card">
        <span class = "name">
          ${circumstanceEntry1.val()}
          <br>
          ${thoughtEntry1.val()}
          <br>
          ${feelingsEntry1.val()}
          <br>
          ${actionsEntry1.val()}
          <br>
          ${resultEntry1.val()}
        </span>
      </div>
    `)
	event.preventDefault();
  }

// The Model End
var submitModel= $('.submit')
var containerModel= $('.model-container')

submitModel.on("click", appendModel)

  function appendModel(){
    var circumstanceEntry = $('.circumstance')
    var thoughtEntry = $('.thought')
    var feelingsEntry = $('.feelings')
    var actionsEntry = $('.actions')
    var resultEntry = $('.result')
    containerModel.append(`
      <div class = "card">
        <span class = "name">
          ${circumstanceEntry.val()}
          <br>
          ${thoughtEntry.val()}
          <br>
          ${feelingsEntry.val()}
          <br>
          ${actionsEntry.val()}
          <br>
          ${resultEntry.val()}
        </span>
      </div>
    `)
	event.preventDefault();
  }