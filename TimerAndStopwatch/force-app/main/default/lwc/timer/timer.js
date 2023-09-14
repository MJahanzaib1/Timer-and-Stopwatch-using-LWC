import { LightningElement } from 'lwc';

export default class Timer extends LightningElement {
    isSelected = false;
    label = '';
    startCounter = 0;
    handleStartChange(event){
        if(event.target.value===''){
            console.log('In if event.target.value===')
            this.startCounter = parseInt(0);
        }
        else{
            console.log('In else event.target.value===')
            this.startCounter = parseInt(event.target.value);
        }
        
    }
    handleClick() {
        this.isSelected = !this.isSelected;
        if(this.isSelected){
            this.label = 'Start';
            console.log('Stop')
        }
        else{
            this.label = 'Stop';
            console.log('Start')
        }
        this.template.querySelector('c-time').setStopWatchTimer(this.label);
    }
    actionHandler(){
        this.label = 'Reset';
        console.log(this.label);
        this.isSelected = !this.isSelected;
        this.template.querySelector('c-time').setStopWatchTimer(this.label);
    }
}