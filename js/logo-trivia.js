// Logo Trivia Game JavaScript

class LogoTriviaGame {
    constructor() {
        this.startTime = null;
        this.gameActive = false;
        this.timerInterval = null;
        this.score = 0;
        this.totalQuestions = 20;
        
        this.initializeGame();
    }
    
    initializeGame() {
        this.startBtn = document.getElementById('startBtn');
        this.submitBtn = document.getElementById('submitBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.gameGrid = document.getElementById('gameGrid');
        this.results = document.getElementById('results');
        this.scoreElement = document.getElementById('score');
        this.timerElement = document.getElementById('timer');
        this.finalScoreElement = document.getElementById('finalScore');
        this.finalTimeElement = document.getElementById('finalTime');
        this.performanceMessageElement = document.getElementById('performanceMessage');
        
        this.logoInputs = document.querySelectorAll('.logo-input');
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.submitBtn.addEventListener('click', () => this.submitAnswers());
        this.resetBtn.addEventListener('click', () => this.resetGame());
        
        // Add real-time checking as user types
        this.logoInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                if (this.gameActive) {
                    this.checkSingleAnswer(e.target);
                }
            });
            
            // Add Enter key submission
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && this.gameActive) {
                    this.submitAnswers();
                }
            });
        });
    }
    
    startGame() {
        this.gameActive = true;
        this.startTime = new Date();
        this.score = 0;
        
        // Hide start button and show game
        this.startBtn.style.display = 'none';
        this.submitBtn.style.display = 'inline-block';
        this.resetBtn.style.display = 'inline-block';
        this.gameGrid.style.display = 'grid';
        this.results.style.display = 'none';
        
        // Clear all inputs and feedback
        this.logoInputs.forEach(input => {
            input.value = '';
            input.className = 'logo-input';
            input.disabled = false;
            const feedback = input.nextElementSibling;
            feedback.textContent = '';
            feedback.className = 'feedback';
        });
        
        // Focus on first input
        this.logoInputs[0].focus();
        
        // Start timer
        this.startTimer();
        
        // Update score display
        this.updateScore();
    }
    
    startTimer() {
        this.timerInterval = setInterval(() => {
            if (this.gameActive) {
                const elapsed = new Date() - this.startTime;
                const minutes = Math.floor(elapsed / 60000);
                const seconds = Math.floor((elapsed % 60000) / 1000);
                this.timerElement.textContent = 
                    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
    
    checkSingleAnswer(input) {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = input.dataset.answer.toLowerCase();
        const feedback = input.nextElementSibling;
        
        if (userAnswer === '') {
            input.className = 'logo-input';
            feedback.textContent = '';
            feedback.className = 'feedback';
            return;
        }
        
        // Check for exact match or close variations
        const isCorrect = this.isAnswerCorrect(userAnswer, correctAnswer);
        
        if (isCorrect) {
            input.className = 'logo-input correct';
            feedback.textContent = '✓ Correct!';
            feedback.className = 'feedback correct';
        } else {
            input.className = 'logo-input incorrect';
            feedback.textContent = '✗ Try again...';
            feedback.className = 'feedback incorrect';
        }
    }
    
    isAnswerCorrect(userAnswer, correctAnswer) {
        // Normalize answers for comparison
        const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        const normalizedUser = normalize(userAnswer);
        const normalizedCorrect = normalize(correctAnswer);
        
        // Check exact match
        if (normalizedUser === normalizedCorrect) return true;
        
        // Check common variations
        const variations = this.getAnswerVariations(correctAnswer);
        return variations.some(variation => normalize(variation) === normalizedUser);
    }
    
    getAnswerVariations(answer) {
        const variations = [answer];
        
        // Add common brand variations
        const brandVariations = {
            'shell': ['royal dutch shell'],
            'target': ['target corporation'],
            'apple': ['apple inc'],
            'taco bell': ['tacobell'],
            'red bull': ['redbull'],
            'coca cola': ['coke', 'coca-cola'],
            'pepsi': ['pepsi cola', 'pepsico'],
            'kfc': ['kentucky fried chicken'],
            'playstation': ['sony playstation', 'ps'],
            'monster': ['monster energy'],
            'bp': ['british petroleum'],
            'adidas': ['adidas ag'],
            'amazon': ['amazon.com'],
            'firefox': ['mozilla firefox'],
            'adobe': ['adobe systems']
        };
        
        if (brandVariations[answer]) {
            variations.push(...brandVariations[answer]);
        }
        
        return variations;
    }
    
    calculateScore() {
        this.score = 0;
        this.logoInputs.forEach(input => {
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = input.dataset.answer.toLowerCase();
            
            if (this.isAnswerCorrect(userAnswer, correctAnswer)) {
                this.score++;
            }
        });
    }
    
    updateScore() {
        this.calculateScore();
        this.scoreElement.textContent = this.score;
    }
    
    submitAnswers() {
        if (!this.gameActive) return;
        
        this.gameActive = false;
        this.stopTimer();
        
        // Final check of all answers
        this.logoInputs.forEach(input => {
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = input.dataset.answer.toLowerCase();
            const feedback = input.nextElementSibling;
            
            input.disabled = true;
            
            if (this.isAnswerCorrect(userAnswer, correctAnswer)) {
                input.className = 'logo-input correct';
                feedback.textContent = '✓ Correct!';
                feedback.className = 'feedback correct';
            } else {
                input.className = 'logo-input incorrect';
                feedback.textContent = `✗ ${input.dataset.answer}`;
                feedback.className = 'feedback incorrect';
            }
        });
        
        // Calculate final score and show results
        this.calculateScore();
        this.showResults();
        
        // Hide buttons
        this.submitBtn.style.display = 'none';
    }
    
    showResults() {
        const endTime = new Date();
        const totalTime = endTime - this.startTime;
        const minutes = Math.floor(totalTime / 60000);
        const seconds = Math.floor((totalTime % 60000) / 1000);
        
        this.finalScoreElement.textContent = this.score;
        this.finalTimeElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Generate performance message
        const percentage = (this.score / this.totalQuestions) * 100;
        let message = '';
        
        if (percentage === 100) {
            message = '🏆 Perfect Score! You\'re a logo master!';
        } else if (percentage >= 90) {
            message = '🥇 Excellent! You know your brands well!';
        } else if (percentage >= 80) {
            message = '🥈 Great job! Very impressive brand knowledge!';
        } else if (percentage >= 70) {
            message = '🥉 Good work! You\'re pretty good with logos!';
        } else if (percentage >= 60) {
            message = '👍 Not bad! Keep practicing to improve!';
        } else if (percentage >= 50) {
            message = '📚 Room for improvement, but you\'re getting there!';
        } else {
            message = '💪 Keep trying! Brand recognition takes practice!';
        }
        
        this.performanceMessageElement.textContent = message;
        this.results.style.display = 'block';
        
        // Scroll to results
        this.results.scrollIntoView({ behavior: 'smooth' });
    }
    
    resetGame() {
        this.gameActive = false;
        this.stopTimer();
        this.score = 0;
        
        // Reset UI
        this.startBtn.style.display = 'inline-block';
        this.submitBtn.style.display = 'none';
        this.resetBtn.style.display = 'none';
        this.gameGrid.style.display = 'none';
        this.results.style.display = 'none';
        
        // Reset timer and score displays
        this.timerElement.textContent = '00:00';
        this.scoreElement.textContent = '0';
        
        // Clear all inputs and feedback
        this.logoInputs.forEach(input => {
            input.value = '';
            input.className = 'logo-input';
            input.disabled = false;
            const feedback = input.nextElementSibling;
            feedback.textContent = '';
            feedback.className = 'feedback';
        });
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new LogoTriviaGame();
});

// Add some keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'R' to reset (when not in input field)
    if (e.key.toLowerCase() === 'r' && e.target.tagName !== 'INPUT') {
        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn.style.display !== 'none') {
            resetBtn.click();
        }
    }
    
    // Press 'S' to start (when not in input field)
    if (e.key.toLowerCase() === 's' && e.target.tagName !== 'INPUT') {
        const startBtn = document.getElementById('startBtn');
        if (startBtn.style.display !== 'none') {
            startBtn.click();
        }
    }
    
    // Press 'Enter' to submit when not focused on input
    if (e.key === 'Enter' && e.target.tagName !== 'INPUT') {
        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn.style.display !== 'none') {
            submitBtn.click();
        }
    }
}); 