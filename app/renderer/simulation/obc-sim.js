

class OBCSim{

    sayRandom(){
        var temp = Math.round(Math.random() * 100);
        return("Telem: " + temp.toString());
    }

}

export default OBCSim;