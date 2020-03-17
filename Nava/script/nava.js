var oscillator = null;
var isPlaying = false;
var context = null;
var volume = null;
var waveTablePlay = null;
function dec(decreaseTime) {
    volume.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+decreaseTime)
}
function makectn() {
        context = new AudioContext();
        volume = context.createGain();
        volume.connect(context.destination);
        oscillator = context.createOscillator();
        oscillator.type = 'sine';
        waveTablePlay = context.createPeriodicWave(curveCos, curveSin, {disableNormalization: true});
        oscillator.setPeriodicWave(waveTablePlay);
        volume.gain.setValueAtTime(1, context.currentTime);
        oscillator.frequency.setValueAtTime(0, context.currentTime);
        oscillator.connect(volume);
}
function play(Lfreq, Lgain) {
    if ((document.getElementById('btn-MousePlay').className=='btn-mouse-started')) {
        volume.gain.setValueAtTime(Lgain, context.currentTime);
        oscillator.frequency.value = parseInt(Lfreq);
        waveTablePlay = context.createPeriodicWave(curveCos, curveSin, {disableNormalization: true});
        oscillator.setPeriodicWave(waveTablePlay);
    }
}
function BeginPlay() {
    let _vl = document.getElementById('btn-MousePlay');
    if (_vl.className=='btn-mouse') {
        makectn();
        oscillator.start();
        _vl.className = 'btn-mouse-started';
    }
    else {
        if (_vl.className=='btn-mouse-started') {
            _vl.className = 'btn-mouse-paused';
            oscillator.stop();
        }
        else {
            _vl.className = 'btn-mouse-started';
            makectn();
            oscillator.start();
        }
    }
}
var oscMT = [];
var contextMt = [];
var volumeMT = [];
function BeginPlayMultitouch() {
    let clsBtn = document.getElementById("btn-multitouchPlay");
    if (clsBtn.className=="btn-touch") {
        for (let index = 0; index < 10; index++) {
            contextMt[index] = new AudioContext();
            volumeMT[index] = contextMt[index].createGain();
            volumeMT[index].connect(contextMt[index].destination);
            oscMT[index] = contextMt[index].createOscillator();
            oscMT[index].type = 'sine';
            volumeMT[index].gain.setValueAtTime(0.00001, contextMt[index].currentTime);
            oscMT[index].frequency.setValueAtTime(12, contextMt[index].currentTime);
            oscMT[index].connect(volumeMT[index]);
            oscMT[index].start();
        }
        clsBtn.className="btn-touch-started";
    }
    else {
        if (clsBtn.className=="btn-touch-started") {
            clsBtn.className="btn-touch-paused";
        } else {
            clsBtn.className="btn-touch-started";
        }
    }   
}

function playMT(identifierMt,Lfreq, Lgain, _Move___Start_Stop = 0) {
    if (document.getElementById("btn-multitouchPlay").className=="btn-touch-started") { 
        volumeMT[identifierMt].gain.cancelScheduledValues(contextMt[identifierMt].currentTime);     

        if (_Move___Start_Stop==0) {
            
            // console.log((0.000001+Lgain**2).toPrecision(2))
            //console.log(contextMt[identifierMt].currentTime)
            let _TheValueFreqTogainStop = 6*((2/(oscMT[identifierMt].frequency.value)).toPrecision(2))
            _TheValueFreqTogainStop = .01;

            if (Lgain<0.1) {
                volumeMT[identifierMt].gain.setValueAtTime(volumeMT[identifierMt].gain.value, contextMt[identifierMt].currentTime);

                volumeMT[identifierMt].gain.exponentialRampToValueAtTime(((0.0001).toPrecision(2)), contextMt[identifierMt].currentTime+_TheValueFreqTogainStop);
                
            } else {
                oscMT[identifierMt].frequency.setValueAtTime(Lfreq, contextMt[identifierMt].currentTime);

                volumeMT[identifierMt].gain.setValueAtTime(volumeMT[identifierMt].gain.value, contextMt[identifierMt].currentTime);
                volumeMT[identifierMt].gain.exponentialRampToValueAtTime((0.000001+Lgain**2/1).toPrecision(2), contextMt[identifierMt].currentTime+_TheValueFreqTogainStop);

            }                  
        } else {

            volumeMT[identifierMt].gain.setValueAtTime(volumeMT[identifierMt].gain.value, contextMt[identifierMt].currentTime);
            oscMT[identifierMt].frequency.setValueAtTime(Lfreq, contextMt[identifierMt].currentTime);
            volumeMT[identifierMt].gain.exponentialRampToValueAtTime(Lgain, contextMt[identifierMt].currentTime+.005);

        }

            waveTablePlay = contextMt[identifierMt].createPeriodicWave(curveCos, curveSin, {disableNormalization: true});
            oscMT[identifierMt].setPeriodicWave(waveTablePlay);
    }


}


// var plMT_cnter = 1;
// function playMT(identifierMt,Lfreq, Lgain) {
//     contextMt[index] = new AudioContext();
//     volumeMT[index] = contextMt[index].createGain();
//     volumeMT[index].connect(contextMt[index].destination);
//     oscMT[index] = contextMt[index].createOscillator();
//     oscMT[index].type = 'sine';
//     volumeMT[index].gain.setValueAtTime(0, contextMt[index].currentTime);
//     oscMT[index].frequency.setValueAtTime(0**(index/12), contextMt[index].currentTime);
//     oscMT[index].connect(volumeMT[index]);
//     oscMT[index].start();
// }
