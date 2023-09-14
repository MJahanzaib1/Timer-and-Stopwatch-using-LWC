import { LightningElement ,api} from 'lwc';

export default class Time extends LightningElement {
    counter = 0;
    time = '0s 00';
    timeRef = 0;

    @api 
    StopWatchTimer(event){
        //console.log('Inside setStopWatchTimer(event) ', event);
        if(event === 'Start'){
            console.log('Inside label === Start');
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
        console.log('Inside SetTimer()')
        this.timeRef = window.setInterval(()=>{
                this.counter = this.counter + 1;
                this.time =  this.secondToHms(this.counter);
        },1000)  
    }
    secondToHms(num){
        num = Number(num);
        const hrs = Math.floor(num / 3600);
        const min = Math.floor( num % 3600 / 60);
        const sec = Math.floor(num % 3600 % 60);
        //const msec = Math.floor(num % 3600000 % 60000 % 1000 / 16.66);


        const hrsDisplay = hrs > 0 ? hrs + ' h ': '';
        const minDisplay = min > 0 ? min + ' m ': '';
        const secDisplay = sec > 0 ? sec + ' s ': '';
        //const msecDisplay = msec > 0 ? msec : '';

        return hrsDisplay + minDisplay + secDisplay; //+ msecDisplay;

    }
      
}