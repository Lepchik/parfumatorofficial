const questions = [
    {
        question: "Which brand from the list do you like most?",
        answers: [
            { text: "Ralph Lauren", value: "rich:10,versatile:10" },
            { text: "Adidas", value: "strong:5" },
            { text: "Nike", value: "versatile:10" },
            { text: "Carhartt", value: "rich:5" }
        ]
    },
    {
        question: "Are you leading in parties, meetings?",
        answers: [
            { text: "Yes", value: "strong:10" },
            { text: "Maybe yes", value: "strong:5" },
            { text: "No", value: "versatile:10,strong:-10" },
            { text: "Maybe no", value: "versatile:5,strong:-5" }
        ]
    },
    {
        question: "Are you an restless or calm person",
        answers: [
            { text: "Restless", value: "strong:20,versatile:10" },
            { text: "Maybe restless", value: "strong:5,versatile:5" },
            { text: "Calm", value: "versatile:20,strong:-20" },
            { text: "Maybe calm", value: "versatile:5 strong:-10" }
        ]
    },
    {
        question: "Where you usually have meetings with people?",
        answers: [
            { text: "School, university, home, office", value: "versatile:20" },
            { text: "Office, clubs, restaurants", value: "strong:10,versatile:10,rich:5" },
            { text: "Restaurants, cafes, malls", value: "rich:10,versatile:5" },
            { text: "Parks, home, cafes", value: "versatile:10" }
        ]
    },
    {
        question: "What is your favourite style?",
        answers: [
            { text: "Basic", value: "versatile:10" },
            { text: "Old money", value: "rich:10,versatile:5" },
            { text: "Streetwear", value: "versatile:5,rich:5" },
            { text: "Y2K, drip, drill etc", value: "strong:10" }
        ]
    },
    {
        question: "What would you wear for a night out?",
        answers: [
            { text: "Polo, pants, loafers, watch", value: "rich:20,versatile:10" },
            { text: "T-shirt, swetpants, sneackers, nothing too special", value: "versatile:10" },
            { text: "Drill Aviation", value: "strong:20" },
            { text: "Basic clothing, like for office or school", value: "versatile:10" } 
        ]
    },
    {
        question: "Do you like loud people? Maybe you is yourself ",
        answers: [
            { text: "Yes, I am loud person", value: "strong:20" },
            { text: "Yes, but I am not myself", value: "strong:5" },
            { text: "No", value: "strong:-5" },
            { text: "I hate them", value: "strong:-10" }
        ]
    },
    {
        question: "How much your clothing and accessories costs?",
        answers: [
            { text: "50$ and less", value: "rich:-10" },
            { text: "50-100$", value: "rich:0" },
            { text: "100-200$", value: "rich:10" },
            { text: "200-500 or more$", value: "rich:30,versatile:20" }
        ]
    }
    // Add more questions here
];

let currentQuestionIndex = 0;

function showQuestion(index) {
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';

    if (index >= 0 && index < questions.length) {
        const question = questions[index];
        container.innerHTML = `
            <div class="question">
                ${question.question}
            </div>
            <div class="answers">
                ${question.answers.map((answer, i) => `
                    <input type="radio" name="q${index}" value="${answer.value}" id="q${index}a${i}">
                    <label for="q${index}a${i}" class="answer-label">${answer.text}</label>
                `).join('')}
            </div>
        `;

        document.getElementById('nextButton').innerText = index === questions.length - 1 ? 'Finish' : 'Next';
    } else if (index === questions.length) {
        calculateScore();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex);
});

let colors = { rich: 0, strong: 0, versatile: 0 }; // Initialize color points

function navigate(step) {
    const form = document.getElementById('quizContainer');
    const selectedAnswer = form.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);

    if (!selectedAnswer && step > 0) {
        alert("Please select an answer before proceeding.");
        return;
    }

    // Store the selected answer's points before moving to the next question
    if (selectedAnswer) {
        const pointPairs = selectedAnswer.value.split(',');
        pointPairs.forEach(pair => {
            const [color, points] = pair.split(':');
            colors[color] += parseInt(points);
        });
    }

    // Move to the next question
    const newIndex = currentQuestionIndex + step;
    if (newIndex >= 0 && newIndex < questions.length) {
        currentQuestionIndex = newIndex;
        showQuestion(currentQuestionIndex);
    } else if (newIndex === questions.length) {
        calculateScore(); // Calculate score if the user completes the quiz
    }
}


function showQuestion(index) {
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';

    if (index >= 0 && index < questions.length) {
        const question = questions[index];
        container.innerHTML = `
            <div class="question">
                ${question.question}
            </div>
            <div class="answers">
                ${question.answers.map((answer, i) => `
                    <input type="radio" name="q${index}" value="${answer.value}" id="q${index}a${i}">
                    <label for="q${index}a${i}" class="answer-label">${answer.text}</label>
                `).join('')}
            </div>
        `;

        document.getElementById('nextButton').innerText = index === questions.length - 1 ? 'Finish' : 'Next';
    } else if (index === questions.length) {
        calculateScore();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex);
});

const rewards = [
    { name: "YSL Y", rich: 50, strong: 30, versatile: 80, image: "images/yslyedp.jpg" },
    { name: "Dior Sauvage", rich: 20, strong: 30, versatile: 70, image: "images/diorsauvage.jpg" },
    { name: "Bleu de Chanel", rich: 30, strong: 30, versatile: 70, image: "images/bleaudechanel.jpg" },
    { name: "JPG Le male ", rich: 30, strong: 40, versatile: 70, image: "images/jpglemale.jpg" },
    { name: "JPG Le male le parfum", rich: 50, strong: 50, versatile: 60, image: "images/jpglemaleleparfum.jpg" },
    { name: "JPG Elixir", rich: 60, strong: 60, versatile: 50, image: "images/jpgelixir.jpg" },
    { name: "Versace Eros", rich: 40, strong: 40, versatile: 70, image: "images/versaceeros.jpg" },
    { name: "Moschino Toy Boy", rich: 30, strong: 40, versatile: 50, image: "images/moschinotoyboy.jpg" },
    { name: "Versace Eros Flame", rich: 40, strong: 50, versatile: 50, image: "images/versaceerosflame.jpg" },
    { name: "Tom Ford Ombre Leather", rich: 70, strong: 60, versatile: 70, image: "images/tomfordombreleather.jpg" },
    { name: "Tom Ford Tobacco Vanile", rich: 70, strong: 60, versatile: 60, image: "images/tomfordtobaccovanile.jpg" },
    { name: "Mancera Red Tobacco", rich: 70, strong: 100, versatile: 50, image: "images/manceraredtobacco.jpg" },
    { name: "JPG Le beau", rich: 50, strong: 60, versatile: 40, image: "images/jpglb.jpg" },
    { name: "Versace Pour Homme", rich: 30, strong: 10, versatile: 100, image: "images/versacepourhomme.jpg" },
    { name: "Paco Rabanne One million", rich: 70, strong: 60, versatile: 50, image: "images/prom.jpg" },
    { name: "Paco Rabanne Invictus", rich: 70, strong: 60, versatile: 50, image: "images/pri.jpg" },
    { name: "Versace Dylan Blue", rich: 30, strong: 30, versatile: 70, image: "images/vdb.jpg" },
    { name: "Valentino Born In Roma Uomo", rich: 50, strong: 50, versatile: 60, image: "images/vbiru.jpg" },
    { name: "Valentino Born In Roma Uomo Intense", rich: 50, strong: 60, versatile: 60, image: "images/vbirui.jpg" },
    { name: "Valentino Born In Roma Uomo Coral Fantasy", rich: 60, strong: 70, versatile: 60, image: "images/vbrirucf.jpg" },
    { name: "Valentino Born In Roma Uomo Bir green Stravagansa", rich: 50, strong: 60, versatile: 60, image: "images/vbirubgs.jpg" },
    { name: "Valentino Born In Roma Uomo Yellow Dream", rich: 60, strong: 50, versatile: 60, image: "images/vbiruyd.jpg" },
    { name: "Allure Homme Sport", rich: 30, strong: 40, versatile: 80, image: "images/ahs.jpg" },
    { name: "Parfumes De Marly Greenley", rich: 60, strong: 60, versatile: 70, image: "images/pdmg.jpg" },
    { name: "Giorgio Armani Acqua Di Gio Profumo", rich: 40, strong: 50, versatile: 70, image: "images/gaadgp.jpg" },
    { name: "Dior Sauvage Elixir", rich: 60, strong: 60, versatile: 70, image: "images/dse.jpg" },
    // Add more rewards as needed
];

function findClosestRewards(userPoints) {
    // Calculate the difference between user points and each reward's required points
    const differences = rewards.map(reward => {
        const difference = Math.abs(userPoints.rich - reward.rich) +
                           Math.abs(userPoints.strong - reward.strong) +
                           Math.abs(userPoints.versatile - reward.versatile);
        return { reward, difference };
    });

    // Sort rewards based on the calculated differences
    differences.sort((a, b) => a.difference - b.difference);

    // Return the top 4 closest rewards
    return differences.slice(0, 4).map(d => d.reward);
}

function calculateScore() {
    const userPoints = {
        rich: Math.max(0, colors.rich),  // Ensures no negative points
        strong: Math.max(0, colors.strong),  // Ensures no negative points
        versatile: Math.max(0, colors.versatile)  // Ensures no negative points
    };

    const closestRewards = findClosestRewards(userPoints);

    // Hide the "Finish" button
    document.getElementById('nextButton').style.display = 'none';

    // Define maximum points possible for each color
    const maxPoints = {
        rich: 100, 
        strong: 100, 
        versatile: 100
    };

    const container = document.getElementById('quizContainer');
    container.innerHTML = `
        <h2>Your Score:</h2>
        <div id="resultContainer">
            <div class="result-bar rich" style="width: ${Math.max((userPoints.rich / maxPoints.rich) * 100, 10)}%;">Rich: ${userPoints.rich}</div>
            <div class="result-bar strong" style="width: ${Math.max((userPoints.strong / maxPoints.strong) * 100, 10)}%;">Strong: ${userPoints.strong}</div>
            <div class="result-bar versatile" style="width: ${Math.max((userPoints.versatile / maxPoints.versatile) * 100, 10)}%;">Versatile: ${userPoints.versatile}</div>
        </div>
        <h2>Your Best Matched Cologne:</h2>
        <div class="reward">
            <img src="${closestRewards[0].image}" alt="${closestRewards[0].name}">
            <h3>${closestRewards[0].name}</h3>
        </div>
        <h2>Other Similar Colognes:</h2>
        <div class="similar-rewards">
            ${closestRewards.slice(1).map(reward => `
                <div class="reward">
                    <img src="${reward.image}" alt="${reward.name}">
                    <h3>${reward.name}</h3>
                </div>
            `).join('')}
        </div>
    `;
}

// Existing code...


function displayReward(reward, similarRewards) {
    const rewardContainer = document.getElementById('reward-container');
    rewardContainer.innerHTML = `
      <div class="reward">
        <img src="${reward.image}" alt="${reward.name}">
        <div class="reward-name">${reward.name}</div>
      </div>
      <div class="similar-rewards-container">
        ${similarRewards.map(similarReward => `
          <div class="similar-reward">
            <img src="${similarReward.image}" alt="${similarReward.name}">
            <div class="reward-name">${similarReward.name}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Example usage:
  // Find similar rewards logic should give you 3 rewards instead of 1.
  displayReward(mainReward, similarRewards);
  



