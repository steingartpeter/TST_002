export default class GNRL_HLPR{
    rndmInt(minNr=0, maxNr=100){
        return Math.floor(minNr + Math.random*(maxNr-minNr))
    }
}