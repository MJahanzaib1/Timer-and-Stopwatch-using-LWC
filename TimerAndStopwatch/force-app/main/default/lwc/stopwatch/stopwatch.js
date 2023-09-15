import { LightningElement } from 'lwc';

export default class Stopwatch extends LightningElement {
    isSelected = false;
    label = '';
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
        this.template.querySelector('c-time').StopWatchHandler(this.label);
    }
    actionHandler(){
        this.label = 'Reset';
        console.log(this.label);
        this.isSelected = !this.isSelected;
        this.template.querySelector('c-time').StopWatchHandler(this.label);
    }
    
}