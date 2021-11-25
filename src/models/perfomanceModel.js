/**
* @param {object} performance data 
**/

export class PerformanceModel {
    //translate from english to french
    translation = {
        "cardio": "Cardio",
        "energy": "Energie",
        "endurance": "Endurance",
        "strength": "Force",
        "speed": "Vitesse",
        "intensity": "Intensité"
    };


    constructor(performance) {
        this.id = performance.data.userId
        this.kind = performance.data.kind
        this.data = performance.data.data.map((el) => ({
            value: el.value,
            kind: this.translation[this.kind[el.kind]]
        }))
    }
}