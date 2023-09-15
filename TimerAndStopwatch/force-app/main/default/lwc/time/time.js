import { LightningElement ,api} from 'lwc';

export default class Time extends LightningElement {
    counter = 0;
    time = '0 s';
    timeRef = 0;

    @api 
    StopWatchHandler(event){
        if(event === 'Start'){
            this.stopWatch();
        }
        else if(event === 'Stop'){
            window.clearInterval(this.timeRef);
        }
        else if(event === 'Reset'){
            this.counter = 0;
            this.time = '0 s';
            window.clearInterval(this.timeRef);
        }
        
    }
    stopWatch(){
        this.timeRef = window.setInterval(()=>{
            this.counter = ++this.counter;
            this.time =  this.secondToHms(this.counter);
        },10) 
        
    }

    
    secondToHms(num){
        num = Number(num);
        const hrs = Math.floor(num / 360000);
        const min = Math.floor( num / 6000 % 60);
        const sec = Math.floor(num /100 % 60);
        const msec = Math.floor(num % 100 /1.66);


        const hrsDisplay = hrs > 0 ? hrs + ' h ': '';
        const minDisplay = min > 0 ? min + ' m ': '';
        const secDisplay = sec > 0 ? sec + ' s ': '';
        const msecDisplay = msec > 0 ? msec : '';

        return hrsDisplay + minDisplay + secDisplay + msecDisplay;

    }
      
}



// @api 
    // 