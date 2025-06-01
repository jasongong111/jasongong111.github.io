// Logo Trivia Game JavaScript

class LogoTriviaGame {
    constructor() {
        this.startTime = null;
        this.gameActive = false;
        this.timerInterval = null;
        this.score = 0;
        this.totalQuestions = 20;
        this.timeLimit = 120; // 2 minutes in seconds
        this.timeRemaining = this.timeLimit;
        
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
        this.updateTimerDisplay();
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
        this.timeRemaining = this.timeLimit;
        
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
        this.updateTimerDisplay();
        
        this.timerInterval = setInterval(() => {
            if (this.gameActive) {
                this.timeRemaining--;
                this.updateTimerDisplay();
                
                // Change timer color when time is running low
                if (this.timeRemaining <= 30) {
                    this.timerElement.style.color = '#ff4444';
                    this.timerElement.style.fontWeight = 'bold';
                } else if (this.timeRemaining <= 60) {
                    this.timerElement.style.color = '#ff8800';
                    this.timerElement.style.fontWeight = 'bold';
                }
                
                // Auto-submit when time runs out
                if (this.timeRemaining <= 0) {
                    this.timeOut();
                }
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        this.timerElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Reset timer color when starting
        if (this.timeRemaining === this.timeLimit) {
            this.timerElement.style.color = 'white';
            this.timerElement.style.fontWeight = '600';
        }
    }
    
    timeOut() {
        if (!this.gameActive) return;
        
        // Show time out message briefly
        const originalText = this.timerElement.textContent;
        this.timerElement.textContent = 'TIME UP!';
        this.timerElement.style.color = '#ff0000';
        this.timerElement.style.fontWeight = 'bold';
        
        // Auto-submit after a brief delay
        setTimeout(() => {
            this.submitAnswers(true); // Pass true to indicate timeout
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
            feedback.textContent = '✅ Correct!';
            feedback.className = 'feedback correct';
        } else {
            input.className = 'logo-input incorrect';
            feedback.textContent = '❌ Try again...';
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
            'ibm': ['international business machines'],
            'qantas': ['qantas airways'],
            'costco': ['costco wholesale'],
            'kodak': ['eastman kodak'],
            'lufthansa': ['deutsche lufthansa'],
            'monster': ['monster energy', 'monster beverage'],
            'qwen': ['qwen ai'],
            'deepseek': ['deep seek', 'deepseek ai'],
            'openai': ['open ai', 'chatgpt'],
            'anthropic': ['claude', 'claude ai'],
            'snapchat': ['snap inc', 'snap'],
            'the north face': ['north face', 'tnf'],
            'nestle': ['nestlé'],
            'walmart': ['wal-mart'],
            'reddit': ['reddit inc'],
            'lipton': ['lipton tea'],
            'xbox': ['microsoft xbox', 'xbox gaming'],
            'lululemon': ['lululemon athletica'],
            'cbs': ['columbia broadcasting system'],
            'tadreamk': ['tadreamk inc']
        };
        
        if (brandVariations[answer.toLowerCase()]) {
            variations.push(...brandVariations[answer.toLowerCase()]);
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
    
    submitAnswers(isTimeout = false) {
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
        this.showResults(isTimeout);
        
        // Hide buttons
        this.submitBtn.style.display = 'none';
    }
    
    showResults(isTimeout = false) {
        const endTime = new Date();
        const totalTimeUsed = this.timeLimit - this.timeRemaining;
        const minutes = Math.floor(totalTimeUsed / 60);
        const seconds = totalTimeUsed % 60;
        
        this.finalScoreElement.textContent = this.score;
        this.finalTimeElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Generate performance message
        const percentage = (this.score / this.totalQuestions) * 100;
        let message = '';
        
        if (isTimeout) {
            message = '⏰ Time\'s up! ';
        }
        
        if (percentage === 100) {
            message += '🏆 Perfect Score! You\'re a logo master!';
        } else if (percentage >= 90) {
            message += '🥇 Excellent! You know your brands well!';
        } else if (percentage >= 80) {
            message += '🥈 Great job! Very impressive brand knowledge!';
        } else if (percentage >= 70) {
            message += '🥉 Good work! You\'re pretty good with logos!';
        } else if (percentage >= 60) {
            message += '👍 Not bad! Keep practicing to improve!';
        } else if (percentage >= 50) {
            message += '📚 Room for improvement, but you\'re getting there!';
        } else {
            message += '💪 Keep trying! Brand recognition takes practice!';
        }
        
        if (isTimeout) {
            message += ' Try again for a full 2 minutes!';
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
        this.timeRemaining = this.timeLimit;
        
        // Reset UI
        this.startBtn.style.display = 'inline-block';
        this.submitBtn.style.display = 'none';
        this.resetBtn.style.display = 'none';
        this.gameGrid.style.display = 'none';
        this.results.style.display = 'none';
        
        // Reset timer and score displays
        this.updateTimerDisplay();
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