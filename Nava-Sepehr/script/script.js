
class Nava {
    constructor (_name='nava',_width=274,_height=(274),_number_of_keys=4,_color=0,number_of_keys_in_a_circle_of_keys=_number_of_keys,_dangs="shur",_first_frequency=360) {


        this.name = _name+parseInt(Math.random()*1000000);

        this.keynumber = _number_of_keys;
        this.key_circle = number_of_keys_in_a_circle_of_keys;
        this.keyAudio = [];
        this.intervals = {"shur":[2**(0/1200),2**(140/1200),2**(280/1200),2**(500/1200)], "chahargah":[2**(0/1200),2**(140/1200),2**(380/1200),2**(500/1200)] , "nava":[2**(0/1200),2**(200/1200),2**(280/1200),2**(500/1200)], "mahur":[2**(0/1200),2**(200/1200),2**(380/1200),2**(500/1200)]}
        let _interval_constractor = {};
        for (const key in this.intervals) {
            if (this.intervals.hasOwnProperty(key)) {
                _interval_constractor[key] = this.intervals[key]
                for (const key_in in this.intervals) {
                    if (this.intervals.hasOwnProperty(key_in)) {
                        let _arr_to_add = [];
                        for (let index = 0; index < this.intervals[key_in].length; index++) {
                            _arr_to_add[index]=2**(500/1200)*this.intervals[key_in][index];
                            
                        }
                        _interval_constractor[key+" "+key_in] = new Set(this.intervals[key].concat(_arr_to_add));
                        _interval_constractor[key+" "+key_in] = Array.from(_interval_constractor[key+" "+key_in])
                    }
                }
            }
        }

        this.intervals =_interval_constractor;


        this.backgroundcolors = ['rgb(213,173,163)','rgb(193,163,103)','rgb(153,153,163)','rgb(113,143,163)'];
        this._dangs =_dangs;
        this.firstFrequency = _first_frequency;
        // ['#D5ADA3','#EDD3AB','#EDABDC','#E3DCA3'];

        this.parentdiv = document.getElementById(_name)
        this.parentdiv.addEventListener('contextmenu', event => event.preventDefault());
        _name = this.name;
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", _width);
        this.svg.setAttribute("height", _height);
        this.svg.size = [_width,_height];
        this.svg.id = "svg-"+_name;
        this.svg.setAttribute("viewBox","0 0 "+_width*1+" "+_height*1)
        this.parentdiv.appendChild(this.svg); 

        this.gBase = document.createElementNS("http://www.w3.org/2000/svg", 'g');
        this.gBase.id = "g-base-"+_name;
        this.svg.appendChild(this.gBase);

        this.rectbase = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        this.rectbase.setAttribute("id","rect-base-"+_name);
        this.rectbase.setAttribute("width",_width);
        this.rectbase.setAttribute("height",_height);
        this.rectbase.size=[_width,_height]
        this.rectbase.setAttribute("x",0);
        this.rectbase.setAttribute("y",0);
        this.rectbase.setAttribute("rx",3*this.svg.size[0]/(5+33*this.keynumber));
        this.rectbase.setAttribute("ry",3*this.svg.size[0]/(5+33*this.keynumber));
        this.rectbase.setAttribute("opacity",1)
        this.rectbase.setAttribute("fill", this.backgroundcolors[_color]);

        //this.rectbase.setAttribute("fill", 'rgb(214,154,153)');
        this.rectbase.setAttribute("class", 'navaclass');

        this.gBase.appendChild(this.rectbase);

        this.gSurf = document.createElementNS("http://www.w3.org/2000/svg", 'g');
        this.gSurf.id = "g-surf-"+_name;
        this.svg.appendChild(this.gSurf);

        this.rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        this.rect.setAttribute("id","rect-"+_name);
        this.rect.setAttribute("width",_width);
        this.rect.setAttribute("height",_height);
        this.rect.size=[_width,_height]
        this.rect.setAttribute("x",0);
        this.rect.setAttribute("y",0);
        this.rect.setAttribute("rx",3*this.svg.size[0]/(5+33*this.keynumber));
        this.rect.setAttribute("ry",3*this.svg.size[0]/(5+33*this.keynumber));
        this.rect.setAttribute("opacity",0)
        this.rect.setAttribute("fill", 'rgb(109,109,109)');
        this.rect.setAttribute("class", 'navaclass');

        this.gSurf.appendChild(this.rect);

        
        this.gb = this.GridBoardbutton(this.intervals[_dangs]);

        //this.keys = 
    }

    static sahar_color = ['rgb(213,173,163)','rgb(35,36,41)','rgb(5, 5, 7)','rgb(183,103,116)','rgb(97,55,56)'];
    static kashi_firoze_color = ['rgb(95,180,187)','rgb(159,74,54)','rgb(189,119,47)','rgb(11,22,54)','rgb(254,243,220)','rgb(26,15,58)'];

    GridBoardline(_array) {               
        
        let _colorPath_Su='rgb('+200+','+200+','+200+')';

        for (let index = 0; index < _array.length; index++) {
            let __freq = parseInt(_array[index]);
            if (__freq < this.rect.size[0]) {
                let aPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
                aPath.setAttribute("d", "M"+__freq+" "+0+" L"+__freq+" "+this.rect.size[1]+" L"+(__freq+1)+" "+this.rect.size[1]+" L"+(__freq+1)+" "+(0)+" Z")
                aPath.setAttribute("d", "M"+__freq+" "+0+" L"+__freq+" "+this.rect.size[1]+" L"+(__freq+1)+" "+this.rect.size[1]+" L"+(__freq+1)+" "+(0)+" Z")
                aPath.setAttribute("stroke", _colorPath_Su)
                aPath.setAttribute("stroke-width", 1)
                aPath.setAttribute("fill", "none")
                aPath.setAttribute("class","grid-path-class")
                aPath.setAttribute("opacity",.6)
                aPath.setAttribute("id","path"+index);

                document.getElementById("g-base").appendChild(aPath)
            }
            else {
            }
        } 
    return "Parsi" 
    }   
    GridBoardbutton() {   
        let _key_color = 'rgb(5, 5, 7)';
        let _key_color_over = 'rgb(35,36,41)';
        let _key_color_active = 'rgb(183,103,116)';          
        for (let index = 0; index < this.keynumber; index++) {

            let dis_unit = this.svg.size[0]/(5+33*this.keynumber);
            let aRect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
            aRect.setAttribute("id","rect-key-"+parseInt(Math.random()*1000));
            aRect.setAttribute("width",dis_unit*32);
            aRect.setAttribute("height",this.svg.size[1]-6*dis_unit);
            aRect.setAttribute("x",3*dis_unit+index*dis_unit+index*32*dis_unit);
            aRect.setAttribute("y",3*dis_unit);
            aRect.setAttribute("rx",3*dis_unit);
            aRect.setAttribute("ry",3*dis_unit);
            aRect.setAttribute("opacity",1)
            aRect.setAttribute("fill", _key_color);
            // aRect.setAttribute("stroke",'none')rgb('+index*60+','+80+','+100+')
            // aRect.setAttribute("stroke-width", '1')
            aRect.addEventListener('mousedown', () => {event.preventDefault();aRect.setAttribute("fill", _key_color_active);});
            aRect.addEventListener('mouseup', () => {event.preventDefault();aRect.setAttribute("fill", _key_color_over);});
            aRect.addEventListener('mouseover', () => {event.preventDefault();aRect.setAttribute("fill", _key_color_over)});
            aRect.addEventListener('mouseleave',() => {if (event.cancelable) {event.preventDefault()};aRect.setAttribute("fill", _key_color)});
            aRect.addEventListener('touchstart',() => {if (event.cancelable) {event.preventDefault()};aRect.setAttribute("fill", _key_color_active);navaz(this,1);});
            aRect.addEventListener('touchmove',() => {if (event.cancelable) {event.preventDefault()}});      
            aRect.addEventListener('touchend',() => {if (event.cancelable) {event.preventDefault()};aRect.setAttribute("fill", _key_color);navaz(this,0.0000001);});
            
            this.gSurf.appendChild(aRect);


            this.keyAudio[index] = {};
            this.keyAudio.audiotContext = window.AudioContext || window.webkitAudioContext;
            this.keyAudio[index].context = new AudioContext(); 
            this.keyAudio[index].gainNode = this.keyAudio[index].context.createGain();
            this.keyAudio[index].gainNode.connect(this.keyAudio[index].context.destination);
            this.keyAudio[index].oscillator = this.keyAudio[index].context.createOscillator()
            this.keyAudio[index].oscillator.frequency.value = this.intervals[this._dangs][index]*this.firstFrequency;
            this.keyAudio[index].oscillator.connect(this.keyAudio[index].gainNode);
            this.keyAudio[index].start_status = 0;
            this.keyAudio[index].gainNode.gain.setValueAtTime(0.00001, this.keyAudio[index].context.currentTime);

            function navaz(_this,_gain) {
                //_this.keyAudio[index].gainNode.gain.cancelScheduledValues(_this.keyAudio[index].context);     

                if (_this.keyAudio[index].start_status == 0) {
                    _this.keyAudio[index].oscillator.start();
                    _this.keyAudio[index].start_status =1;
                    _this.keyAudio[index].gainNode.gain.cancelScheduledValues(_this.keyAudio[index].context.currentTime);
                    _this.keyAudio[index].gainNode.gain.setValueAtTime(_this.keyAudio[index].gainNode.gain.value, _this.keyAudio[index].context.currentTime);
                    _this.keyAudio[index].gainNode.gain.exponentialRampToValueAtTime(_gain, _this.keyAudio[index].context.currentTime+.06);
                }
                else {
                _this.keyAudio[index].gainNode.gain.cancelScheduledValues(_this.keyAudio[index].context.currentTime);
                _this.keyAudio[index].gainNode.gain.setValueAtTime(_this.keyAudio[index].gainNode.gain.value, _this.keyAudio[index].context.currentTime);
                _this.keyAudio[index].gainNode.gain.exponentialRampToValueAtTime(_gain, _this.keyAudio[index].context.currentTime+.06);
                }
            }



            let _color_object_id = ["rgb(213,173,163)",'rgb(97,55,56)']            

            
            for (let in_index = 0; in_index < (this.key_circle-2).toString(2).length; in_index++) {
                function _color(i) {
                    if (i==undefined||i=='N') {

                        return 0
                    } else {

                        return i
                    }
                }
                let aCircle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                aCircle.setAttribute("id","circle-key-"+parseInt(Math.random()*1000));
                aCircle.setAttribute("cx",12*dis_unit+index*dis_unit+index*32*dis_unit-6*dis_unit);
                aCircle.setAttribute("cy",8*dis_unit+in_index*3*dis_unit);
                aCircle.setAttribute("r",dis_unit);
                aCircle.setAttribute("opacity",1);
                //aCircle.setAttribute("fill", _color_object_id[((index).toString(2)[in_index])]);
                aCircle.setAttribute("fill", _color_object_id[_color(parseInt(((index+1)%(this.key_circle))).toString(2).split("").reverse()[in_index])]);
                this.gSurf.appendChild(aCircle);                
            }
           

            // let aText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
            // aText.innerHTML="0110";
            // aText.setAttributeNS(null,"x",0)
            // aText.setAttributeNS(null,"y",15)
            // aText.setAttributeNS(null,"font-family","Tahoma, Geneva, Verdana, sans-serif")
            // aText.setAttributeNS(null,"font-size","smaller")
            // aText.setAttributeNS(null,"fill","gray")            


            // this.gSurf.appendChild(aText);
// 
// console.log(aText.innerHTML)

        
            // 64, 214, 219






            //add four circle top left/ change color based on 6,7,8,9,10,11 distance in talaei system
            
      
      
        }
    return 
    } 
}

var aNavaBoardchahargah = new Nava('daramad-o-rohab',620,100,7,0,8,"shur shur",360*4/3)
