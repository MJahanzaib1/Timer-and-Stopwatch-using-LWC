import { LightningElement, track } from 'lwc';

export default class Timer extends LightningElement {
    
    @track displayTime = '00h 00m 00s';
    @track timerDuration = 0;
    @track timerRunning = false;
    @track isDisplayTime = true;
    hours = 0;
    minutes = 0;
    seconds = 0;
    timerInterval = 0;
    secondsPassed = 0;
    handleHoursChange(event) {
        if(event.target.value === ''){
            this.hours = parseInt(0);
        }
        else{
            this.hours = parseInt(event.target.value);
        }
    }

    handleMinutesChange(event) {
        if(event.target.value === ''){
            this.minutes = parseInt(0);
        }
        else{
            this.minutes = parseInt(event.target.value);
        }
    }

    handleSecondsChange(event) {
        if(event.target.value === ''){
            this.seconds = parseInt(0);
        }
        else{
            this.seconds = parseInt(event.target.value);
        }
    }

    handleInputChange() {
        this.secondsPassed = 0;
        this.timerDuration = ( parseInt(this.hours) * 3600) + 
        ( parseInt(this.minutes) * 60) + 
        parseInt(this.seconds);
    }

    handleClick() {
        this.timerRunning = !this.timerRunning;
        if(this.timerRunning){
            const temp = this.secondsPassed;
            this.handleInputChange();
            this.secondsPassed = temp;
            this.startTimer();
        }
        else{
            this.stopTimer();
        }
    }
    startTimer() {
        this.isDisplayTime = false;
        const targetTime = new Date();
        targetTime.setSeconds(targetTime.getSeconds() + parseInt(this.timerDuration) - this.secondsPassed);
        this.updateTimer(targetTime);
        this.secondsPassed++;
        this.timerRunning = true;

        this.timerInterval = setInterval(() => {
            this.updateTimer(targetTime);
            this.secondsPassed++;
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timerInterval);
        this.timerRunning = false;
    }

    resetTimer() {
        this.isDisplayTime = true;
        clearInterval(this.timerInterval);
        this.timerRunning = false;
        this.displayTime = '00h 00m 00s';
        this.timerDuration = 0;
        this.secondsPassed = 0;
    }

    updateTimer(targetTime) {
        const currentTime = new Date();
        const timeDifference = Math.max(targetTime - currentTime, 0);
        const hrs = Math.floor(timeDifference / 3600000);
        const min = Math.floor((timeDifference % 3600000) / 60000);
        const sec = (Math.floor((timeDifference % 60000) / 1000))
        const hrsDisplay = hrs > 0 ? hrs + ' h ': '';
        const minDisplay = min > 0 ? min + ' m ': '';
        const secDisplay = sec > 0 ? sec + ' s ': '00s';
        this.displayTime = hrsDisplay + minDisplay + secDisplay;
        if (timeDifference === 0) {
            this.stopTimer();
            this.isDisplayTime = true;
        }
    }

}

